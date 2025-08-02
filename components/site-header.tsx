"use client"

import Link from "next/link"
import { Trophy } from "lucide-react"
import { useState, useEffect } from "react"
import { Badge } from "./badge"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#005C26]/95 via-[#F0F0F0]/95 to-[#CC4600]/95 backdrop-blur-sm shadow-lg" // Slightly darker gradient on scroll
          : "bg-gradient-to-r from-[#007A33] via-[#FFFFFF] to-[#FF5800]" // Irish flag gradient
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 relative">
        {/* Centered Logo and Name */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 group z-20">
          <div className="relative h-10 w-10 bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-green-500 opacity-90"></div>
            <Trophy className="h-6 w-6 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold transition-colors duration-300 group-hover:text-white leading-none text-black">
              Irish Top Betting Sites
            </span>
          </div>
        </Link>

        {/* 18+ Badge (right) */}
        <div className="flex items-center ml-auto z-20">
          <Badge className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">18+</Badge>
        </div>
      </div>
    </header>
  )
}
