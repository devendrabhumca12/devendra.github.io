import { SectionShell } from '../layout/SectionShell'

const LINKS = [
  { label: 'Email', value: 'devendra.bhumca12@gmail.com', href: 'mailto:devendra.bhumca12@gmail.com' },
  { label: 'Phone', value: '+91 8505823517', href: 'tel:+918505823517' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/devendra-agnihotri-5b0617a8',
    href: 'https://www.linkedin.com/in/devendra-agnihotri-5b0617a8/',
  },
  { label: 'GitHub', value: 'github.com/devendrabhumca12', href: 'https://github.com/devendrabhumca12' },
]

export function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Get in Touch" title="Contact">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-graphite-700 bg-graphite-900/40 p-6 transition-colors hover:border-accent-500/50"
          >
            <p className="mb-1 text-xs font-medium tracking-widest text-mist-400 uppercase">
              {link.label}
            </p>
            <p className="text-sm text-mist-100">{link.value}</p>
          </a>
        ))}
      </div>
    </SectionShell>
  )
}
