import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'

const ROLES = [
  {
    period: '07/2015 – 08/2017',
    company: 'Mobulous Technologies',
    location: 'Noida, India',
    title: 'Software Engineer – iOS',
    note: 'End-to-end App Store delivery across Objective-C and Swift projects; integrated third-party Maps, analytics, and payment SDKs.',
  },
  {
    period: '09/2017 – 08/2019',
    company: 'VVDN Technologies',
    location: 'Noida, India',
    title: 'Senior Software Engineer – iOS',
    note: 'End-to-end features in Swift/SwiftUI with modular architecture; owned production releases, bug fixing, and stability.',
    highlight: '"Gems of the Year" 2018–19',
  },
  {
    period: '08/2019 – 09/2021',
    company: 'Altran (now Capgemini Engineering)',
    location: 'Gurugram, India',
    title: 'Senior Software Engineer – iOS',
    note: 'Shifted focus to app architecture, concurrency, and performance optimization, with CI/CD and unit testing built into the workflow.',
    highlight: '2× "WOW Individual Excellence"',
  },
  {
    period: '09/2021 – Current',
    company: 'Nagarro Software',
    location: 'Noida, India',
    title: 'Staff Engineer – iOS',
    note: 'Owns reusable, scalable technical solutions across multiple projects; partners with product, backend, and QA; mentors engineers on iOS best practices and modern workflows — including AI-assisted development.',
  },
]

export function Career() {
  return (
    <SectionShell id="career" eyebrow="10+ Years" title="Career Journey">
      <div className="relative space-y-10 border-l border-graphite-600 pl-8">
        {ROLES.map((role, i) => (
          <motion.div
            key={role.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-accent-500" />
            <p className="text-xs tracking-widest text-mist-400 uppercase">{role.period}</p>
            <h3 className="mt-1 text-lg font-medium text-mist-100">
              {role.title} &middot; {role.company}
            </h3>
            <p className="text-sm text-mist-400">{role.location}</p>
            <p className="mt-2 max-w-2xl text-mist-300">{role.note}</p>
            {role.highlight && (
              <p className="mt-2 inline-block rounded-full border border-graphite-600 px-3 py-1 text-xs text-accent-400">
                {role.highlight}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
