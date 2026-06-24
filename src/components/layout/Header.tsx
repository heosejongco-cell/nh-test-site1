'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setMobileExpanded(null)
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function handleMouseEnter(idx: number) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(idx)
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <>
      {/* 스킵 네비게이션 (웹 접근성) */}
      <div className="sr-only focus-within:not-sr-only">
        <a href="#main-content" className="fixed top-0 left-0 z-[9999] bg-nh-green text-white px-4 py-2 text-sm font-medium focus:outline-none">
          본문 바로가기
        </a>
        <a href="#gnb" className="fixed top-0 left-32 z-[9999] bg-nh-green text-white px-4 py-2 text-sm font-medium focus:outline-none">
          메뉴 바로가기
        </a>
        <a href="#footer" className="fixed top-0 left-64 z-[9999] bg-nh-green text-white px-4 py-2 text-sm font-medium focus:outline-none">
          하단 바로가기
        </a>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 로고 */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-nh-green rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs lg:text-sm">NH</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-nh-green font-bold text-sm lg:text-base leading-tight">농협정보시스템</p>
                  <p className="text-gray-400 text-[10px] lg:text-xs leading-tight">NONGHYUP IT</p>
                </div>
              </div>
            </Link>

            {/* PC GNB */}
            <nav id="gnb" className="hidden lg:flex items-center h-full" aria-label="주요 메뉴">
              {NAV_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="px-4 xl:px-5 h-full flex items-center text-gray-700 font-medium text-sm xl:text-base hover:text-nh-green transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && activeDropdown === idx && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 border-nh-green min-w-[160px] py-2 z-50">
                      {item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:text-nh-green hover:bg-gray-50 transition-colors whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* 외부링크 + 모바일 햄버거 */}
            <div className="flex items-center gap-3">
              <a
                href="https://biss.nonghyupit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1 text-xs text-gray-500 border border-gray-300 rounded px-3 py-1.5 hover:border-nh-green hover:text-nh-green transition-colors"
              >
                사업정보제공시스템
                <ExternalLink size={12} />
              </a>
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-nh-green transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="메뉴 열기"
                aria-expanded={mobileOpen}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden">
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <div className="w-8 h-8 bg-nh-green rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">NH</span>
              </div>
              <span className="text-nh-green font-bold text-sm">농협정보시스템</span>
            </Link>
            <button
              className="p-2 text-gray-700"
              onClick={() => setMobileOpen(false)}
              aria-label="메뉴 닫기"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4" aria-label="모바일 메뉴">
            {NAV_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 font-medium"
                  onClick={() => setMobileExpanded(mobileExpanded === idx ? null : idx)}
                  aria-expanded={mobileExpanded === idx}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-200 ${mobileExpanded === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileExpanded === idx && item.children && (
                  <div className="bg-gray-50 pb-2">
                    {item.children.map((child, cidx) => (
                      <Link
                        key={cidx}
                        href={child.href}
                        className="block px-10 py-3 text-sm text-gray-600 hover:text-nh-green"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="px-6 py-4 border-t border-gray-100">
            <a
              href="https://biss.nonghyupit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-500"
            >
              사업정보제공시스템 <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
