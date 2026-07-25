import { RESUME_FILENAME, announceResumeDownload } from '../../lib/resumeDownload'
import { ThemeToggle } from './ThemeToggle'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#career', label: 'Career' },
  { href: '#universe', label: 'Expertise' },
  { href: '#work', label: 'Work' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-graphite-800/60 bg-graphite-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-medium tracking-wide text-mist-100">
          Devendra Agnihotri
        </a>
        <ul className="hidden gap-8 text-sm text-mist-300 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-mist-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download={RESUME_FILENAME}
            onClick={announceResumeDownload}
            className="rounded-full border border-graphite-600 px-4 py-1.5 text-sm text-mist-100 transition-colors hover:border-accent-500 hover:text-accent-400"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
