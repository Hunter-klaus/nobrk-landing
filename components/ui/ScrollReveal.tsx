'use client'

// NOBRK — 스크롤 시 요소가 부드럽게 나타나는 컴포넌트
// 사이트 전체의 "느린 호흡" 애니메이션을 담당합니다

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const directions = {
    up: { initial: { y: 40 }, animate: { y: 0 } },
    down: { initial: { y: -40 }, animate: { y: 0 } },
    left: { initial: { x: 40 }, animate: { x: 0 } },
    right: { initial: { x: -40 }, animate: { x: 0 } },
    none: { initial: {}, animate: {} },
  }

  const { initial, animate } = directions[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={isInView ? { opacity: 1, ...animate } : { opacity: 0, ...initial }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
