"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import * as React from "react"

const product = {
  id: 1,
  name: "Samsung Galaxy S24 Ultra",
  price: 189999,
  originalPrice: 199999,
  rating: 4.8,
  reviews: 245,
  images: [
    "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1610945261940-fe87c15b0c91?w=800&h=800&fit=crop"
  ],
  badge: "New",
  category: "Smartphones",
  brand: "Samsung",
  description: "Experience the next level of mobile technology with the Samsung Galaxy S24 Ultra. Featuring a stunning display, powerful camera system, and all-day battery life.",
  specifications: {
    "Display": "6.8-inch Dynamic AMOLED 2X",
    "Processor": "Snapdragon 8 Gen 3",
    "RAM": "12GB",
    "Storage": "256GB/512GB/1TB",
    "Battery": "5000mAh",
    "Camera": "200MP main + 12MP ultra-wide + 50MP telephoto",
    "OS": "Android 14 with One UI 6.1"
  },
  stock: 15
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = React.useState(1)
  const [selectedImage, setSelectedImage] = React.useState(0)

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(q => q + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full h-full"
              >
                <Image
                  src={product.images[selectedImage]}
                  alt={`${product.name} - Image ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            {product.badge && (
              <Badge className="absolute top-4 left-4" variant="secondary">
                {product.badge}
              </Badge>
            )}
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square w-24 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === selectedImage ? "border-primary" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${product.name} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center text-yellow-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                {product.reviews} reviews
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">
                {formatPrice(product.price)}
              </span>
              <span className="text-xl text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <Badge variant="destructive">
                Save {formatPrice(product.originalPrice - product.price)}
              </Badge>
            </div>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">
                {product.stock} units available
              </span>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications">
              <Card className="p-6">
                <dl className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-3 gap-4">
                      <dt className="font-medium text-muted-foreground">{key}</dt>
                      <dd className="col-span-2">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-6 h-6 fill-current" />
                      <span className="ml-2 text-2xl font-bold">{product.rating}</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.reviews} Reviews</p>
                      <p className="text-sm text-muted-foreground">From verified buyers</p>
                    </div>
                  </div>
                  {/* Review list would go here */}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}