"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const brands = [
  {
    id: 1,
    name: "Samsung Bangladesh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Walton",
    logo: "data:image/png;base64,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",
    category: "Local Tech"
  },
  {
    id: 3,
    name: "Aarong",
    logo: "https://aarong.com/media/logo/stores/1/Aarong_Logo.png",
    category: "Fashion"
  },
  {
    id: 4,
    name: "PRAN",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZlg6GmW-EwSj-NyZcIvZHe5AbEalmrGK58ulR8BwmKaE5UCXUKnVyvHuxpMtScP3k6pP8lbdZgJI2pwD5yM9aSA8D6pMJGLvNnRHz",
    category: "Food & Beverage"
  },
  {
    id: 5,
    name: "Xiaomi Bangladesh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/512px-Xiaomi_logo.svg.png",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Samsung Bangladesh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png",
    category: "Electronics"
  },
  {
    id: 7,
    name: "Walton",
    logo: "data:image/png;base64,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",
    category: "Local Tech"
  },
  {
    id: 8,
    name: "Aarong",
    logo: "https://aarong.com/media/logo/stores/1/Aarong_Logo.png",
    category: "Fashion"
  },
  {
    id: 9,
    name: "PRAN",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZlg6GmW-EwSj-NyZcIvZHe5AbEalmrGK58ulR8BwmKaE5UCXUKnVyvHuxpMtScP3k6pP8lbdZgJI2pwD5yM9aSA8D6pMJGLvNnRHz",
    category: "Food & Beverage"
  },
  {
    id: 10,
    name: "Xiaomi Bangladesh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/512px-Xiaomi_logo.svg.png",
    category: "Electronics"
  },
 

]

export function TopBrands() {
  return (
    <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium text-gray-800">Top Brands</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: true,
            slidesToScroll: 2
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand) => (
              <CarouselItem key={brand.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <motion.div
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer h-32 flex flex-col justify-between"
                >
                  <div className="relative h-20 w-full p-3 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={80}
                      height={40}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <div className="bg-gray-50 p-2 text-center">
                    <p className="text-xs font-medium text-gray-600 truncate">{brand.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold text-center">{brand.name}</h3>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-3 bg-white/80 hover:bg-white shadow-md border border-gray-100 size-8" />
          <CarouselNext className="hidden sm:flex -right-3 bg-white/80 hover:bg-white shadow-md border border-gray-100 size-8" />
        </Carousel>
      </CardContent>
    </Card>
  )
}