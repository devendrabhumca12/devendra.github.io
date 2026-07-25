import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RESUME_DOWNLOAD_EVENT } from '../../lib/resumeDownload'

export function ResumeToast() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const onDownload = () => {
      setVisible(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setVisible(false), 10000)
    }
    window.addEventListener(RESUME_DOWNLOAD_EVENT, onDownload)
    return () => {
      window.removeEventListener(RESUME_DOWNLOAD_EVENT, onDownload)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 sm:justify-end sm:pr-6">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto max-w-sm rounded-2xl border border-graphite-600 bg-graphite-900/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md"
          >
            <p className="text-sm font-medium text-mist-100">Thanks for grabbing my resume.</p>
            <p className="mt-1 text-xs text-mist-400">
              If it's a fit, I'd love to connect —{' '}
              <a href="mailto:devendra.bhumca12@gmail.com" className="text-accent-400 hover:text-accent-500">
                email
              </a>{' '}
              or{' '}
              <a href="tel:+918505823517" className="text-accent-400 hover:text-accent-500">
                phone
              </a>
              .
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
