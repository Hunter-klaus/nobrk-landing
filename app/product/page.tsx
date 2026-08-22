import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NOBRK PRODUCT — Things that remind you to keep going.',
  description: 'NOBRK Lifestyle Brand. OBJECTS · DRINKS · LIFESTYLE — Coming Soon.',
}

const categories = [
  {
    id: 'OBJECTS',
    label: 'OBJECTS',
    desc: 'Planner · Notebook · Tumbler\n일상을 채우는 도구들.',
    items: ['NOBRK Planner', 'Motivation Notebook', 'Keep Going Tumbler', 'Sticker Pack'],
  },
  {
    id: 'DRINKS',
    label: 'DRINKS',
    desc: 'Functional Beverage\n다시 움직이게 하는 에너지.',
    items: ['NOBRK Energy Drink', 'Focus Blend', 'Recovery Shot'],
  },
  {
    id: 'LIFESTYLE',
    label: 'LIFESTYLE',
    desc: 'Apparel · Daily Goods\n입고, 쓰고, 살아가는 것들.',
    items: ['Street Hoodie', 'Training Tee', 'Cap', 'Tote Bag'],
  },
]

export default function ProductPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-20 md:mb-28">
            <p className="text-amber-500/70 text-xs tracking-[0.3em] uppercase mb-4 font-light">
              NOBRK Product
            </p>
            <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black text-white leading-[1.1] mb-6">
              Things that remind you<br />to keep going.
            </h1>
            <p className="text-white/30 text-sm font-light max-w-md leading-relaxed">
              NOBRK는 메시지를 물건으로 만듭니다.<br />
              당신의 일상에 계속 나아갈 이유를 담습니다.
            </p>
          </div>

          {/* Category sections */}
          <div className="flex flex-col gap-px bg-white/[0.04]">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-[#0A0A0A] p-10 md:p-14">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16 mb-10">
                  <div>
                    <p className="text-[10px] tracking-[0.35em] text-white/20 uppercase font-light mb-3">
                      NOBRK
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-[0.05em] mb-4">
                      {cat.label}
                    </h2>
                    <p className="text-white/30 text-sm font-light leading-relaxed whitespace-pre-line">
                      {cat.desc}
                    </p>
                  </div>

                  {/* COMING SOON badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-block border border-white/10 text-white/20 text-[9px] tracking-[0.3em] uppercase px-4 py-2">
                      COMING SOON
                    </span>
                  </div>
                </div>

                {/* Item list */}
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] tracking-[0.2em] text-white/15 uppercase border border-white/[0.06] px-3 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-20 text-center border-t border-white/[0.04] pt-16">
            <p className="text-white/15 text-xs tracking-[0.4em] uppercase font-light mb-3">
              Words you can carry.
            </p>
            <p className="text-white/8 text-[10px] tracking-widest uppercase">WE MUST GO ON.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}