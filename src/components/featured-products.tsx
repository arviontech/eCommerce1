"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: 189999,
    originalPrice: 199999,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop",
    badge: "New"
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    price: 259999,
    originalPrice: 279999,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    badge: "Limited"
  },
  {
    id: 3,
    name: "Walton LED Smart TV",
    price: 45999,
    originalPrice: 49999,
    rating: 4.5,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop",
    badge: "Popular"
  },
  {
    id: 4,
    name: "MacBook Pro M3",
    price: 259999,
    originalPrice: 279999,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    badge: "Limited"
  },
  {
    id: 5,
    name: "MacBook Pro M3",
    price: 259999,
    originalPrice: 279999,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    badge: "Limited"
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function FeaturedProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Featured Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="group"
            >
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
                  <Heart className="w-5 h-5" />
                </Button>
                {product.badge && (
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    {product.badge}
                  </Badge>
                )}
              </div>
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
              <Button className="w-full gap-2">
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