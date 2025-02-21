"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { SearchBar } from "@/components/search-bar"
import { CartPreview } from "@/components/cart-preview"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingBag className="h-6 w-6" />
            <span>Arvion</span>
          </Link>
          <div className="flex-1 flex items-center justify-between gap-4 md:gap-8">
            <MainNav />
            <SearchBar />
            <div className="flex items-center gap-4">
              <CartPreview />
              <UserNav />
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="h-1 bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </header>
  )
}