"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Timer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useCountdown } from "@/hooks/use-countdown"

const deal = {
  id: 1,
  name: "MacBook Pro M3",
  price: 259999,
  originalPrice: 299999,
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=500&fit=crop",
  description: "Experience the power of Apple's latest M3 chip",
  stock: 50,
  sold: 35
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function DealOfTheDay() {
  const { hours, minutes, seconds } = useCountdown(new Date("2024-04-10T00:00:00"))
  const progress = (deal.sold / deal.stock) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Deal of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={deal.image}
              alt={deal.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{deal.name}</h3>
              <p className="text-muted-foreground">{deal.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">
                {formatPrice(deal.price)}
              </span>
              <span className="text-xl text-muted-foreground line-through">
                {formatPrice(deal.originalPrice)}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Timer className="w-5 h-5" />
              <div className="flex gap-2 text-xl font-mono">
                <span>{hours.toString().padStart(2, "0")}:</span>
                <span>{minutes.toString().padStart(2, "0")}:</span>
                <span>{seconds.toString().padStart(2, "0")}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{deal.sold} Sold</span>
                <span>{deal.stock - deal.sold} Available</span>
              </div>
            </div>
            <Button size="lg" className="w-full">Buy Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}