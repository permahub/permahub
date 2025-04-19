import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { cn } from "@/lib/utils"
import './grid-motion.css'

interface GridMotionProps {
  /**
   * Array of items to display in the grid
   */
  items?: (string | ReactNode)[]
  /**
   * Color for the radial gradient background
   */
  gradientColor?: string
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Callback function when an item is clicked
   */
  onItemClick?: (index: number) => void
}

export function GridMotion({
  items = [],
  gradientColor = 'black',
  className,
  onItemClick
}: GridMotionProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const mouseXRef = useRef(window.innerWidth / 2)

  const totalItems = 28
  const defaultItems = Array.from({ length: totalItems }, (_, index) => 
    'https://source.unsplash.com/random/800x600?nature'
  )
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  useEffect(() => {
    gsap.ticker.lagSmoothing(0)

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX
    }

    const updateMotion = () => {
      const maxMoveAmount = 300
      const baseDuration = 0.8
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto',
          })
        }
      })
    }

    const removeAnimationLoop = gsap.ticker.add(updateMotion)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      removeAnimationLoop()
    }
  }, [])

  return (
    <div className={cn("grid-motion-container", className)} ref={gridRef}>
      <section
        className="grid-motion-section"
        style={{
          background: `radial-gradient(circle at center, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="grid-motion-wrapper">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid-motion-row"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex]
                return (
                  <div 
                    key={itemIndex} 
                    className="grid-motion-item"
                    onClick={() => onItemClick?.(rowIndex * 7 + itemIndex)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        onItemClick?.(rowIndex * 7 + itemIndex);
                      }
                    }}
                  >
                    {typeof content === 'string' && content.startsWith('http') ? (
                      <>
                        <img
                          src={content}
                          alt="Grid item"
                          className="grid-motion-image"
                        />
                        <div className="grid-motion-overlay" />
                      </>
                    ) : (
                      <div className="grid-motion-content">
                        {content}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GridMotion;
