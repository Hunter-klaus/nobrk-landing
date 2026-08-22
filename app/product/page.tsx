import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NOBRK PRODUCT — 계속 나아갈 이유를 곁에 둡니다.',
  description: 'NOBRK Lifestyle Brand. OBJECTS · DRINKS · LIFESTYLE — Coming Soon.',
}

const categories = [
  {
    id: 'OBJECTS',
    label: 'OBJECTS',
    tagline: '당신의 하루에 NOBRK를.',
    desc: 'Planner · Notebook · Tumbler\n일상을 채우는 도구들.',
    items: ['NOBRK Planner', 'Motivation Notebook', 'Keep Going Tumbler', 'Sticker Pack'],
  },
  {
    id: 'DRINKS',
    label: 'DRINKS',
    tagline: '다시 움직일 에너지를.',
    desc: 'Functional Beverage\n다시 한 걸음을 내딛게 하는 에너지.',
    items: ['NOBRK Energy Drink', 'Focus Blend', 'Recovery Shot'],
  },
  {
    id: 'LIFESTYLE',
    label: 'LIFESTYLE',
    tagline: '계속 가는 삶을 위한 것들.',
    desc: 'Apparel · Daily Goods\n입고, 쓰고, 살아가는 모든 순간에.',
    items: ['Street Hoodie', 'Training Tee', 'Cap', 'Tote Bag'],
  },
]

export default function ProductPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-36 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-20 md:mb-28">
            <p className="text-amber-500 text-xs tracking-[0.35em] uppercase mb-4 font-bold">
              NOBRK Product
            </p>
            <h1 className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-black text-white leading-[1.15] mb-6">
              계속 나아갈 이유를<br className="sm:hidden" /> 곁에 둡니다.
            </h1>
            <p className="text-white/70 text-base md:text-lg font-light max-w-lg leading-relaxed">
              NOBRK는 단순한 물건이 아닌, 당신이 멈추지 않고 계속 나아갈 수 있는 일상의 징표를 만듭니다.
            </p>
          </div>

          {/* Category sections — 고대비 카드 및 배지 */}
          <div className="flex flex-col gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#121212] border border-white/15 hover:border-amber-500/50 p-10 md:p-14 rounded-sm transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16 mb-10">
                  <div>
                    <p className="text-xs tracking-[0.35em] text-white/50 uppercase font-semibold mb-3">
                      NOBRK
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-[0.05em] mb-3">
                      {cat.label}
                    </h2>
                    <p className="text-amber-400 text-xl md:text-2xl font-bold mb-4 tracking-wide">
                      {cat.tagline}
                    </p>
                    <p className="text-white/75 text-base font-light leading-relaxed whitespace-pre-line">
                      {cat.desc}
                    </p>
                  </div>

                  {/* COMING SOON badge — 시인성 높은 배지 */}
                  <div className="flex-shrink-0">
                    <span className="inline-block border border-amber-500/60 bg-amber-500/10 text-amber-400 text-xs tracking-[0.3em] uppercase px-5 py-2.5 font-bold rounded-sm shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                      COMING SOON
                    </span>
                  </div>
                </div>

                {/* Item list — 선명한 칩 태그 */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs tracking-[0.15em] text-white/90 uppercase border border-white/20 bg-white/[0.05] px-4 py-2.5 rounded-sm hover:border-amber-500/60 hover:text-amber-300 transition-colors duration-200 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-20 text-center border-t border-white/10 pt-16">
            <p className="text-white/60 text-sm tracking-[0.4em] uppercase font-light mb-3">
              Words you can carry.
            </p>
            <p className="text-amber-500 text-xs tracking-widest uppercase font-bold">WE MUST GO ON.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
