import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  const particlesRef = useRef([])
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

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

    // Initialize particles
    const particleCount = Math.min(50, Math.floor(width / 30))
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }))

    const animate = () => {
      // Clear canvas with semi-transparent background
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'
      ctx.fillRect(0, 0, width, height)

      timeRef.current += 0.01

      // Draw DH monogram text
      const centerX = width / 2
      const centerY = height / 2
      const fontSize = Math.min(width * 0.25, height * 0.25)

      // Glow effect
      ctx.shadowColor = 'rgba(0, 213, 255, 0.3)'
      ctx.shadowBlur = 30
      ctx.fillStyle = `rgba(0, 150, 200, 0.08)`
      ctx.font = `bold ${fontSize}px 'Segoe UI', sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('DH', centerX, centerY)

      // Add subtle secondary glow
      ctx.shadowColor = 'rgba(30, 120, 180, 0.2)'
      ctx.shadowBlur = 60
      ctx.fillStyle = `rgba(0, 150, 200, 0.05)`
      ctx.fillText('DH', centerX, centerY)

      ctx.shadowColor = 'transparent'

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce particles
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1

        particle.x = Math.max(0, Math.min(width, particle.x))
        particle.y = Math.max(0, Math.min(height, particle.y))

        // Draw particle
        ctx.fillStyle = `rgba(0, 213, 255, ${particle.opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw connecting lines
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Maximum connection distance
          const maxDistance = Math.min(width, height) * 0.15

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2
            ctx.strokeStyle = `rgba(0, 150, 200, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
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
        opacity: 0.6,
      }}
    />
  )
}
