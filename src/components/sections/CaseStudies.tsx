import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { SectionShell } from '../layout/SectionShell'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useWebglSupported } from '../../hooks/useWebglSupported'

const FormEasyCanvas = lazy(() =>
  import('../three/FormEasyCanvas').then((m) => ({ default: m.FormEasyCanvas })),
)

const STAGES = [
  {
    label: 'Problem',
    body: 'Upload portals (government, job, exam, KYC) reject files for narrow, mechanical reasons — wrong format, wrong pixel dimensions, wrong size. Generic converters require uploading personal photos and ID documents to a third-party server.',
  },
  {
    label: 'Constraints',
    body: 'No backend, no accounts, no uploads — every step of crop, resize, compress, and format conversion had to run entirely on-device.',
  },
  {
    label: 'Solution',
    body: 'A bare React Native + TypeScript app (not Expo — native image modules needed full control) that takes a photo and a portal’s stated requirements and produces a file guaranteed to match.',
  },
  {
    label: 'Architecture',
    body: 'Feature-based folders, not layered. A UI-free imageProcessing service holds the crop-rectangle math and JPEG quality binary search as pure functions — testable in Jest with no simulator required.',
  },
  {
    label: 'Trade-offs',
    body: 'No interactive crop UI (automatic center-crop instead, to avoid gesture-handling dependencies). PDF support intentionally left out — reliable cross-platform PDF compression without paid SDKs was judged out of scope.',
  },
  {
    label: 'Result',
    body: 'A working offline-first pipeline with an honest Ready to Upload / Best Effort / Could Not Meet Requirements status — it never silently claims success when a size budget can’t be met.',
  },
]

const SCREENSHOTS = [
  { src: '/case-studies/formeasy/home.webp', alt: 'FormEasy home dashboard' },
  { src: '/case-studies/formeasy/requirements-photo.webp', alt: 'FormEasy requirements screen with Passport preset' },
  { src: '/case-studies/formeasy/result-ready.webp', alt: 'FormEasy result screen, ready to upload' },
]

const OTHER_STUDIES = [
  {
    name: 'FindKeep',
    summary:
      'On-device search across screenshots and photos using natural language — hybrid BM25 + semantic embeddings + tag matching, with Vision OCR and SwiftData, entirely offline.',
    href: 'https://github.com/devendrabhumca12/FindKeep',
  },
  {
    name: 'Multipeer-ChatApp',
    summary:
      'A Swift/SwiftUI framework for exchanging text and images directly between iOS devices over MultipeerConnectivity, with Core Data-backed message persistence.',
    href: 'https://github.com/devendrabhumca12/Multipeer-ChatApp',
  },
]

export function CaseStudies() {
  const reduceMotion = usePrefersReducedMotion()
  const webglSupported = useWebglSupported()
  const show3D = !reduceMotion && webglSupported

  return (
    <SectionShell
      id="case-studies"
      eyebrow="Engineering Case Studies"
      title="Problem → Architecture → Result"
    >
      <div className="rounded-3xl border border-graphite-700 bg-graphite-900/50 p-8">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-medium text-mist-100">FormEasy</h3>
          <a
            href="https://github.com/devendrabhumca12/FormEasy"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent-400 hover:text-accent-500"
          >
            View on GitHub →
          </a>
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
          {show3D ? (
            <div className="relative mx-auto h-[320px] w-[280px]">
              <Suspense fallback={null}>
                <FormEasyCanvas />
              </Suspense>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
              {SCREENSHOTS.map((shot) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="rounded-xl border border-graphite-700"
                />
              ))}
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <p className="mb-1 text-xs font-medium tracking-widest text-accent-400 uppercase">
                  {stage.label}
                </p>
                <p className="text-sm text-mist-300">{stage.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {OTHER_STUDIES.map((study) => (
          <a
            key={study.name}
            href={study.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-graphite-700 bg-graphite-900/40 p-6 transition-colors hover:border-accent-500/50"
          >
            <h3 className="mb-1 text-base font-medium text-mist-100">{study.name}</h3>
            <p className="text-sm text-mist-400">{study.summary}</p>
          </a>
        ))}
      </div>
    </SectionShell>
  )
}
