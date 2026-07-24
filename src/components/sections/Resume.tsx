import { SectionShell } from '../layout/SectionShell'

export function Resume() {
  return (
    <SectionShell id="resume" eyebrow="Resume" title="Download My Resume">
      <a
        href="/resume.pdf"
        download
        className="inline-flex rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-graphite-950 transition-transform hover:scale-[1.03]"
      >
        Download Resume (PDF)
      </a>
      <p className="mt-4 text-sm text-mist-400">
        Placeholder link — drop the real PDF at <code>public/resume.pdf</code> to activate; the
        URL stays the same on future updates.
      </p>
    </SectionShell>
  )
}
