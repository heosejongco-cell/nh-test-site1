import Link from 'next/link'
import { AFFILIATE_LINKS } from '@/lib/navigation'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      {/* 계열사 링크 */}
      <div className="border-b border-gray-700">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
            <span className="text-xs text-gray-500 mr-2">관련사이트</span>
            {AFFILIATE_LINKS.map((link, idx) => (
              <span key={idx} className="flex items-center">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-white transition-colors px-2"
                >
                  {link.label}
                </a>
                {idx < AFFILIATE_LINKS.length - 1 && (
                  <span className="text-gray-700 text-xs">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 푸터 본문 */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* 로고 & 회사정보 */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-nh-green rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">NH</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">농협정보시스템</p>
                <p className="text-gray-500 text-xs">NONGHYUP IT</p>
              </div>
            </div>
            <address className="not-italic text-xs text-gray-400 leading-6 space-y-1">
              <p>서울특별시 서초구 매헌로 24, NH디지털혁신캠퍼스 2층</p>
              <p>대표전화: <a href="tel:02-2080-5000" className="hover:text-white transition-colors">02-2080-5000</a></p>
              <p>사업자등록번호: 214-81-07274</p>
              <p>대표이사: 홍길동</p>
            </address>
          </div>

          {/* 법적고지 링크 */}
          <div className="flex flex-col gap-2">
            <nav aria-label="이용안내 메뉴">
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                <li>
                  <Link href="/info/privacy" className="text-xs text-gray-400 hover:text-white transition-colors font-medium">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/info/no-email" className="text-xs text-gray-400 hover:text-white transition-colors">
                    이메일수집거부
                  </Link>
                </li>
                <li>
                  <Link href="/info/sitemap" className="text-xs text-gray-400 hover:text-white transition-colors">
                    사이트맵
                  </Link>
                </li>
              </ul>
            </nav>

            {/* 인증마크 자리 */}
            <div className="flex items-center gap-3 mt-4">
              <div className="border border-gray-600 rounded px-3 py-2 text-center">
                <p className="text-[10px] text-gray-500 leading-tight">웹 접근성</p>
                <p className="text-[10px] text-gray-500 leading-tight">품질마크</p>
              </div>
              <div className="border border-gray-600 rounded px-3 py-2 text-center">
                <p className="text-[10px] text-gray-500 leading-tight">ISMS</p>
                <p className="text-[10px] text-gray-500 leading-tight">인증</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-600">
            Copyright © 농협정보시스템 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
