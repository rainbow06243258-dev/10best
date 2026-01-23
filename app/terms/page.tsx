import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - 10BestPick',
  description: 'Read the terms and conditions for using 10BestPick website and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600">
                Last Updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to 10BestPick ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website 10bestpick.online (the "Site"), including any content, functionality, and services offered on or through the Site.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using the Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use the Site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Use of the Site</h2>
                <h3 className="text-xl font-semibold mt-4">Permitted Use</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Use the Site in any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
                  <li>Use any robot, spider, or other automatic device to access the Site</li>
                  <li>Introduce any viruses, trojan horses, worms, or other malicious code</li>
                  <li>Attempt to gain unauthorized access to any portion of the Site</li>
                  <li>Interfere with or disrupt the Site or servers or networks connected to the Site</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by 10BestPick, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Your computer may temporarily store copies of such materials incidental to your accessing and viewing those materials</li>
                  <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
                  <li>You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Affiliate Relationships and Commissions</h2>
                <p className="text-gray-700 leading-relaxed">
                  10BestPick participates in various affiliate marketing programs, which means we may earn commissions on purchases made through our links. This relationship does not influence our editorial content or product recommendations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you click on affiliate links and make a purchase, the merchant, not 10BestPick, is responsible for the transaction, product quality, shipping, returns, and customer service. We are not liable for any issues arising from purchases made through affiliate links.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Product Information and Reviews</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to provide accurate and up-to-date product information and reviews. However:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Product specifications, prices, and availability are subject to change without notice</li>
                  <li>We make no warranties or representations about the accuracy or completeness of the information</li>
                  <li>Reviews and recommendations are based on our research and opinions at the time of publication</li>
                  <li>Individual results may vary, and we cannot guarantee specific outcomes from using recommended products</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Disclaimer of Warranties</h2>
                <p className="text-gray-700 leading-relaxed">
                  THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS, AND SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE ARE PROVIDED BY 10BESTPICK ON AN "AS IS" AND "AS AVAILABLE" BASIS.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  10BESTPICK MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SITE OR THE INFORMATION, CONTENT, MATERIALS, PRODUCTS, OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  YOU EXPRESSLY AGREE THAT YOUR USE OF THE SITE IS AT YOUR SOLE RISK.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL 10BESTPICK, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">External Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Site may contain links to third-party websites or services that are not owned or controlled by 10BestPick. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless 10BestPick and its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Governing Law and Jurisdiction</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li>Email: contact@10bestpick.online</li>
                  <li>Website: 10bestpick.online</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
