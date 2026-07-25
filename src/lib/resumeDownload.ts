export const RESUME_DOWNLOAD_EVENT = 'resume-download'
export const RESUME_FILENAME = 'Devendra-Agnihotri-Resume.pdf'

export function announceResumeDownload() {
  window.dispatchEvent(new Event(RESUME_DOWNLOAD_EVENT))
}
