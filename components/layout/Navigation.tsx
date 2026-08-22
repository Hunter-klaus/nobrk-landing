'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.05]' : ''
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-black text-sm tracking-[0.35em] uppercase hover:text-amber-500 transition-colors duration-300"
            aria-label="NOBRK 메인으로"
          >
            NOBRK
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="메인 내비게이션">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs tracking-[0.25em] uppercase transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-white border-b border-white/40 pb-[2px]'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/community"
              className="text-xs tracking-[0.25em] uppercase text-amber-500 hover:text-amber-400 transition-colors duration-300 border-b border-amber-500/40 hover:border-amber-400 pb-[2px]"
            >
              KEEP GOING →
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
          >
            <motion.span className="w-6 h-[1px] bg-white block" animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
            <motion.span className="w-6 h-[1px] bg-white block" animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.3 }} />
            <motion.span className="w-6 h-[1px] bg-white block" animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8" aria-label="모바일 내비게이션">
              {navItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 + 0.1 }}>
                  <Link
                    href={item.href}
                    className={`text-2xl font-light tracking-[0.3em] uppercase transition-colors duration-300 ${
                      pathname === item.href ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-6">
                <Link href="/community" className="text-amber-500 text-sm tracking-[0.3em] uppercase">
                  KEEP GOING →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
