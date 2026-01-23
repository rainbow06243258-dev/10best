import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - 10BestPick',
  description: 'Learn about our affiliate relationships and how we earn commissions from product recommendations.',
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Affiliate Disclosure
              </h1>
              <p className="text-lg text-gray-600">
                Transparency in Our Recommendations
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Commitment to Transparency</h2>
                <p className="text-gray-700 leading-relaxed">
                  At 10BestPick, we believe in complete transparency with our readers. This page explains our affiliate relationships and how we may earn income from the products we recommend.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What Are Affiliate Links?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Affiliate links are special URLs that allow us to earn a commission when you click on them and make a purchase. These links contain a unique identifier that tells the merchant we referred you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you purchase a product through an affiliate link on our site, the merchant pays us a small commission at no additional cost to you. The price you pay is exactly the same whether you use our affiliate link or go directly to the merchant's website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Affiliate Programs We Participate In</h2>
                <p className="text-gray-700 leading-relaxed">
                  10BestPick is a participant in various affiliate marketing programs, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Amazon Associates Program:</strong> We earn from qualifying purchases made through our Amazon links</li>
                  <li><strong>Other Retailer Affiliate Programs:</strong> We may participate in affiliate programs with other major retailers and brands</li>
                  <li><strong>Affiliate Networks:</strong> We work with various affiliate networks that connect us with merchants</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">How Affiliate Commissions Work</h2>
                <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Step 1:</strong> You click on a product link on our website
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Step 2:</strong> You're redirected to the merchant's website (like Amazon)
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Step 3:</strong> You make a purchase on the merchant's website
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Step 4:</strong> The merchant pays us a small commission (typically 1-10% of the sale)
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Important:</strong> You pay the same price - the commission comes from the merchant's profit, not from your pocket
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Editorial Independence</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we participate in affiliate programs, our product recommendations and reviews are based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Thorough research and analysis</li>
                  <li>Expert evaluations and testing</li>
                  <li>Real customer reviews and feedback</li>
                  <li>Product specifications and features</li>
                  <li>Value for money and quality</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  <strong>We never let affiliate commissions influence our editorial decisions.</strong> We only recommend products we genuinely believe offer value to our readers. If a product doesn't meet our standards, we won't recommend it, regardless of potential commission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Support Helps Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  When you make a purchase through our affiliate links, you're supporting our work at no extra cost to you. These commissions help us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Maintain and improve our website</li>
                  <li>Research and test more products</li>
                  <li>Create comprehensive, helpful content</li>
                  <li>Keep our content free for all readers</li>
                  <li>Invest in better tools and resources</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We sincerely appreciate your support and trust in our recommendations.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Not All Links Are Affiliate Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Not every link on our website is an affiliate link. We also link to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Research sources and studies</li>
                  <li>Manufacturer websites for specifications</li>
                  <li>News articles and industry publications</li>
                  <li>Other helpful resources</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  These non-affiliate links are included purely to provide additional information and value to our readers.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Product Prices and Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Please note that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Product prices can change at any time without notice</li>
                  <li>Availability may vary by location and retailer</li>
                  <li>Promotions and discounts are subject to merchant terms</li>
                  <li>We update our content regularly but cannot guarantee real-time accuracy of prices</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Always verify the current price and availability on the merchant's website before making a purchase.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Sponsored Content</h2>
                <p className="text-gray-700 leading-relaxed">
                  In addition to affiliate links, we may occasionally publish sponsored content or reviews. When we do:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We will clearly label sponsored content</li>
                  <li>We maintain editorial control and honesty</li>
                  <li>We only partner with brands we trust</li>
                  <li>Our opinions remain unbiased and truthful</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">FTC Compliance</h2>
                <p className="text-gray-700 leading-relaxed">
                  We comply with the Federal Trade Commission's (FTC) guidelines concerning the use of endorsements and testimonials in advertising. In accordance with FTC guidelines, we disclose that we have financial relationships with some of the merchants and products mentioned on this site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Customer Service and Returns</h2>
                <p className="text-gray-700 leading-relaxed">
                  Important: When you purchase through our affiliate links, you are purchasing directly from the merchant (not from us). Therefore:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>The merchant is responsible for customer service</li>
                  <li>Returns and refunds are handled by the merchant</li>
                  <li>Product warranties come from manufacturers or merchants</li>
                  <li>Shipping and delivery are managed by the merchant</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  For any issues with your purchase, please contact the merchant's customer service directly.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Updates to This Disclosure</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this affiliate disclosure from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Questions?</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about our affiliate relationships or this disclosure, please don't hesitate to contact us:
                </p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li>Email: contact@10bestpick.online</li>
                  <li>Website: 10bestpick.online</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold mb-2">Thank You for Your Support</h3>
                <p className="text-gray-700">
                  We genuinely appreciate your trust in our recommendations and your support through affiliate purchases. Your support allows us to continue providing free, high-quality content to help you make informed purchasing decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
