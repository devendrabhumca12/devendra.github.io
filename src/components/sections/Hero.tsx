import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useWebglSupported } from '../../hooks/useWebglSupported'

const HeroCanvas = lazy(() => import('../three/HeroCanvas').then((m) => ({ default: m.HeroCanvas })))

const TECH = ['Swift', 'SwiftUI', 'iOS Architecture', 'Core ML', 'React Native', 'Agentic AI']

export function Hero() {
  const reduceMotion = usePrefersReducedMotion()
  const webglSupported = useWebglSupported()

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(76,141,255,0.12),_transparent_60%)]" />

      {!reduceMotion && webglSupported && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium tracking-widest text-accent-400 uppercase"
        >
          Staff / Senior iOS Engineer &middot; Mobile Architect
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-5xl font-medium text-mist-100 sm:text-6xl"
        >
          Devendra Agnihotri
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-mist-300"
        >
          11+ years engineering mobile experiences that scale. Positioning statement pending —
          to be refined once resume/LinkedIn details are confirmed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-graphite-950 transition-transform hover:scale-[1.03]"
          >
            Explore My Work
          </a>
          <a
            href="#resume"
            className="rounded-full border border-graphite-600 px-6 py-3 text-sm font-medium text-mist-100 transition-colors hover:border-accent-500"
          >
            Resume
          </a>
        </motion.div>

        <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wide text-mist-400 uppercase">
          {TECH.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
