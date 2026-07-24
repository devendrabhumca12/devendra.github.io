export const RESUME_DOWNLOAD_EVENT = 'resume-download'

export function announceResumeDownload() {
  window.dispatchEvent(new Event(RESUME_DOWNLOAD_EVENT))
}
