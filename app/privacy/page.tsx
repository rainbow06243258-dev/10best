import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - 10BestPick',
  description: 'Learn how 10BestPick collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Privacy Policy
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
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  At 10BestPick ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 10bestpick.online.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Information We Collect</h2>
                <h3 className="text-xl font-semibold mt-4">Personal Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you contact us through our contact form, we may collect personal information that you voluntarily provide, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Any other information you choose to provide in your message</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device identifiers</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use the information we collect in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To respond to your inquiries and communicate with you</li>
                  <li>To improve our website and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To prevent fraud and enhance security</li>
                  <li>To comply with legal obligations</li>
                  <li>To send you promotional materials (only if you opt-in)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve your experience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can control cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of our website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use third-party services for analytics, advertising, and affiliate marketing purposes, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Google Analytics for website analytics</li>
                  <li>Affiliate networks (Amazon Associates, etc.)</li>
                  <li>Social media platforms</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  These third parties may collect information about your online activities over time and across different websites. We encourage you to review their privacy policies.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Affiliate Links and Commissions</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website contains affiliate links to products and services. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. These affiliate programs may use cookies to track referrals. Please see our Affiliate Disclosure for more information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>The right to access your personal data</li>
                  <li>The right to correct inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to restrict processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise these rights, please contact us at contact@10bestpick.online.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our website, you consent to such transfers.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
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
