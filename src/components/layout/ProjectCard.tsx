import { motion } from 'framer-motion'

interface ProjectCardProps {
  name: string
  client: string
  category: string
  description: string
  contributions: string[]
  tech: string[]
  links: { label: string; href: string }[]
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
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="rounded-3xl border border-graphite-700 bg-graphite-900/50 p-8"
    >
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
