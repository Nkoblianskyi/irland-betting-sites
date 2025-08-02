"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { HeroSection } from "@/components/hero-section"
import { BettingGuideSection } from "@/components/betting-guide-section"
import { ResponsibleGamingMiniSection } from "@/components/responsible-gaming-mini-section"
import { OurChoiceSection } from "@/components/our-choice-section"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Global Background Image and Overlay */}
      <div className="relative flex-grow bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/bg.jpg")' }}>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* All page content goes inside this div */}
        <div className="relative z-10 pt-10">
          <HeroSection setIsAgeModalOpen={setIsAgeModalOpen} setIsAdvertiserModalOpen={setIsAdvertiserModalOpen} />

          {/* Betting Sites List */}
          <div id="betting-sites" className="relative">
            <BettingSitesList />
          </div>

          {/* Expert Betting Guide Section */}
          <BettingGuideSection />

          {/* Responsible Gaming Mini Section */}
          <ResponsibleGamingMiniSection />

          {/* Our Choice Section */}
          <OurChoiceSection />
        </div>
      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
