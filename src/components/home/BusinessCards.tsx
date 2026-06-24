import Link from 'next/link'
import { Server, Headphones, Settings, Layers } from 'lucide-react'

const BUSINESSES = [
  {
    icon: Server,
    title: '시스템구축',
    desc: '농업·금융 분야 IT 시스템의 기획부터 구축, 운영까지 전 과정을 책임집니다.',
    href: '/business/si',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Headphones,
    title: 'ITO서비스',
    desc: 'IT 인프라 아웃소싱을 통해 고객사의 핵심 업무에 집중할 수 있도록 지원합니다.',
    href: '/business/ito',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Settings,
    title: 'IT서비스',
    desc: '안정적인 IT 운영 및 유지보수 서비스로 시스템 가용성을 극대화합니다.',
    href: '/business/it',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Layers,
    title: '솔루션',
    desc: '농업·금융에 특화된 자체 솔루션으로 업무 효율과 생산성을 높입니다.',
    href: '/business/solution',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

export default function BusinessCards() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="business-heading">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-nh-green text-sm font-semibold uppercase tracking-widest mb-2">Business</p>
          <h2 id="business-heading" className="text-2xl lg:text-3xl font-bold text-gray-900">
            사업분야
          </h2>
          <p className="mt-3 text-gray-500 text-sm lg:text-base">
            농협정보시스템의 핵심 사업 영역을 소개합니다
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESSES.map((biz, idx) => {
            const Icon = biz.icon
            return (
              <li key={idx}>
                <Link
                  href={biz.href}
                  className="group block bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-gray-200 h-full"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${biz.bg} mb-5`}>
                    <Icon size={28} className={biz.color} />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${biz.color} group-hover:underline`}>
                    {biz.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {biz.desc}
                  </p>
                  <p className={`mt-5 text-sm font-medium ${biz.color} flex items-center gap-1`}>
                    자세히 보기 →
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
