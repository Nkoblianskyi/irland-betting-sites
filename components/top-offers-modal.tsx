"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { bettingSites } from "@/data/betting-sites"


export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite, setTopSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-3">
      <div className="relative w-full max-w-sm animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-30 p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300 shadow-lg"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
        {/* Text Above the Card */}
        <div className="text-center text-white text-lg font-semibold mb-4 drop-shadow-lg">Our Top Recommendation</div>

        {/* TOP PICK Badge - positioned relative to the modal container, not the card */}
        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 z-20 bg-green-600 text-white text-xs font-bold rounded-full py-1.5 px-4 shadow-md flex items-center whitespace-nowrap">
          TOP PICK
        </div>

        {/* Main content area adjustments */}
        <div className="p-4 flex justify-center bg-transparent">
          <Link
            key={topSite.id}
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 relative"
          >
            <Card className="h-full bg-gradient-to-r from-[#007A33] via-[#FFFFFF] to-[#FF5800] rounded-xl">
              <CardContent className="p-4 flex flex-col items-center text-center h-full pt-8 bg-white/80">
                <div className="flex-grow flex flex-col items-center">
                  {/* Logo adjustments */}
                  <div className="bg-white p-2 rounded-lg shadow-sm mb-3 flex items-center justify-center w-36 h-36">
                    <Image
                      src={topSite.logo || "/placeholder.svg"}
                      alt={topSite.name}
                      width={140}
                      height={96}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  {/* Rating adjustments */}
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" />
                    ))}
                    <span className="font-bold text-base text-gray-800 ml-1">{topSite.score.toFixed(1)}</span>
                  </div>
                  {/* Welcome Offer Badge */}
                  <Badge variant="outline" className="bg-green-50 text-green-700 mb-2 text-xs">
                    WELCOME OFFER
                  </Badge>
                  {/* Bonus Text adjustments */}
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{topSite.bonus}</h3>
                </div>
                {/* Button and Disclaimer Group */}
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink text-sm py-4"
                      asChild
                    >
                      <span className="flex items-center justify-center">CLAIM BONUS</span>
                    </Button>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-2">18+. T&Cs Apply. Play Responsibly.</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
