"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=300&fit=crop",
    count: 245,
    link: "/products?category=smartphones"
  },
  {
    id: 2,
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=300&fit=crop",
    count: 189,
    link: "/products?category=laptops"
  },
  {
    id: 3,
    name: "Smart TVs",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=300&fit=crop",
    count: 167,
    link: "/products?category=tvs"
  }
]

export function CategoryShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Shop by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.link}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm">{category.count} Products</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}