import { SectionShell } from '../layout/SectionShell'

export function CaseStudies() {
  return (
    <SectionShell
      id="case-studies"
      eyebrow="Engineering Case Studies"
      title="Problem → Architecture → Result"
      pendingNote="2–3 deep-dive case studies (e.g. concurrency migration, P2P sync, on-device AI) pending confirmation of which technical challenges are safe to publish without exposing confidential employer details."
    />
  )
}
