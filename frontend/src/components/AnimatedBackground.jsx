import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  const timeRef = useRef(0)
  const isMobileRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Disable on mobile
    isMobileRef.current = window.innerWidth < 768
    if (isMobileRef.current) {
      canvas.style.display = 'none'
      return
    }

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    setCanvasSize()

    const animate = () => {
      // Clear canvas with subtle background
      ctx.fillStyle = 'rgba(10, 10, 15, 0.02)'
      ctx.fillRect(0, 0, width, height)

      timeRef.current += 0.01

      // Draw DH monogram text - centered and elegant
      const centerX = width / 2
      const centerY = height / 2
      const fontSize = Math.min(width * 0.2, height * 0.2)

      // Main glow effect
      ctx.shadowColor = 'rgba(0, 213, 255, 0.2)'
      ctx.shadowBlur = 25
      ctx.fillStyle = 'rgba(0, 150, 200, 0.06)'
      ctx.font = `bold ${fontSize}px 'Segoe UI', sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('DH', centerX, centerY)

      // Subtle secondary glow for depth
      ctx.shadowColor = 'rgba(30, 120, 180, 0.1)'
      ctx.shadowBlur = 40
      ctx.fillStyle = 'rgba(0, 150, 200, 0.04)'
      ctx.fillText('DH', centerX, centerY)

      ctx.shadowColor = 'transparent'

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const wasSmallBefore = isMobileRef.current
      isMobileRef.current = window.innerWidth < 768

      if (isMobileRef.current && !wasSmallBefore) {
        canvas.style.display = 'none'
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        return
      } else if (!isMobileRef.current && wasSmallBefore) {
        canvas.style.display = 'block'
        animate()
        return
      }

      setCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      style={{
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.8,
        willChange: 'contents',
      }}
    />
  )
}

