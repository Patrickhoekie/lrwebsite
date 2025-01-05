import { useEffect, useState, useRef } from 'react'

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

export function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(false)

  useEffect(() => {
    if (countRef.current) return
    countRef.current = true

    let startTimestamp: number
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [end, duration])

  return (
    <span className="font-bold">
      {count}{suffix}
    </span>
  )
} 