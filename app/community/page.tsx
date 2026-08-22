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
  '내가 걸어온 길이 아까워서.',
]

export default function CommunityPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-36 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-16 md:mb-24">
            <p className="text-white/40 text-xs tracking-[0.35em] uppercase mb-4 font-light">
              NOBRK Community
            </p>
            <h1 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black text-white leading-[1.25] mb-6 whitespace-normal lg:whitespace-nowrap">
              오늘 당신을 계속 가게 하는 것은 무엇인가요?
            </h1>
            <p className="text-white/60 text-base md:text-lg font-light">
              당신의 이유가 누군가에게 다시 일어설 힘이 됩니다.
            </p>
          </div>

          {/* Input form — 세련된 모노크롬 */}
          <div className="mb-20 bg-[#111111] border border-white/[0.08] rounded-sm p-8 md:p-12 shadow-xl">
            <p className="text-white text-lg md:text-xl font-light mb-8 leading-relaxed">
              나는&nbsp;
              <span className="border-b border-white/60 text-white font-semibold px-2 py-0.5">______</span>
              &nbsp;때문에 계속 갑니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="당신의 이유를 적어주세요"
                className="flex-1 bg-white/[0.04] border border-white/15 text-white text-base py-3.5 px-5 rounded-sm outline-none placeholder:text-white/30 focus:border-white/40 transition-all duration-300"
              />
              <button className="bg-white hover:bg-white/90 text-black font-bold text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer">
                남기기
              </button>
            </div>
            <p className="text-white/30 text-xs tracking-wider mt-4">
              * 작성하신 글은 익명으로 안전하게 공유됩니다.
            </p>
          </div>

          {/* Anonymous answers */}
          <div className="border-t border-white/[0.06] pt-16">
            <div className="flex items-center justify-between mb-8">
              <p className="text-white/50 text-xs tracking-[0.3em] uppercase font-light">
                다른 사람들의 이유
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {anonymousReasons.map((reason, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/[0.06] hover:border-white/20 p-5 rounded-sm text-white/80 text-base font-light transition-all duration-200"
                >
                  <span className="text-white/30 mr-2 font-serif">"</span>
                  {reason}
                  <span className="text-white/30 ml-1 font-serif">"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom message */}
          <div className="mt-20 text-center border-t border-white/[0.06] pt-16">
            <p className="text-white/30 text-xs tracking-[0.4em] uppercase font-light mb-2">
              우리는 서로의 한 걸음이 되어줍니다.
            </p>
            <p className="text-white/15 text-xs tracking-widest uppercase font-light">WE MUST GO ON.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
