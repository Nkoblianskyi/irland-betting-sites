import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | Irish Top Betting Sites",
  description:
    "Discover the mission and values behind Irish Top Betting Sites, your trusted guide to online betting in Ireland.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="pt-28 pb-12 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Irish Top Betting Sites
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              At Irish Top Betting Sites, our mission is to be the most reliable and comprehensive resource for online
              betting enthusiasts across Ireland. We understand the vibrant and dynamic nature of the Irish betting
              landscape, and our goal is to simplify your search for the perfect betting platform. We are dedicated to
              providing unbiased reviews, up-to-date information, and expert insights to help you make informed
              decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 pt-4">Our Approach to Reviews</h2>
            <p>
              Our team of experienced analysts meticulously evaluates each betting site based on a rigorous set of
              criteria. This includes, but is not limited to, licensing and regulation, security measures, fairness of
              odds, variety of sports markets, quality of bonus offers, mobile compatibility, payment options, and
              customer support responsiveness. We delve deep into the user experience to ensure our recommendations are
              practical and trustworthy.
            </p>
            <p>
              We prioritize platforms that hold valid licenses from reputable gambling authorities, ensuring they adhere
              to strict standards for player protection and responsible gaming. Your safety and enjoyment are at the
              forefront of our evaluation process.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 pt-4">Our Core Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Integrity:</strong> We commit to honest and transparent reviews, free from external influence.
              </li>
              <li>
                <strong>Expertise:</strong> Our team comprises industry veterans and betting enthusiasts who bring a
                wealth of knowledge to our evaluations.
              </li>
              <li>
                <strong>Player Focus:</strong> Every piece of content and every recommendation is crafted with the Irish
                bettor's best interest in mind.
              </li>
              <li>
                <strong>Responsibility:</strong> We actively promote responsible gambling and provide resources to
                support safe betting practices.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 pt-4">What We Offer</h2>
            <p>
              Irish Top Betting Sites provides detailed reviews, comparisons of leading platforms, guides to
              understanding various betting markets, and insights into the latest bonuses and promotions. We aim to
              equip you with all the necessary information to navigate the world of online betting confidently and
              responsibly.
            </p>
            <p>
              Thank you for choosing Irish Top Betting Sites as your trusted partner in online betting. We are
              constantly working to improve our service and provide you with the best possible experience.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
