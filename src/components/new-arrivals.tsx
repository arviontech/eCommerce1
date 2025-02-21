"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 199999,
    originalPrice: 209999,
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500&h=500&fit=crop",
    badge: "New Launch"
  },
  {
    id: 2,
    name: "Samsung Galaxy Tab S9",
    price: 89999,
    originalPrice: 99999,
    rating: 4.7,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500&h=500&fit=crop",
    badge: "Just Arrived"
  }
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function NewArrivals() {
  

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">New Arrivals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                   
                  >
                    <Heart
                      className={`w-5 h-5 `}
                    />
                  </Button>
                  {product.badge && (
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </Link>
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              </div>
              <Button
                className="w-full gap-2"
                
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}