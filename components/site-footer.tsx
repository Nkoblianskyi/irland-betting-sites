import Link from "next/link"
import Image from "next/image"
import { Info, AlertTriangle, Trophy } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top row: Logo+Description and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-gray-700 pb-8">
          {/* Logo and Description (left) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="relative h-10 w-10 bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-green-500 opacity-90"></div>
                <Trophy className="h-6 w-6 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-300 leading-none">
                  Irish Top Betting Sites
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm max-w-md">
              Your trusted guide to Ireland's premier betting platforms. We provide expert reviews, exclusive bonuses,
              and comprehensive comparisons to enhance your betting experience.
            </p>
          </div>

          {/* Navigation Links (right) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-lg font-bold mb-4 text-orange-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-end gap-2 group"
                >
                  <span className="h-1 w-1 bg-orange-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-end gap-2 group"
                >
                  <span className="h-1 w-1 bg-orange-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-end gap-2 group"
                >
                  <span className="h-1 w-1 bg-orange-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-end gap-2 group"
                >
                  <span className="h-1 w-1 bg-orange-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gaming Section */}
        <div className="py-8 mb-8 border-b border-gray-700">
          <h3 className="text-lg font-bold mb-4 text-orange-300 text-center">Responsible Gaming</h3>
          <div className="space-y-5">
            <div className="bg-green-900/50 p-4 rounded-lg border border-green-800">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="bg-white p-1 rounded-full">
                  <span className="text-red-600 font-bold text-sm">18+</span>
                </div>
                <span className="font-semibold text-white">Age Restriction</span>
              </div>
              <p className="text-sm text-gray-300 text-center">
                All betting sites featured on our platform require users to be at least 18 years of age. Gambling by
                underage individuals is strictly prohibited.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-green-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link href="https://www.gambleaware.org/" className="transition-transform duration-300 hover:scale-105">
                  <Image src="/gamble-aware.png" alt="gamble-aware" width={120} height={40} className="mb-2 mt-4" />
                </Link>
                <span className="text-xs text-center text-gray-300">Be Gamble Aware</span>
              </div>

              <div className="bg-green-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link href="https://gamblingcare.ie/" className="transition-transform duration-300 hover:scale-105">
                  <Image src="/GamblingCare-w.png" alt="GamCare" width={120} height={40} className="mb-2 mt-4" />
                </Link>
                <span className="text-xs text-center text-gray-300">GamCare Support</span>
              </div>

              <div className="bg-green-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link
                  href="https://www.problemgambling.ie/"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image src="/extern-problem.png" alt="extern-problem" width={120} height={40} className="mb-2 mt-4" />
                </Link>
                <span className="text-xs text-center text-gray-300">Gambling Therapy</span>
              </div>

              <div className="bg-green-900/50 p-3 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 flex-col">
                <Link
                  href="https://www.gamcare.org.uk/"
                  className="transition-transform duration-300 hover:scale-105 mt-4"
                >
                  <Image src="/gamcare.png" alt="GambleAware" width={120} height={40} className="mb-2 mt-4" />
                </Link>
                <span className="text-xs text-center text-gray-300">Safe Gambling</span>
              </div>
            </div>

            <p className="text-sm text-gray-300 text-center">
              Gambling should be an enjoyable form of entertainment, not a way to make money. Always gamble responsibly
              and within your means. If you feel you may have a gambling problem, seek help from professional support
              services.
            </p>
          </div>
        </div>

        {/* Disclaimer and Copyright (bottom) */}
        <div className="text-center text-sm text-gray-400 space-y-2">
          <div className="flex items-start justify-center gap-2">
            <Info className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="max-w-3xl">
              Irish Top Betting Sites provides information for entertainment purposes only. We may receive compensation
              from our partners when you use our links to their websites. All content is intended for individuals aged
              18+ located in Ireland. Gambling involves risk and should be approached responsibly. If you have concerns
              about your gambling habits, please seek professional help.
            </p>
          </div>
          <p className="flex items-center justify-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <span>Gambling can be addictive. Play responsibly.</span>
          </p>
          <p>© 2025 Irish Top Betting Sites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
