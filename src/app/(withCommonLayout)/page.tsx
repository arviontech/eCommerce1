import Banner from "@/components/Home/Banner";
import { FeaturedCategories } from "@/components/Home/featured-categories";

import { ProductGrid } from "@/components/Home/product-grid";

export default function Home() {
  return (
    <div className="min-h-screen z-[100]">
      <Banner />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeaturedCategories />
        <ProductGrid />
      </div>
    </div>
  );
}
