'use client'

// NOBRK — 푸터
// NOBRK SOCIAL 링크 (각 채널 고유 브랜드 컬러 호버) + 저작권

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nobrk.project',
    hoverText: 'group-hover:text-[#E1306C]',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@nobrk.project',
    hoverText: 'group-hover:text-[#FF0000]',
  },
  {
    label: 'Threads',
    href: 'https://www.threads.net/@nobrk.project',
    hoverText: 'group-hover:text-white',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.05]">
      {/* NOBRK SOCIAL */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <p className="text-white/20 text-[10px] tracking-[0.35em] uppercase mb-6 font-light">
          NOBRK Social
        </p>
        <div className="flex flex-wrap gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300"
              aria-label={`NOBRK ${link.label} — 새 탭에서 열림`}
            >
              <span className={`text-xs font-light tracking-[0.15em] ${link.hoverText} transition-colors duration-300`}>
                {link.label}
              </span>
              <span className="text-white/15 text-[10px] group-hover:translate-x-0.5 transition-transform duration-300">
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 하단 구분선 + 저작권 */}
      <div className="border-t border-white/[0.04] px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <span className="text-white font-black text-sm tracking-[0.3em]">NOBRK</span>
            <span className="text-white/15 text-xs">|</span>
            <span className="text-white/25 text-xs tracking-widest">WE MUST GO ON.</span>
          </div>
          <p className="text-white/15 text-xs tracking-wider">
            © {currentYear} NOBRK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
