import { SectionShell } from '../layout/SectionShell'
import { ProjectCard } from '../layout/ProjectCard'

const PROJECTS = [
  {
    name: 'ENBD X',
    client: 'Emirates NBD',
    category: 'Finance',
    description:
      'Emirates NBD’s mobile banking app covering 150+ services — accounts, cards, transfers, and investments.',
    contributions: [
      'Designed and built reusable components for the Payments and Lending modules.',
    ],
    tech: ['Swift', 'SwiftUI', 'Modular Architecture'],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/ae/app/enbd-x/id1497518128' }],
  },
  {
    name: 'Wedding Vows App',
    client: 'Binary Geckos',
    category: 'Entertainment',
    description:
      'A guest-entertainment app for weddings — photos, event details, dress code, video reels, and important documents in one place.',
    contributions: ['Built the full app from scratch through to its live App Store release.'],
    tech: ['Swift', 'SwiftUI'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/wedding-vows-app/id1598724041' },
    ],
  },
  {
    name: 'NETGEAR Orbi & Nighthawk',
    client: 'NETGEAR',
    category: 'Utilities',
    description:
      'Companion apps for NETGEAR’s mesh WiFi (Orbi) and router (Nighthawk) lines — remote network management, parental controls, and security.',
    contributions: [
      'Owned the onboarding flow for both apps.',
      'Worked on security features and remote network management.',
    ],
    tech: ['Swift', 'SwiftUI', 'REST APIs'],
    links: [
      {
        label: 'Orbi on App Store',
        href: 'https://apps.apple.com/us/app/netgear-orbi-wifi-system-app/id1182184397',
      },
      {
        label: 'Nighthawk on App Store',
        href: 'https://apps.apple.com/in/app/netgear-nighthawk-wifi-app/id1124666597',
      },
    ],
  },
  {
    name: 'IKEA Home smart',
    client: 'Inter IKEA Systems',
    category: 'Lifestyle',
    description:
      'Smart home control app for IKEA’s TRÅDFRI ecosystem — lighting, blinds, and connected devices with voice assistant support.',
    contributions: [
      'Built Google Assistant and Amazon Alexa integrations.',
      'Implemented Sonos integration and the Settings screen.',
      'Ongoing bug fixes and code reviews.',
    ],
    tech: ['Swift', 'SwiftUI', 'HomeKit-adjacent Integrations'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/in/app/ikea-home-smart-1/id1195836071',
      },
    ],
  },
]

export function FeaturedWork() {
  return (
    <SectionShell id="work" eyebrow="Featured Work" title="Published Apps">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} index={i} {...project} />
        ))}
      </div>
    </SectionShell>
  )
}
