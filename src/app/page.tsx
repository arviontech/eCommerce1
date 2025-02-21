import { HeroCarousel } from "@/components/hero-carousel"
import { FlashSaleSection } from "@/components/flash-sale-section"
import { TopBrands } from "@/components/top-brands"
import { FeaturedProducts } from "@/components/featured-products"

import { NewArrivals } from "@/components/new-arrivals"
import { PromotionalBanners } from "@/components/promotional-banners"
import { DealOfTheDay } from "@/components/deal-of-the-day"
import { CategoryShowcase } from "@/components/category-showcase"



export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroCarousel />
      <div className="container mx-auto px-4 py-8 space-y-12">
        <FlashSaleSection />
        <DealOfTheDay />
        <PromotionalBanners />
        <TopBrands />
        <CategoryShowcase />
        <FeaturedProducts />
        <NewArrivals />
      </div>
    </main>
  )
}