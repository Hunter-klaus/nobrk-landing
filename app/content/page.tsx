'use client'

import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const categories = ['ALL', "TODAY'S WORD", 'ONE MORE STEP', 'FOR SOMEONE WHO IS TIRED']

const contentItems = [
  { tag: "TODAY'S WORD", headline: '멈추지 마라.\n아직이다.', channel: 'YouTube Shorts', href: 'https://www.youtube.com/@nobrk.project' },
  { tag: 'ONE MORE STEP', headline: '두려움이\n방향을 알려준다.', channel: 'Instagram', href: 'https://www.instagram.com/nobrk.project' },
  { tag: 'FOR SOMEONE WHO IS TIRED', headline: '오늘의 고통이\n내일의 연료다.', channel: 'Threads', href: 'https://www.threads.net/@nobrk.project' },
  { tag: "TODAY'S WORD", headline: '강해지려고\n버티는 게 아니다.\n버티다 보면\n강해지는 거다.', channel: 'YouTube Shorts', href: 'https://www.youtube.com/@nobrk.project' },
  { tag: 'ONE MORE STEP', headline: '한 번 더.\n딱 한 번만 더.', channel: 'Instagram', href: 'https://www.instagram.com/nobrk.project' },
  { tag: 'FOR SOMEONE WHO IS TIRED', headline: '쉬어도 괜찮다.\n멈춘 게 아니니까.', channel: 'Threads', href: 'https://www.threads.net/@nobrk.project' },
]

export default function ContentPage() {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filteredItems = activeCategory === 'ALL'
    ? contentItems
    : contentItems.filter(item => item.tag === activeCategory)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-36 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-16 md:mb-20">
            <p className="text-white/40 text-xs tracking-[0.35em] uppercase mb-4 font-light">
              NOBRK Content
            </p>
            <h1 className="text-[clamp(1.8rem,5vw,3.8rem)] font-black text-white leading-[1.25] mb-6">
              <span className="inline-block">오늘, 당신에게</span>{' '}
              <br className="sm:hidden" />
              <span className="inline-block">필요한 한 문장</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg font-light max-w-lg leading-relaxed">
              매일 아침, 다시 움직이게 하는 한 문장.<br />
              <span className="text-white/35 text-sm">YouTube Shorts · Instagram · Threads</span>
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2.5 mb-12 md:mb-16">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-black font-bold shadow-md'
                      : 'bg-white/[0.03] border border-white/10 text-white/50 hover:text-white hover:border-white/30 font-light'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => {
              const isYT = item.channel.includes('YouTube')
              const isIG = item.channel.includes('Instagram')
              const borderHover = isYT ? 'hover:border-[#FF0000]/40' : isIG ? 'hover:border-[#E1306C]/40' : 'hover:border-white/35'
              const textHover = isYT ? 'group-hover:text-[#FF0000]' : isIG ? 'group-hover:text-[#E1306C]' : 'group-hover:text-white'
              const dotBg = isYT ? 'bg-[#FF0000]' : isIG ? 'bg-[#E1306C]' : 'bg-white'

              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-[#111111] border border-white/[0.08] p-8 md:p-10 flex flex-col justify-between min-h-[260px] rounded-sm transition-all duration-300 hover:bg-[#161616] hover:-translate-y-1 shadow-lg ${borderHover}`}
                >
                  <div>
                    <span className="inline-block text-white/40 text-[11px] tracking-[0.25em] uppercase font-medium mb-4">
                      {item.tag}
                    </span>
                    <p className="text-white font-black text-2xl md:text-3xl leading-[1.3] whitespace-pre-line group-hover:text-white/90 transition-colors duration-300">
                      {item.headline}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className={`text-white/40 text-xs tracking-[0.15em] uppercase font-light flex items-center gap-2 transition-colors duration-300 ${textHover}`}>
                      <span className={`w-1.5 h-1.5 rounded-full inline-block transition-colors duration-300 ${dotBg}`} />
                      {item.channel}
                    </span>
                    <span className={`text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 font-light ${textHover}`}>
                      보러가기 →
                    </span>
                  </div>
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center border-t border-white/[0.06] pt-16">
            <p className="text-white/40 text-sm tracking-[0.3em] uppercase font-light mb-3">
              매일 새로운 콘텐츠가 추가됩니다
            </p>
            <p className="text-white/20 text-xs tracking-widest uppercase font-light">WE MUST GO ON.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
