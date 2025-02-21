"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Timer, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useCountdown } from "@/hooks/use-countdown"

export function FlashSaleSection() {
  const { hours, minutes, seconds } = useCountdown(new Date("2024-04-10T00:00:00"))
  const progress = 50 // This would come from your backend

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Zap className="w-6 h-6 text-red-500" />
          Flash Sale
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <Timer className="w-5 h-5" />
          <div className="flex gap-2 text-xl font-mono">
            <span>{hours.toString().padStart(2, "0")}:</span>
            <span>{minutes.toString().padStart(2, "0")}:</span>
            <span>{seconds.toString().padStart(2, "0")}</span>
          </div>
        </div>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground">
            {progress}% Sold
          </p>
        </div>
      </CardContent>
    </Card>
  )
}