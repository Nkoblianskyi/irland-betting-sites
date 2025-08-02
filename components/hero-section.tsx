"use client"

import Image from "next/image"
import type { Dispatch, SetStateAction } from "react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  return (
    <section className="relative bg-green-900/60 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/bg.jpg" alt="Betting background" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-green-900/30"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white opacity-10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-green-500 opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-orange-500 opacity-50"></div>
      </div>

      <div className="container mx-auto px-2 py-6 relative z-10 md:py-7">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with animation */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h1 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight text-white drop-shadow-lg">
              FIND YOUR <span className="text-orange-300">PERFECT</span> IRISH BETTING SITE
            </h1>
            <p className="text-sm md:text-lg text-gray-100 max-w-2xl mx-auto font-light">
              Unbiased reviews, top bonuses, and secure platforms for Irish bettors.
            </p>
          </div>

          {/* Features - now truly delicate, just icons and text */}
          <div
            className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-3 md:gap-8 mb-6 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center justify-center gap-1">
              <Image src="/flag.png" alt="Irish flag" width={18} height={18} className="flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-white opacity-90">Licensed & Secure</span>
            </div>

            <div className="flex items-center justify-center gap-1">
              <span className="text-xs md:text-sm font-medium text-white opacity-90">Top Bonuses</span>
            </div>

            <div className="flex items-center justify-center gap-1">
              <span className="text-xs md:text-sm font-medium text-white opacity-90">Expert Reviews</span>
            </div>
          </div>

          {/* Responsible gambling notice */}
          <div className="text-center mt-4 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <p className="text-[10px] text-gray-200">
              Play responsibly. Terms and wagering conditions apply.{" "}
              <button
                onClick={() => setIsAdvertiserModalOpen(true)}
                className="text-orange-300 hover:text-orange-200 hover:underline font-medium transition-colors duration-300"
              >
                Advertiser Info
              </button>{" "}
              |{" "}
              <button
                onClick={() => setIsAgeModalOpen(true)}
                className="text-orange-300 hover:text-orange-200 hover:underline font-medium transition-colors duration-300"
              >
                18+ Only
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
