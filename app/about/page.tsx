import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Heart, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - 10BestPick',
  description: 'Learn about 10BestPick, your trusted source for expert product recommendations and reviews.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About 10BestPick
              </h1>
              <p className="text-xl text-gray-600">
                Your trusted partner in making informed purchasing decisions
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  At 10BestPick, we believe that shopping should be easy, informed, and enjoyable. Our mission is to simplify the decision-making process by providing comprehensive, unbiased reviews of the top 10 products in every category. We understand that with countless options available online, finding the right product can be overwhelming. That's why we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What We Do</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our team of experts meticulously researches and tests products across various categories, from home appliances and electronics to health and beauty products. We analyze customer reviews, compare features, evaluate quality, and consider price points to curate lists of the 10 best options in each category.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Each product recommendation is backed by thorough research and real-world testing. We don't just list products – we provide detailed insights into what makes each item stand out, helping you understand which product best fits your specific needs and budget.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <Target className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Our Goal</h3>
                    <p className="text-sm text-gray-600">
                      To be the most trusted source for product recommendations, helping millions make confident purchasing decisions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <Users className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Our Team</h3>
                    <p className="text-sm text-gray-600">
                      A diverse group of product experts, researchers, and writers dedicated to delivering quality content.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <Heart className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Our Values</h3>
                    <p className="text-sm text-gray-600">
                      Honesty, transparency, and independence guide everything we do. Your trust is our priority.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <Award className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Our Promise</h3>
                    <p className="text-sm text-gray-600">
                      Unbiased reviews based on real research, testing, and analysis – never influenced by advertisers.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Trust Us?</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Independent Reviews:</strong> We maintain editorial independence and are not influenced by manufacturers or sellers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Thorough Research:</strong> Every product is carefully researched and evaluated based on multiple criteria.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Regular Updates:</strong> We continuously update our lists to reflect new products and changing market conditions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>User-Focused:</strong> We consider real user feedback and experiences in our evaluations.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Affiliate Disclosure</h2>
                <p className="text-gray-600 leading-relaxed">
                  10BestPick participates in affiliate marketing programs, which means we may earn a commission when you click on links to products we recommend and make a purchase. This comes at no additional cost to you. These commissions help us maintain our website and continue providing free, quality content. However, our participation in affiliate programs does not influence our product recommendations – we only recommend products we believe offer genuine value to our readers.
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
