import { Suspense } from 'react'
import MainBanner from '@/components/home/MainBanner'
import BusinessCards from '@/components/home/BusinessCards'
import NewsSection from '@/components/home/NewsSection'
import AffiliateLinks from '@/components/home/AffiliateLinks'

function NewsSectionSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden animate-pulse">
              <div className="h-14 bg-gray-100" />
              {[1, 2, 3, 4, 5].map(j => (
                <div key={j} className="px-5 py-4 border-t border-gray-100">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <MainBanner />
      <BusinessCards />
      <Suspense fallback={<NewsSectionSkeleton />}>
        <NewsSection />
      </Suspense>
      <AffiliateLinks />
    </>
  )
}
