import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'

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

export function Testimonials() {
  return (
    <SectionShell id="testimonials" eyebrow="Feedback" title="What Colleagues Say">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((item, i) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="flex flex-col rounded-3xl border border-graphite-700 bg-graphite-900/40 p-7"
          >
            <svg
              viewBox="0 0 32 24"
              width="28"
              height="21"
              fill="currentColor"
              className="mb-3 text-accent-500/40"
              aria-hidden
            >
              <path d="M0 24V14.4C0 9.6 1.2 6 3.6 3.6 6 1.2 9.2 0 13.2 0v4.8c-2.4 0-4.2.6-5.4 1.8C6.6 7.8 6 9.4 6 11.4h5.4V24H0Zm17.4 0V14.4c0-4.8 1.2-8.4 3.6-10.8C23.4 1.2 26.6 0 30.6 0v4.8c-2.4 0-4.2.6-5.4 1.8-1.2 1.2-1.8 2.8-1.8 4.8h5.4V24H17.4Z" />
            </svg>
            <blockquote className="flex-1 text-sm leading-relaxed text-mist-300">
              {item.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-graphite-700 pt-4">
              <p className="text-sm font-medium text-mist-100">{item.name}</p>
              <p className="text-xs text-mist-400">{item.title}</p>
              <p className="mt-1 text-xs text-accent-400">{item.context}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </SectionShell>
  )
}
