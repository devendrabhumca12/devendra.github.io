import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'

const PILLARS = [
  {
    title: 'Architecture first',
    body: 'MVVM and Clean Architecture, SOLID principles, and modular design — built to stay reliable as a codebase and team grow.',
  },
  {
    title: 'Performance & concurrency',
    body: 'Async/await and GCD used deliberately, with performance optimization treated as a first-class concern, not an afterthought.',
  },
  {
    title: 'AI-assisted, not AI-replaced',
    body: 'Cursor, GitHub Copilot, and Claude sped into daily workflow with prompt engineering — used to raise code quality and ship faster, never to skip understanding the system.',
  },
  {
    title: 'Always learning',
    body: 'GenAI and MCP-certified, a hackathon team lead, and currently exploring React Native and visionOS — staying a hands-on builder, not just an architect on paper.',
  },
]

export function About() {
  return (
    <SectionShell id="about" eyebrow="Engineering Philosophy" title="About">
      <div className="grid gap-10 sm:grid-cols-[1.1fr_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-mist-300"
        >
          I'm a Staff iOS Engineer at Nagarro Software with 10+ years across Swift, SwiftUI,
          and Objective-C, specializing in app architecture, performance optimization, and
          scalable mobile solutions. Over that decade I've shipped consumer IoT apps, an
          enterprise banking super-app, and everything in between — while mentoring engineers
          on iOS best practices, debugging, and modern development workflows along the way.
        </motion.p>
        <div className="grid gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-1 text-base font-medium text-mist-100">{pillar.title}</h3>
              <p className="text-sm text-mist-400">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
