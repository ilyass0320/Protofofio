import { useEffect, useRef } from "react"

type Star = {x: number,y: number,z: number,size: number }

export function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = 0
        let height = 0
        let dpr = 1
        let stars: Star[] = []
        let animationId = 0

        const STAR_COUNT = 220
        const SPEED = 0.15

        const createStars = () => {
        stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width,
        size: Math.random() * 1.2 + 0.3,
        }))
    }

    const resize = () => {
        dpr = window.devicePixelRatio || 1
        width = canvas.clientWidth
        height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        createStars()
    }

    const render = () => {
        ctx.clearRect(0, 0, width, height)
        const cx = width / 2
        const cy = height / 2

    for (const star of stars) {
        // Move the star toward the viewer so it never stops.
        star.z -= SPEED * 4
        if (star.z <= 0) {
          star.x = Math.random() * width
          star.y = Math.random() * height
        star.z = width
        }

        const k = 128 / star.z
        const sx = (star.x - cx) * k + cx
        const sy = (star.y - cy) * k + cy

        if (sx < 0 || sx >= width || sy < 0 || sy >= height) continue

        const opacity = Math.min(1, (1 - star.z / width) * 1.2 + 0.1)
        const radius = star.size * k * 0.6

        ctx.beginPath()
        ctx.arc(sx, sy, Math.max(0.2, radius), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(render)
    }

    resize()
    render()

    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
    />
  )
}
