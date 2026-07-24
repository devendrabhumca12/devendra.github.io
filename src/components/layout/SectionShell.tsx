import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionShellProps {
  id: string
  eyebrow: string
  title: string
  pendingNote?: string
  children?: ReactNode
}

export function SectionShell({ id, eyebrow, title, pendingNote, children }: SectionShellProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="mb-3 text-sm font-medium tracking-widest text-accent-400 uppercase">
          {eyebrow}
        </p>
        <h2 className="mb-8 text-3xl font-medium text-mist-100 sm:text-4xl">{title}</h2>
        {children ?? (
          <div className="rounded-2xl border border-dashed border-graphite-600 bg-graphite-900/40 p-8 text-mist-400">
            {pendingNote ?? 'Content pending — awaiting verified details from resume/LinkedIn/GitHub.'}
          </div>
        )}
      </motion.div>
    </section>
  )
}
