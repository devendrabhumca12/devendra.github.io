import { CanvasTexture } from 'three'

function makeCanvas(size: number) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  return canvas
}

let vignette: CanvasTexture | null = null
let sheen: CanvasTexture | null = null

export function getVignetteTexture() {
  if (vignette) return vignette
  const canvas = makeCanvas(512)
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(256, 256, 120, 256, 256, 360)
  gradient.addColorStop(0, 'rgba(0,0,0,0)')
  gradient.addColorStop(1, 'rgba(0,0,0,0.55)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 512, 512)
  vignette = new CanvasTexture(canvas)
  return vignette
}

export function getSheenTexture() {
  if (sheen) return sheen
  const canvas = makeCanvas(512)
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createLinearGradient(0, 512, 512, 0)
  gradient.addColorStop(0, 'rgba(255,255,255,0)')
  gradient.addColorStop(0.45, 'rgba(255,255,255,0)')
  gradient.addColorStop(0.5, 'rgba(255,255,255,0.16)')
  gradient.addColorStop(0.55, 'rgba(255,255,255,0)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 512, 512)
  sheen = new CanvasTexture(canvas)
  return sheen
}
