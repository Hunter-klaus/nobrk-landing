import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NOBRK COMMUNITY — 오늘 당신을 계속 가게 하는 것',
  description: '오늘 당신을 계속 가게 하는 것은 무엇인가요? 당신의 이유를 남겨주세요.',
}

const anonymousReasons = [
  '가족이 있어서.',
  '아직 포기하고 싶지 않은 꿈이 있어서.',
  '나를 믿어준 사람이 있어서.',
  '언젠가 나도 누군가에게 힘이 되고 싶어서.',
  '멈추면 더 힘들어질 것 같아서.',
]

export default function CommunityPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-16 md:mb-24">
            <p className="text-amber-500/70 text-xs tracking-[0.3em] uppercase mb-4 font-light">
              NOBRK Community
            </p>
            {/* 데스크톱/태블릿은 1줄, 모바일은 최대 2줄 */}
            <h1 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black text-white leading-[1.25] mb-6 whitespace-normal lg:whitespace-nowrap">
              오늘 당신을 계속 가게 하는 것은 무엇인가요?
            </h1>
            <p className="text-white/30 text-sm md:text-base font-light">
              당신의 이유가 누군가에게 힘이 됩니다.
            </p>
          </div>

          {/* Input form */}
          <div className="mb-20 border-t border-white/[0.06] pt-12">
            <p className="text-white/50 text-base md:text-lg font-light mb-8">
              나는&nbsp;
              <span className="border-b border-white/20 px-2 text-white">______</span>
              &nbsp;때문에 계속 갑니다.
            </p>
            <div className="flex gap-4 max-w-xl">
              <input
                type="text"
                placeholder="당신의 이유를 적어주세요"
                className="flex-1 bg-transparent border-b border-white/20 text-white text-sm py-3 px-1 outline-none placeholder:text-white/20 focus:border-amber-500/60 transition-colors duration-300"
              />
              <button className="text-[10px] tracking-[0.25em] uppercase text-white/60 border border-white/20 px-5 py-3 hover:border-amber-500/40 hover:text-amber-500/80 transition-colors duration-300 whitespace-nowrap">
                남기기
              </button>
            </div>
            <p className="text-white/15 text-[10px] tracking-wider mt-4">
              익명으로 공유됩니다
            </p>
          </div>

          {/* Anonymous answers */}
          <div className="border-t border-white/[0.06] pt-12">
            <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-8 font-light">
              다른 사람들의 이유
            </p>
            <div className="flex flex-col">
              {anonymousReasons.map((reason, i) => (
                <div
                  key={i}
                  className="py-5 border-b border-white/[0.05] text-white/40 text-sm md:text-base font-light hover:text-white/60 transition-colors duration-300"
                >
                  <span className="text-amber-500/40 mr-2">"</span>
                  {reason}
                  <span className="text-amber-500/40 ml-1">"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom message */}
          <div className="mt-20 text-center">
            <p className="text-white/10 text-xs tracking-[0.4em] uppercase">WE MUST GO ON.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
