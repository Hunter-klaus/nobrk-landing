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
            <p className="text-white/40 text-xs tracking-[0.35em] uppercase mb-4 font-light">
              NOBRK Product
            </p>
            <h1 className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-black text-white leading-[1.15] mb-6">
              계속 나아갈 이유를<br className="sm:hidden" /> 곁에 둡니다.
            </h1>
            <p className="text-white/60 text-base md:text-lg font-light max-w-lg leading-relaxed">
              NOBRK는 단순한 물건이 아닌, 당신이 멈추지 않고 계속 나아갈 수 있는 일상의 징표를 만듭니다.
            </p>
          </div>

          {/* Category sections — 절제된 고급스러움 */}
          <div className="flex flex-col gap-5">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#111111] border border-white/[0.08] hover:border-white/20 p-10 md:p-14 rounded-sm transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16 mb-8">
                  <div>
                    <p className="text-[10px] tracking-[0.35em] text-white/30 uppercase font-light mb-3">
                      NOBRK
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-[0.05em] mb-2">
                      {cat.label}
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-light mb-3">
                      {cat.tagline}
                    </p>
                    <p className="text-white/45 text-sm font-light leading-relaxed whitespace-pre-line">
                      {cat.desc}
                    </p>
                  </div>

                  {/* COMING SOON badge — 미니멀 모노크롬 배지 */}
                  <div className="flex-shrink-0">
                    <span className="inline-block border border-white/20 text-white/50 text-[10px] tracking-[0.3em] uppercase px-4 py-2 font-light rounded-sm">
                      COMING SOON
                    </span>
                  </div>
                </div>

                {/* Item list */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs tracking-[0.15em] text-white/70 uppercase border border-white/10 bg-white/[0.02] px-3.5 py-2 rounded-sm font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-20 text-center border-t border-white/[0.06] pt-16">
            <p className="text-white/30 text-xs tracking-[0.4em] uppercase font-light mb-3">
              Words you can carry.
            </p>
            <p className="text-white/15 text-[10px] tracking-widest uppercase font-light">WE MUST GO ON.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
