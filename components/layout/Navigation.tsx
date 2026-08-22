'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'OUR STORY', href: '/' },
  { label: 'CONTENT',   href: '/content' },
  { label: 'COMMUNITY', href: '/community' },
  { label: 'PRODUCT',   href: '/product' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Scroll detection for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Always scroll to top on route change
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Handle navigation click - if already on the page, smoothly scroll to top
  const handleNav = (href: string) => {
    setMenuOpen(false)
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push(href)
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-black/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="text-white font-black text-sm tracking-[0.35em] uppercase hover:text-amber-500 transition-colors duration-300 cursor-pointer"
            aria-label="NOBRK 메인으로"
          >
            NOBRK
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="메인 내비게이션">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className={`text-xs tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer py-1 ${
                    isActive
                      ? 'text-amber-500 font-bold border-b-2 border-amber-500'
                      : 'text-white/60 hover:text-white font-medium'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav('/community')}
              className="text-xs tracking-[0.25em] uppercase text-amber-400 hover:text-amber-300 font-bold transition-colors duration-300 border border-amber-500/40 hover:border-amber-400 px-4 py-2 rounded-sm bg-amber-500/10 cursor-pointer"
            >
              KEEP GOING →
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2 cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="w-6 h-[2px] bg-white block"
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-6 h-[2px] bg-white block"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-6 h-[2px] bg-white block"
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center gap-8 text-center" aria-label="모바일 내비게이션">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 + 0.05 }}
                  >
                    <button
                      onClick={() => handleNav(item.href)}
                      className={`text-2xl tracking-[0.3em] uppercase transition-colors duration-300 cursor-pointer ${
                        isActive ? 'text-amber-500 font-bold' : 'text-white/70 hover:text-white font-light'
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-6"
              >
                <button
                  onClick={() => handleNav('/community')}
                  className="bg-amber-500 text-black font-bold text-sm tracking-[0.3em] uppercase px-8 py-3 rounded-sm cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  KEEP GOING →
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
