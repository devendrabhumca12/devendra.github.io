import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'

const ACHIEVEMENTS = [
  { label: '3× Employee of the Quarter', detail: 'Awarded for excellent performance' },
  { label: '2× WOW Individual Excellence', detail: 'Altran (now Capgemini Engineering)' },
  { label: 'Gems of the Year, 2018–19', detail: 'VVDN Technologies' },
  { label: 'Cursor Hackathon — Team Lead', detail: 'Led the team building an event companion app' },
  { label: 'GitHub Copilot Hackathon', detail: 'Contributed using AI-assisted development' },
  {
    label: 'GenAI & Agentic AI certifications',
    detail: '"Generative AI for Beginners", "Model Context Protocol (MCP): Hands-On with Agentic AI"',
  },
]

export function Achievements() {
  return (
    <SectionShell id="achievements" eyebrow="Recognition" title="Achievements">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-graphite-700 bg-graphite-900/40 p-5"
          >
            <h3 className="mb-1 text-sm font-medium text-mist-100">{item.label}</h3>
            <p className="text-xs text-mist-400">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
