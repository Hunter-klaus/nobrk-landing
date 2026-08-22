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
            <p className="text-amber-500 text-xs tracking-[0.35em] uppercase mb-4 font-bold">
              NOBRK Community
            </p>
            <h1 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black text-white leading-[1.25] mb-6 whitespace-normal lg:whitespace-nowrap">
              오늘 당신을 계속 가게 하는 것은 무엇인가요?
            </h1>
            <p className="text-white/70 text-base md:text-lg font-light">
              당신의 이유가 누군가에게 다시 일어설 힘이 됩니다.
            </p>
          </div>

          {/* Input form — 고대비 UI */}
          <div className="mb-20 bg-[#121212] border border-white/10 rounded-sm p-8 md:p-12 shadow-xl">
            <p className="text-white text-lg md:text-xl font-medium mb-8 leading-relaxed">
              나는&nbsp;
              <span className="border-b-2 border-amber-500 text-amber-400 font-bold px-2 py-1 bg-white/[0.04]">______</span>
              &nbsp;때문에 계속 갑니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="당신의 이유를 적어주세요 (예: 지키고 싶은 사람이 있어서)"
                className="flex-1 bg-white/[0.06] border border-white/20 text-white text-base py-4 px-5 rounded-sm outline-none placeholder:text-white/40 focus:border-amber-500 focus:bg-white/[0.09] transition-all duration-300"
              />
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-black text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                남기기
              </button>
            </div>
            <p className="text-white/40 text-xs tracking-wider mt-4">
              * 작성하신 글은 익명으로 안전하게 공유됩니다.
            </p>
          </div>

          {/* Anonymous answers — 시인성 강화 */}
          <div className="border-t border-white/10 pt-16">
            <div className="flex items-center justify-between mb-10">
              <p className="text-white/80 text-sm tracking-[0.3em] uppercase font-bold">
                다른 사람들의 이유
              </p>
              <span className="text-amber-500/80 text-xs font-medium">실시간 공유</span>
            </div>
            <div className="flex flex-col gap-4">
              {anonymousReasons.map((reason, i) => (
                <div
                  key={i}
                  className="bg-[#121212] border border-white/10 hover:border-amber-500/40 p-6 rounded-sm text-white/90 text-base md:text-lg font-light hover:text-white transition-all duration-300 flex items-start gap-3"
                >
                  <span className="text-amber-500 font-black text-xl leading-none">“</span>
                  <span className="flex-1">{reason}</span>
                  <span className="text-amber-500 font-black text-xl leading-none">”</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom message */}
          <div className="mt-20 text-center border-t border-white/10 pt-16">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase font-light mb-2">
              우리는 서로의 한 걸음이 되어줍니다.
            </p>
            <p className="text-amber-500/80 text-xs tracking-widest uppercase font-bold">WE MUST GO ON.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
