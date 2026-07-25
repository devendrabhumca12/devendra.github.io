import { useState } from 'react'
import { motion } from 'framer-motion'

export function ProfilePhoto() {
  const [errored, setErrored] = useState(false)

  if (errored) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6 },
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="relative mx-auto h-40 w-40 shrink-0 sm:h-48 sm:w-48"
    >
      <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,_rgba(76,141,255,0.25),_transparent_70%)] blur-xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-accent-500/40 bg-graphite-900 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        <picture>
          <source srcSet="/profile.webp" type="image/webp" />
          <img
            src="/profile.jpg"
            alt="Devendra Agnihotri"
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        </picture>
      </div>
    </motion.div>
  )
}
