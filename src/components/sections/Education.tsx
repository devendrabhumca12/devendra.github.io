import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'

const DEGREES = [
  {
    degree: 'Master in Computer Application (MCA)',
    school: 'Banaras Hindu University (BHU), Varanasi',
    period: '2012 – 2015',
    note: 'AIR 63 in the BHU MCA entrance exam · AIR 59 in the UPTU MCA entrance exam',
    logo: '/logos/bhu.webp',
  },
  {
    degree: 'Bachelor of Science (BSc)',
    school: 'CSJM University, Kanpur',
    period: 'Completed 2011',
    logo: '/logos/csjmu.webp',
  },
]

export function Education() {
  return (
    <SectionShell id="education" eyebrow="Education" title="Academic Background">
      <div className="grid gap-4 sm:grid-cols-2">
        {DEGREES.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-5 rounded-2xl border border-graphite-700 bg-graphite-900/40 p-6"
          >
            <img
              src={item.logo}
              alt={`${item.school} logo`}
              className="h-14 w-14 shrink-0 rounded-full bg-white object-contain p-1.5"
            />
            <div>
              <p className="text-xs font-medium tracking-widest text-accent-400 uppercase">
                {item.period}
              </p>
              <h3 className="mt-2 text-base font-medium text-mist-100">{item.degree}</h3>
              <p className="mt-1 text-sm text-mist-400">{item.school}</p>
              {item.note && <p className="mt-3 text-sm text-mist-300">{item.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
