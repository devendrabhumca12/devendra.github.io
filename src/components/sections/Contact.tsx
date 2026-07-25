import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M6.5 3h3l1.5 4.5-2.3 1.8a12 12 0 0 0 5.5 5.5l1.8-2.3L20 13.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.25 8.5h3.4V21h-3.4V8.5Zm6.2 0h3.26v1.71h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.08 2.27 4.08 5.22V21h-3.4v-6.6c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V21h-3.4V8.5Z" />
    </svg>
  )
}

function MediumIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M4 6.5a1.5 1.5 0 0 0-.5-1.2L1.6 3v-.3h6.2l4.8 10.5 4.2-10.5H22V3l-1.6 1.5a.5.5 0 0 0-.2.5v12a.5.5 0 0 0 .2.5L22 19v.3h-7.8V19l1.6-1.6c.16-.16.16-.2.16-.5V7.4l-4.6 11.8h-.6L5.7 7.4v7.9c-.04.4.1.8.4 1.1L8 18.9v.3H2v-.3l1.9-2.5c.3-.3.4-.7.36-1.1V6.5Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

const LINKS = [
  {
    label: 'Email',
    value: 'devendra.bhumca12@gmail.com',
    href: 'mailto:devendra.bhumca12@gmail.com',
    icon: MailIcon,
  },
  { label: 'Phone', value: '+91 8505823517', href: 'tel:+918505823517', icon: PhoneIcon },
  {
    label: 'LinkedIn',
    value: 'devendra-agnihotri-5b0617a8',
    href: 'https://www.linkedin.com/in/devendra-agnihotri-5b0617a8/',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: 'devendrabhumca12',
    href: 'https://github.com/devendrabhumca12',
    icon: GitHubIcon,
  },
  {
    label: 'Medium',
    value: '@devendra.ios1234',
    href: 'https://medium.com/@devendra.ios1234',
    icon: MediumIcon,
  },
]

export function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Get in Touch" title="Let's Build Something Great">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-md text-lg text-mist-300">
            Open to Staff/Senior iOS opportunities where architecture, mentorship, and
            AI-assisted engineering all matter. Happy to talk through a role, a project, or just
            trade notes on Swift concurrency.
          </p>
          <a
            href="mailto:devendra.bhumca12@gmail.com"
            className="mt-8 inline-flex rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-graphite-950 transition-transform hover:scale-[1.03]"
          >
            Email Me
          </a>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-graphite-700 bg-graphite-900/40 p-5 transition-colors hover:border-accent-500/50 hover:bg-graphite-900/70"
            >
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-graphite-600 text-mist-300 transition-colors group-hover:border-accent-500/60 group-hover:text-accent-400">
                <link.icon />
              </span>
              <p className="text-xs font-medium tracking-widest text-mist-400 uppercase">
                {link.label}
              </p>
              <p className="mt-0.5 truncate text-sm text-mist-100">{link.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
