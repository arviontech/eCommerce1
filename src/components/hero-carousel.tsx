/* eslint-disable react/no-unescaped-entities */
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

const productItems = [
  { id: 1, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2024%2F12%2Fsku-16070.jpg&w=1920&q=75", alt: "Blue designer handbag", href: "/product/blue-handbag" },
  { id: 2, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F01%2F1077.jpg&w=1920&q=75", alt: "Gold earrings", href: "/product/gold-earrings" },
  { id: 3, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2024%2F12%2Fsku-29785.jpg&w=1920&q=75", alt: "Green leather belt", href: "/product/green-belt" },
  { id: 4, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F01%2F1271.jpg&w=1920&q=75", alt: "Pearl ring", href: "/product/pearl-ring" },
  { id: 5, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F01%2F1271.jpg&w=1920&q=75", alt: "Ruby earrings", href: "/product/ruby-earrings" },
  { id: 6, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F01%2Fsku-7354.jpg&w=1920&q=75", alt: "Blue dial watch", href: "/product/blue-watch" },
  { id: 7, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F01%2Fsku-24750.jpg&w=1920&q=75", alt: "Ruby ring", href: "/product/ruby-ring" },
  { id: 8, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2024%2F12%2Fvaseline-lip-therapy-rosy-lips-2118-1.jpg&w=1920&q=75", alt: "Red dial watch", href: "/product/red-watch" },
  { id: 9, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2024%2F12%2F33709-nivea-soft-light-moisturising-cream.jpg&w=1920&q=75", alt: "Turquoise jewelry", href: "/product/turquoise-jewelry" },
  { id: 10, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F01%2Fsku-9672.png&w=1920&q=75", alt: "Yellow designer bag", href: "/product/yellow-bag" },
  { id: 11, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2024%2F12%2Fexclusive-winter-combo-03-28dz.jpg&w=1920&q=75", alt: "Heart pendant", href: "/product/heart-pendant" },
  { id: 12, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2024%2F06%2F7441-missha-all-around-safe-block-soft-finish-sun-milk-spf50-or-pa-1.jpg&w=1920&q=75", alt: "Red designer handbag", href: "/product/red-handbag" },
  { id: 13, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2024%2F12%2Fsku-14575.jpg&w=1920&q=75", alt: "Diver watch", href: "/product/diver-watch" },
  { id: 14, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2020%2F10%2FNivea-Creme-1.jpg&w=1920&q=75", alt: "Gold hoop earrings", href: "/product/gold-earrings-hoops" },
  { id: 15, image: "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F02%2Fhimalaya-moisturizing-aloe-vera-face-gel-100ml-1.jpg&w=1920&q=75", alt: "Blue designer bag", href: "/product/blue-designer-bag" }
];

export function HeroCarousel() {
  return (
    <div className="bg-gray-50 rounded-lg m-20 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Limitless love, limitless luxury</h2>
              <p className="text-lg text-gray-700 mb-6">Save 15% on luxury fashion accessories for Valentine's Day.</p>
              <Link href="/shop/luxury" className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors">
                Shop luxury
              </Link>
              <p className="text-xs mt-6 text-gray-500">*See Terms & Conditions.</p>
            </div>
            <div className="mt-auto">
              <p className="text-lg font-medium text-gray-800">Things.People.Love.</p>
            </div>
          </div>

          {/* Right side - Product Grid */}
          <div className="relative flex-1">
            <div className="grid grid-cols-12 md:grid-cols-5 gap-2 md:gap-3">
              {productItems.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href}
                  className="aspect-square overflow-hidden bg-white shadow-sm rounded"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image || "https://i.ebayimg.com/images/g/hzcAAOSwWupnojal/s-l960.png"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    
                    />
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Discount Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-black text-white rounded-full w-28 h-28 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">-15%</span>
                <span className="text-xs">Coupon code:</span>
                <span className="text-sm font-bold">LOVE25LUX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel;