'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedNumber({ end, duration = 2000, suffix = '' }: AnimatedNumberProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          let start = 0
          const step = end / (duration / 16) // 16ms is roughly 1 frame at 60fps

          const timer = setInterval(() => {
            start += step
            if (start < end) {
              setCount(Math.floor(start))
            } else {
              setCount(end)
              clearInterval(timer)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

