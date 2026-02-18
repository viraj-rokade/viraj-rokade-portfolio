import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

// Generate circular favicon from profile image
const img = new Image()
img.crossOrigin = 'anonymous'
img.src = '/profile.jpeg'
img.onload = () => {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.closePath()
  ctx.clip()
  ctx.drawImage(img, 0, 0, size, size)
  const link = document.querySelector<HTMLLinkElement>("link[rel='icon']")
  if (link) {
    link.type = 'image/png'
    link.href = canvas.toDataURL('image/png')
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
