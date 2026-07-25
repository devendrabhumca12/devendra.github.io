import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'

interface Testimonial {
  quote: string
  name: string
  role: string
}

// Populate with real, verified LinkedIn recommendations only — never invented.
const TESTIMONIALS: Testimonial[] = []

export function Testimonials() {
  if (TESTIMONIALS.length === 0) {
    return (
      <SectionShell
        id="testimonials"
        eyebrow="Feedback"
        title="What Colleagues Say"
        pendingNote="Awaiting real, verified recommendations (e.g. copied from your LinkedIn Recommendations tab) — nothing is shown here until it's confirmed genuine."
      />
    )
  }

  return (
    <SectionShell id="testimonials" eyebrow="Feedback" title="What Colleagues Say">
      <div className="grid gap-6 sm:grid-cols-2">
        {TESTIMONIALS.map((item, i) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl border border-graphite-700 bg-graphite-900/40 p-8"
          >
            <blockquote className="text-lg leading-relaxed text-mist-100">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-sm font-medium text-mist-100">{item.name}</p>
              <p className="text-xs text-mist-400">{item.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </SectionShell>
  )
}
