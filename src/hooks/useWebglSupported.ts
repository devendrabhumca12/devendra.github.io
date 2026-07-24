import { useState } from 'react'

function detectWebgl() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl2') || canvas.getContext('webgl')),
    )
  } catch {
    return false
  }
}

export function useWebglSupported() {
  const [supported] = useState(detectWebgl)
  return supported
}
