'use client'

// NOBRK — 푸터 컴포넌트

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.05] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-white font-black text-sm tracking-[0.3em]">NOBRK</span>
          <span className="text-white/20 text-xs">|</span>
          <span className="text-white/30 text-xs tracking-widest">WE MUST GO ON.</span>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-white/20 text-xs tracking-wider">
            © {currentYear} NOBRK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
