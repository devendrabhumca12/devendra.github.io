import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface Testimonial {
  quote: string
  name: string
  title: string
  context: string
}

// Verbatim (lightly copy-edited for typos/grammar only) from real, verified
// LinkedIn recommendations — nothing here is invented.
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I had the pleasure of working with Devendra, and I can confidently say he is an exceptional iOS developer. His deep expertise in Swift and iOS architecture, combined with his problem-solving skills, makes him an invaluable asset to any team. Beyond his technical abilities, Devendra is a fantastic team player — he collaborates effectively, shares knowledge generously, and always contributes to a positive, productive work environment.',
    name: 'Kshitiz Agnihotri',
    title: 'Chief Engineer',
    context: 'Worked together on the same team',
  },
  {
    quote:
      'I had the pleasure of working with Devendra for several years at VVDN Technologies, and I can confidently say that he is one of the most talented iOS developers I have ever met. With over a decade of experience in the field, he has consistently demonstrated exceptional technical skills, creativity, and dedication.',
    name: 'Aman Gupta',
    title: 'Senior Lead iOS Developer, Tech Lead',
    context: 'Worked together at VVDN Technologies',
  },
  {
    quote:
      'I can enthusiastically recommend Devendra. His work ethic and problem-solving skills have consistently impressed me. Devendra is an exemplary developer who approaches his work with exceptional attention to detail and communicates his ideas effectively. He excels not only in his technical abilities but also as a collaborative team member — his willingness to share expertise and support colleagues, including myself, at any time of day has been invaluable.',
    name: 'Jason Pinlac',
    title: 'Senior Software Engineer and iOS Developer',
    context: 'Worked together on the same team',
  },
  {
    quote:
      "I've worked with Devendra on several iOS projects and found him to be exceptionally talented and dedicated. His expertise in Swift and SwiftUI, along with his innovative problem-solving, consistently enhances our work. Devendra is a great team player, always staying current with industry trends. He is a valuable asset to any team. Highly recommended.",
    name: 'Punit Chauhan',
    title: 'Sr. Software Engineer',
    context: 'Worked together on the same team',
  },
  {
    quote:
      'Devendra was the key developer in UKG. In no time, he made a mark in the mobility team with his volunteering approach and keenness to solve unsolved problems. Team members were thrilled to work with Devendra, as he was liberal — a rare quality among engineers. It was great working with him.',
    name: 'Yao Zhang',
    title: 'Engineer',
    context: 'Worked together at UKG',
  },
  {
    quote:
      "Devendra is a very hard-working and responsible individual. He is an excellent software developer and also has exceptional troubleshooting and problem-analytics skills. It's a pleasure to recommend Devendra.",
    name: 'Raveena Rawat',
    title: 'Senior Android Engineer',
    context: 'Worked together on the same team',
  },
  {
    quote:
      "Devendra is a standout performer on any assigned task. He and I worked for almost two years on a large-scale home automation project for IKEA (Smart Home Trådfri). What impressed me most is his ability to work patiently even under short delivery timelines, without compromising quality. He has the ability to lead a team — I'd recommend Devendra if you need to get the job done.",
    name: 'Abhishek Upadhyay',
    title: 'Senior iOS Engineer, Visa',
    context: 'Worked together on the IKEA Home Smart project',
  },
]

const AVATAR_STYLES = [
  'bg-accent-500/15 text-accent-400',
  'bg-purple-500/15 text-purple-400',
  'bg-teal-500/15 text-teal-400',
  'bg-amber-500/15 text-amber-400',
  'bg-rose-500/15 text-rose-400',
  'bg-sky-500/15 text-sky-400',
  'bg-emerald-500/15 text-emerald-400',
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reduceMotion || paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(id)
  }, [reduceMotion, paused])

  function go(delta: number) {
    setIndex((i) => (i + delta + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const active = TESTIMONIALS[index]

  return (
    <SectionShell id="testimonials" eyebrow="Feedback" title="What Colleagues Say">
      <div
        className="relative mx-auto max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <svg
          viewBox="0 0 32 24"
          width="40"
          height="30"
          fill="currentColor"
          className="mb-4 text-accent-500/30"
          aria-hidden
        >
          <path d="M0 24V14.4C0 9.6 1.2 6 3.6 3.6 6 1.2 9.2 0 13.2 0v4.8c-2.4 0-4.2.6-5.4 1.8C6.6 7.8 6 9.4 6 11.4h5.4V24H0Zm17.4 0V14.4c0-4.8 1.2-8.4 3.6-10.8C23.4 1.2 26.6 0 30.6 0v4.8c-2.4 0-4.2.6-5.4 1.8-1.2 1.2-1.8 2.8-1.8 4.8h5.4V24H17.4Z" />
        </svg>

        <div className="min-h-[220px] sm:min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="text-xl leading-relaxed text-mist-100 sm:text-2xl">
                {active.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-medium ${AVATAR_STYLES[index % AVATAR_STYLES.length]}`}
                >
                  {initials(active.name)}
                </span>
                <div>
                  <p className="text-sm font-medium text-mist-100">{active.name}</p>
                  <p className="text-xs text-mist-400">{active.title}</p>
                  <p className="mt-0.5 text-xs text-accent-400">{active.context}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show recommendation from ${t.name}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-accent-500' : 'w-1.5 bg-graphite-600'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous recommendation"
              onClick={() => go(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-graphite-600 text-mist-300 transition-colors hover:border-accent-500 hover:text-accent-400"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next recommendation"
              onClick={() => go(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-graphite-600 text-mist-300 transition-colors hover:border-accent-500 hover:text-accent-400"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
