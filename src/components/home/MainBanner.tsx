'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    id: 1,
    headline: '디지털 농업의 미래를\n이끌어갑니다',
    sub: '농협정보시스템은 농업과 IT 기술의 융합으로\n더 나은 디지털 농업 환경을 만들어 갑니다.',
    link: '/company/intro',
    linkLabel: '회사 소개 보기',
    bg: 'from-green-900 via-nh-green to-green-700',
  },
  {
    id: 2,
    headline: '혁신적인 IT 솔루션으로\n농업의 내일을 설계합니다',
    sub: '시스템 구축부터 ITO, IT 서비스, 자체 솔루션까지\n농업 IT 전 영역을 아우릅니다.',
    link: '/business',
    linkLabel: '사업분야 보기',
    bg: 'from-slate-800 via-slate-700 to-green-900',
  },
  {
    id: 3,
    headline: '신뢰와 전문성을 바탕으로\n함께 성장합니다',
    sub: '농협정보시스템과 함께할\n우수 인재를 기다립니다.',
    link: '/recruit',
    linkLabel: '채용소식 보기',
    bg: 'from-green-800 via-teal-700 to-slate-800',
  },
]

export default function MainBanner() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = useCallback(() => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length), [])
  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  const slide = SLIDES[current]

  return (
    <section
      className={`relative w-full h-[400px] lg:h-[560px] bg-gradient-to-br ${slide.bg} transition-all duration-700 overflow-hidden`}
      aria-label="메인 비주얼 배너"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-white" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-2 border-white" />
      </div>

      {/* 슬라이드 콘텐츠 */}
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-col justify-center">
        <p className="text-green-300 text-sm lg:text-base font-medium mb-4">
          농협정보시스템
        </p>
        <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight whitespace-pre-line mb-5">
          {slide.headline}
        </h2>
        <p className="text-green-100 text-sm lg:text-lg leading-relaxed whitespace-pre-line mb-8 max-w-xl">
          {slide.sub}
        </p>
        <div>
          <Link
            href={slide.link}
            className="inline-flex items-center gap-2 bg-white text-nh-green font-semibold px-6 py-3 rounded hover:bg-green-50 transition-colors text-sm lg:text-base"
          >
            {slide.linkLabel}
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>

      {/* 이전/다음 버튼 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="다음 슬라이드"
      >
        <ChevronRight size={20} />
      </button>

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50'
            }`}
            aria-label={`슬라이드 ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>

      {/* 슬라이드 번호 */}
      <div className="absolute bottom-6 right-8 z-20 text-white/60 text-xs">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </section>
  )
}
