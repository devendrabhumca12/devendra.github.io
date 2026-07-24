import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'

const CORE_CHAIN = [
  ['Swift', 'SwiftUI', 'UIKit', 'Objective-C'],
  ['Architecture (MVVM / Clean)', 'Concurrency (Async/Await, GCD)'],
  ['Performance Optimization', 'CI/CD & Unit Testing'],
]

const EXPLORATION = [
  {
    label: 'On-device AI',
    detail: 'Apple Foundation Models, Vision OCR — FindKeep, MedsPlain, ActionBrief',
  },
  {
    label: 'P2P / MultipeerConnectivity',
    detail: 'Device-to-device sync — Multipeer-ChatApp',
  },
  {
    label: 'Cross-platform',
    detail: 'React Native, offline-first — FormEasy',
  },
  {
    label: 'Spatial computing',
    detail: 'visionOS / SwiftUI — visionProDemo',
  },
]

export function Universe() {
  return (
    <SectionShell
      id="universe"
      eyebrow="Technical Universe"
      title="Where iOS Engineering Meets Adjacent Disciplines"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-sm font-medium tracking-widest text-mist-400 uppercase">
            Core — professional, resume-verified
          </p>
          <div className="space-y-4">
            {CORE_CHAIN.map((row, i) => (
              <motion.div
                key={row.join('-')}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-wrap items-center gap-2"
              >
                {row.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent-500/40 bg-accent-500/10 px-4 py-2 text-sm text-mist-100"
                  >
                    {item}
                  </span>
                ))}
                {i < CORE_CHAIN.length - 1 && (
                  <span className="pl-1 text-mist-400" aria-hidden>
                    ↓
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-6 text-sm font-medium tracking-widest text-mist-400 uppercase">
            Exploration — personal &amp; open-source
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {EXPLORATION.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-graphite-700 bg-graphite-900/60 p-5"
              >
                <h3 className="mb-1 text-sm font-medium text-mist-100">{item.label}</h3>
                <p className="text-xs text-mist-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
