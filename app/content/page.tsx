import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NOBRK CONTENT — 오늘, 당신에게 필요한 한 문장',
  description: '매일 아침, 다시 움직이게 하는 한 문장. YouTube Shorts · Instagram · Threads',
}

const categories = ['ALL', "TODAY'S WORD", 'ONE MORE STEP', 'FOR SOMEONE WHO IS TIRED']

const contentItems = [
  { tag: "Today's Word", headline: '멈추지 마라.\n아직이다.', channel: 'YouTube Shorts', href: '#' },
  { tag: 'One More Step', headline: '두려움이\n방향을 알려준다.', channel: 'Instagram', href: '#' },
  { tag: 'For Someone Who Is Tired', headline: '오늘의 고통이\n내일의 연료다.', channel: 'Threads', href: '#' },
  { tag: "Today's Word", headline: '강해지려고\n버티는 게 아니다.\n버티다 보면\n강해지는 거다.', channel: 'YouTube Shorts', href: '#' },
  { tag: 'One More Step', headline: '한 번 더.\n딱 한 번만 더.', channel: 'Instagram', href: '#' },
  { tag: 'For Someone Who Is Tired', headline: '쉬어도 괜찮다.\n멈춘 게 아니니까.', channel: 'Threads', href: '#' },
]

export default function ContentPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-16 md:mb-24">
            <p className="text-amber-500/70 text-xs tracking-[0.3em] uppercase mb-4 font-light">
              NOBRK Content
            </p>
            <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-black text-white leading-[1.1] mb-6">
              오늘, 당신에게<br />필요한 한 문장
            </h1>
            <p className="text-white/30 text-sm md:text-base font-light max-w-md leading-relaxed">
              매일 아침, 다시 움직이게 하는 한 문장.<br />
              YouTube Shorts · Instagram · Threads
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-colors duration-200 ${
                  i === 0
                    ? 'border-white/40 text-white'
                    : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {contentItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group bg-[#0A0A0A] p-8 md:p-10 flex flex-col gap-4 hover:bg-[#111111] transition-colors duration-300"
              >
                <span className="text-amber-500/60 text-[10px] tracking-[0.25em] uppercase font-light">
                  {item.tag}
                </span>
                <p className="text-white font-black text-xl md:text-2xl leading-[1.3] whitespace-pre-line group-hover:text-amber-50 transition-colors duration-300">
                  {item.headline}
                </p>
                <span className="mt-auto text-white/20 text-[10px] tracking-[0.2em] uppercase font-light flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-500/40 inline-block" />
                  {item.channel}
                </span>
              </a>
            ))}
          </div>

          {/* CTA - more coming */}
          <div className="mt-16 text-center border-t border-white/[0.05] pt-16">
            <p className="text-white/20 text-sm tracking-[0.3em] uppercase font-light mb-4">
              매일 새로운 콘텐츠가 추가됩니다
            </p>
            <p className="text-white/10 text-xs tracking-widest uppercase">WE MUST GO ON.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}