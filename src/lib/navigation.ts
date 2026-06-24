import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  {
    label: '회사소개',
    href: '/company',
    children: [
      { label: '농협정보시스템', href: '/company/intro' },
      { label: '대표이사 인사말', href: '/company/greeting' },
      { label: '연혁', href: '/company/history' },
      { label: '비전', href: '/company/vision' },
      { label: '조직도', href: '/company/organization' },
      { label: '재무현황', href: '/company/financial' },
      { label: '오시는길', href: '/company/location' },
    ],
  },
  {
    label: '사업분야',
    href: '/business',
    children: [
      { label: '시스템구축', href: '/business/si' },
      { label: 'ITO서비스', href: '/business/ito' },
      { label: 'IT서비스', href: '/business/it' },
      { label: '솔루션', href: '/business/solution' },
    ],
  },
  {
    label: '윤리경영',
    href: '/ethics',
    children: [
      { label: '윤리경영 소개', href: '/ethics/intro' },
      { label: '윤리경영시스템', href: '/ethics/system' },
      { label: '내부제보센터', href: '/ethics/internal-report' },
      { label: '익명제보센터', href: '/ethics/anonymous-report' },
      { label: '부패방지 경영방침', href: '/ethics/anti-corruption' },
    ],
  },
  {
    label: '인재채용',
    href: '/recruit',
    children: [
      { label: '인재상', href: '/recruit/talent' },
      { label: '채용안내', href: '/recruit/guide' },
      { label: '채용소식', href: '/recruit/jobs' },
    ],
  },
  {
    label: '홍보센터',
    href: '/pr',
    children: [
      { label: '공지사항', href: '/pr/notice' },
      { label: '농협정보소식', href: '/pr/news' },
      { label: '입찰공고', href: '/pr/bid' },
      { label: 'FAQ', href: '/pr/faq' },
    ],
  },
  {
    label: '이용안내',
    href: '/info',
    children: [
      { label: '개인정보처리방침', href: '/info/privacy' },
      { label: '이메일수집거부', href: '/info/no-email' },
      { label: '사이트맵', href: '/info/sitemap' },
    ],
  },
]

export const AFFILIATE_LINKS = [
  { label: 'NH농협', href: 'https://www.nonghyup.com' },
  { label: 'NH농협은행', href: 'https://banking.nonghyup.com' },
  { label: 'NH투자증권', href: 'https://www.nhqv.com' },
  { label: 'NH농협생명', href: 'https://www.nhlife.co.kr' },
  { label: 'NH농협손해보험', href: 'https://www.nhfire.co.kr' },
  { label: '농협하나로유통', href: 'https://www.nhhanaro.co.kr' },
  { label: '농협몰', href: 'https://www.nonghyupmall.com' },
]
