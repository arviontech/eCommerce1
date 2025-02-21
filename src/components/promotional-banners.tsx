"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const promotions = [
  {
    id: 1,
    title: "Eid Special Offers",
    description: "Up to 50% off on selected items",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=400&fit=crop",
    link: "/products?promotion=eid-special",
    gradient: "from-purple-500/80 to-indigo-500/80"
  },
  {
    id: 2,
    title: "Tech Week Sale",
    description: "Latest gadgets at unbeatable prices",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    link: "/products?promotion=tech-week",
    gradient: "from-blue-500/80 to-cyan-500/80"
  }
]

export function PromotionalBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {promotions.map((promo) => (
        <Link key={promo.id} href={promo.link}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="overflow-hidden">
              <div className="relative h-48 md:h-64">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${promo.gradient}`}>
                  <div className="h-full flex flex-col justify-center p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                    <p className="mb-4">{promo.description}</p>
                    <div className="flex items-center text-sm font-medium">
                      <span>Shop Now</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}