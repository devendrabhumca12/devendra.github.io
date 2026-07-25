import { Suspense, lazy } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useWebglSupported } from '../../hooks/useWebglSupported'
import { useInView } from '../../hooks/useInView'

const AppCanvas = lazy(() => import('../three/AppCanvas').then((m) => ({ default: m.AppCanvas })))

interface ProjectCardProps {
  name: string
  client: string
  category: string
  description: string
  contributions: string[]
  tech: string[]
  links: { label: string; href: string }[]
  screenshots?: string[]
  index: number
}

export function ProjectCard({
  name,
  client,
  category,
  description,
  contributions,
  tech,
  links,
  screenshots,
  index,
}: ProjectCardProps) {
  const reduceMotion = usePrefersReducedMotion()
  const webglSupported = useWebglSupported()
  const { ref: canvasWrapRef, inView: canvasInView } = useInView<HTMLDivElement>()
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(x, (v) => `${v * 100}%`)
  const glowY = useTransform(y, (v) => `${v * 100}%`)
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(320px circle at ${gx} ${gy}, rgba(76,141,255,0.12), transparent 70%)`,
  )

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (reduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 900,
        backgroundImage: reduceMotion ? undefined : glowBackground,
      }}
      className="relative rounded-3xl border border-graphite-700 bg-graphite-900/50 p-8 [transform-style:preserve-3d]"
    >
      {screenshots && screenshots.length > 0 && (
        <div
          ref={canvasWrapRef}
          className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl bg-graphite-950/40"
        >
          {!reduceMotion && webglSupported ? (
            canvasInView && (
              <Suspense fallback={null}>
                <AppCanvas images={screenshots} />
              </Suspense>
            )
          ) : (
            <img
              src={screenshots[0]}
              alt={`${name} screenshot`}
              loading="lazy"
              className="mx-auto h-full w-auto object-contain"
            />
          )}
        </div>
      )}

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-medium text-mist-100">{name}</h3>
        <span className="text-xs tracking-widest text-mist-400 uppercase">
          {client} &middot; {category}
        </span>
      </div>
      <p className="mt-3 text-mist-300">{description}</p>

      <p className="mt-6 mb-2 text-xs font-medium tracking-widest text-mist-400 uppercase">
        My contribution
      </p>
      <ul className="list-disc space-y-1 pl-5 text-sm text-mist-300 marker:text-accent-400">
        {contributions.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-graphite-600 px-3 py-1 text-xs text-mist-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent-400 hover:text-accent-500"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </motion.article>
  )
}
