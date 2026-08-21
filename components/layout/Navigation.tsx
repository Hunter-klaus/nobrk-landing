'use client'

// NOBRK — 상단 네비게이션
// 스크롤에 따라 자연스럽게 변화합니다
// 모바일에서는 햄버거 메뉴를 사용합니다

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'OUR STORY', href: '#section-02' },
  { label: 'CONTENT', href: '#section-06' },
  { label: 'COMMUNITY', href: '#section-08' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div
          className={`px-6 md:px-12 py-4 md:py-5 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.05]'
              : 'bg-transparent'
          }`}
        >
          {/* 로고 */}
          <a
            href="#"
            className="text-white font-black text-xl tracking-[0.2em] hover:text-amber-500 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="NOBRK 홈으로"
          >
            NOBRK
          </a>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center gap-8" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 데스크톱 CTA */}
          <button
            onClick={() => handleNavClick('#section-08')}
            className="hidden md:flex items-center gap-2 text-white/70 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer group"
            aria-label="커뮤니티로 이동"
          >
            <span>KEEP GOING</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="w-6 h-[1px] bg-white block"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-[1px] bg-white block"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-[1px] bg-white block"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* 모바일 풀스크린 메뉴 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8" aria-label="모바일 메뉴">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white/60 hover:text-white text-2xl font-light tracking-[0.3em] uppercase cursor-pointer transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('#section-08')}
                className="mt-8 text-amber-500 text-sm tracking-[0.3em] uppercase cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                KEEP GOING →
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
