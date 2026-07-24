import { SectionShell } from '../layout/SectionShell'

const CORE_NODES = ['Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'Architecture', 'Concurrency']
const EXPLORATION_NODES = ['On-device AI', 'MultipeerConnectivity', 'React Native', 'visionOS']

const STARS = [
  { top: '8%', left: '12%', size: 2, delay: '0s' },
  { top: '18%', left: '82%', size: 3, delay: '0.6s' },
  { top: '4%', left: '55%', size: 2, delay: '1.2s' },
  { top: '32%', left: '92%', size: 2, delay: '0.3s' },
  { top: '78%', left: '88%', size: 3, delay: '1.6s' },
  { top: '90%', left: '18%', size: 2, delay: '0.9s' },
  { top: '85%', left: '48%', size: 2, delay: '2s' },
  { top: '15%', left: '5%', size: 3, delay: '1.4s' },
  { top: '60%', left: '3%', size: 2, delay: '0.4s' },
  { top: '95%', left: '70%', size: 2, delay: '1s' },
]

interface OrbitRingProps {
  nodes: string[]
  radius: number
  duration: number
  reverse?: boolean
  chipClassName: string
}

function OrbitRing({ nodes, radius, duration, reverse, chipClassName }: OrbitRingProps) {
  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-graphite-600"
        style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
      />
      <div
        className={`absolute inset-0 ${reverse ? 'orbit-ring-reverse' : 'orbit-ring'}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {nodes.map((node, i) => {
          const angle = (360 / nodes.length) * i
          return (
            <div
              key={node}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `rotate(${angle}deg) translateX(${radius}px)` }}
            >
              <div
                className={reverse ? 'orbit-node-counter-reverse' : 'orbit-node-counter'}
                style={{ animationDuration: `${duration}s` }}
              >
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <span
                    className={`absolute -translate-x-1/2 -translate-y-1/2 inline-block text-nowrap ${chipClassName}`}
                  >
                    {node}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export function Universe() {
  return (
    <SectionShell
      id="universe"
      eyebrow="Technical Universe"
      title="Where iOS Engineering Meets Adjacent Disciplines"
    >
      <div className="relative mx-auto h-[420px] w-full max-w-[420px]">
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(76,141,255,0.16),_transparent_60%)] blur-2xl" />
        <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(168,120,255,0.12),_transparent_65%)] blur-3xl" />
        <div className="orbit-ring-reverse absolute inset-0" style={{ animationDuration: '140s' }}>
          {STARS.map((star, i) => (
            <span
              key={i}
              className="absolute animate-pulse rounded-full bg-mist-100"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                opacity: 0.5,
              }}
            />
          ))}
        </div>
        <OrbitRing
          nodes={CORE_NODES}
          radius={110}
          duration={50}
          chipClassName="rounded-full border border-accent-500/40 bg-accent-500/10 px-3 py-1.5 text-xs text-mist-100"
        />
        <OrbitRing
          nodes={EXPLORATION_NODES}
          radius={175}
          duration={70}
          reverse
          chipClassName="rounded-full border border-graphite-600 bg-graphite-900/80 px-3 py-1.5 text-xs text-mist-300"
        />
        <div className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-500/50 bg-graphite-900 text-center text-xs font-medium text-mist-100 shadow-[0_0_40px_rgba(76,141,255,0.25)]">
          iOS
          <br />
          Engineering
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-mist-400">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent-400" /> Core — professional,
          resume-verified
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full border border-mist-400" /> Exploration —
          personal &amp; open-source
        </span>
      </div>
    </SectionShell>
  )
}
