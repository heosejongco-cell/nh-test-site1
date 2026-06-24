import { AFFILIATE_LINKS } from '@/lib/navigation'
import { ExternalLink } from 'lucide-react'

export default function AffiliateLinks() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50" aria-labelledby="affiliate-heading">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <h2 id="affiliate-heading" className="text-center text-lg font-bold text-gray-700 mb-8">
          관련 사이트
        </h2>
        <ul className="flex flex-wrap justify-center gap-3 lg:gap-4">
          {AFFILIATE_LINKS.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm text-gray-600 hover:border-nh-green hover:text-nh-green hover:shadow-sm transition-all duration-200"
              >
                {link.label}
                <ExternalLink size={13} className="text-gray-400" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
