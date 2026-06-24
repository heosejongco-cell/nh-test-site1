'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Paperclip } from 'lucide-react'
import { getSupabase } from '@/lib/supabase'
import type { Notice, News, Bid } from '@/types'

const PLACEHOLDER_NOTICES: Notice[] = [
  { id: 1, title: '2025년 하반기 정보보안 교육 안내', author: '관리자', status: '공지', attachment_url: null, created_at: '2025-12-01' },
  { id: 2, title: '농협정보시스템 홈페이지 개편 안내', author: '관리자', status: '일반', attachment_url: '#', created_at: '2025-11-20' },
  { id: 3, title: '2025년 4분기 시스템 정기점검 일정 안내', author: '관리자', status: '일반', attachment_url: null, created_at: '2025-11-10' },
  { id: 4, title: '개인정보처리방침 개정 안내', author: '관리자', status: '공지', attachment_url: null, created_at: '2025-10-30' },
  { id: 5, title: '농협정보시스템 창립 기념일 안내', author: '관리자', status: '일반', attachment_url: null, created_at: '2025-10-15' },
]

const PLACEHOLDER_NEWS: News[] = [
  { id: 1, title: '농협정보시스템, 클라우드 전환 프로젝트 성공적 완료', author: '홍보팀', image_url: null, created_at: '2025-12-05' },
  { id: 2, title: 'AI 기반 농업 데이터 분석 시스템 구축 착수', author: '홍보팀', image_url: null, created_at: '2025-11-25' },
  { id: 3, title: '2025 NH IT 해커톤 개최 결과 발표', author: '홍보팀', image_url: null, created_at: '2025-11-15' },
  { id: 4, title: '농협정보시스템 ISMS 인증 획득', author: '홍보팀', image_url: null, created_at: '2025-11-01' },
  { id: 5, title: '스마트 농업 플랫폼 고도화 MOU 체결', author: '홍보팀', image_url: null, created_at: '2025-10-20' },
]

const PLACEHOLDER_BIDS: Bid[] = [
  { id: 1, title: '농협 디지털 뱅킹 시스템 고도화 사업 입찰공고', deadline: '2026-01-15', attachment_url: '#', created_at: '2025-12-10' },
  { id: 2, title: '차세대 농업 데이터 플랫폼 구축 사업자 선정', deadline: '2026-01-10', attachment_url: '#', created_at: '2025-12-05' },
  { id: 3, title: '정보보안 솔루션 도입 사업 제안요청서', deadline: '2025-12-31', attachment_url: '#', created_at: '2025-11-28' },
  { id: 4, title: '사무용 PC 교체 사업 입찰 공고', deadline: '2025-12-28', attachment_url: '#', created_at: '2025-11-20' },
  { id: 5, title: '클라우드 인프라 운영 관리 사업 입찰', deadline: '2025-12-25', attachment_url: null, created_at: '2025-11-15' },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\. /g, '.').replace(/\.$/, '')
}

export default function NewsSection() {
  const [notices, setNotices] = useState<Notice[]>(PLACEHOLDER_NOTICES)
  const [news, setNews] = useState<News[]>(PLACEHOLDER_NEWS)
  const [bids, setBids] = useState<Bid[]>(PLACEHOLDER_BIDS)

  useEffect(() => {
    const sb = getSupabase()
    if (!sb) return

    sb.from('notice')
      .select('id, title, author, status, attachment_url, created_at')
      .order('created_at', { ascending: false })
      .limit(5)
      .then(({ data }) => { if (data && data.length > 0) setNotices(data as Notice[]) })

    sb.from('news')
      .select('id, title, author, image_url, created_at')
      .order('created_at', { ascending: false })
      .limit(5)
      .then(({ data }) => { if (data && data.length > 0) setNews(data as News[]) })

    sb.from('bid')
      .select('id, title, deadline, attachment_url, created_at')
      .order('created_at', { ascending: false })
      .limit(5)
      .then(({ data }) => { if (data && data.length > 0) setBids(data as Bid[]) })
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="news-heading">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-nh-green text-sm font-semibold uppercase tracking-widest mb-2">News & Notice</p>
          <h2 id="news-heading" className="text-2xl lg:text-3xl font-bold text-gray-900">
            소식 및 공지
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <NewsList
            title="공지사항"
            href="/pr/notice"
            items={notices.map(n => ({
              id: n.id,
              title: n.title,
              date: formatDate(n.created_at),
              badge: n.status === '공지' ? n.status : undefined,
              hasAttachment: !!n.attachment_url,
            }))}
          />
          <NewsList
            title="농협정보소식"
            href="/pr/news"
            items={news.map(n => ({
              id: n.id,
              title: n.title,
              date: formatDate(n.created_at),
              hasAttachment: false,
            }))}
          />
          <NewsList
            title="입찰공고"
            href="/pr/bid"
            items={bids.map(b => ({
              id: b.id,
              title: b.title,
              date: b.deadline ? `마감 ${formatDate(b.deadline)}` : formatDate(b.created_at),
              hasAttachment: !!b.attachment_url,
            }))}
          />
        </div>
      </div>
    </section>
  )
}

interface NewsListItem {
  id: number
  title: string
  date: string
  badge?: string
  hasAttachment?: boolean
}

function NewsList({ title, href, items }: { title: string; href: string; items: NewsListItem[] }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-bold text-gray-900 text-base">{title}</h3>
        <Link href={href} className="text-xs text-gray-500 hover:text-nh-green transition-colors">
          더보기 +
        </Link>
      </div>
      <ul className="divide-y divide-gray-100">
        {items.map(item => (
          <li key={item.id}>
            <Link
              href={`${href}/${item.id}`}
              className="flex items-start justify-between gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start gap-2 min-w-0 flex-1">
                {item.badge && (
                  <span className="flex-shrink-0 mt-0.5 text-[10px] font-semibold text-nh-green border border-nh-green rounded px-1.5 py-0.5">
                    {item.badge}
                  </span>
                )}
                <span className="text-sm text-gray-700 group-hover:text-nh-green transition-colors truncate leading-relaxed">
                  {item.title}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {item.hasAttachment && <Paperclip size={13} className="text-gray-400" />}
                <span className="text-xs text-gray-400 whitespace-nowrap">{item.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
