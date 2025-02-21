"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const categories = [
  {
    title: "Electronics",
    href: "/products?category=electronics",
    description: "Smartphones, Laptops, and Smart Devices",
    subcategories: ["Smartphones", "Laptops", "Tablets", "Accessories"]
  },
  {
    title: "Home Appliances",
    href: "/products?category=appliances",
    description: "TVs, Refrigerators, and Kitchen Appliances",
    subcategories: ["TVs", "Refrigerators", "Air Conditioners", "Washing Machines"]
  },
  {
    title: "Fashion",
    href: "/products?category=fashion",
    description: "Clothing, Footwear, and Accessories",
    subcategories: ["Men's Fashion", "Women's Fashion", "Kids' Fashion", "Accessories"]
  }
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((category) => (
          <NavigationMenuItem key={category.title}>
            <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-3 p-6 w-[400px]"
              >
                <div className="grid gap-2">
                  <Link
                    href={category.href}
                    className="text-sm font-medium leading-none hover:underline"
                  >
                    All {category.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      href={`${category.href}?subcategory=${subcategory.toLowerCase()}`}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{subcategory}</div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}