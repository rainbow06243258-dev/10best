import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, TrendingUp, Shield, Award, CheckCircle, Users, BookOpen, Sparkles, ChevronRight, Home as HomeIcon, Laptop, Dumbbell, Sparkle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const featuredPosts = [
  {
    title: '10 Best Coffee Makers for Home',
    description: 'Discover the top coffee makers that will transform your morning routine.',
    category: 'Home & Kitchen',
    slug: '10-best-coffee-makers-for-home',
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: '10 Best Wireless Headphones',
    description: 'Premium audio quality meets comfort in our top headphone picks.',
    category: 'Electronics',
    slug: '10-best-wireless-headphones',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: '10 Best Yoga Mats',
    description: 'Find the perfect yoga mat for your practice and fitness goals.',
    category: 'Health & Fitness',
    slug: '10-best-yoga-mats',
    image: 'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: '10 Best Air Purifiers',
    description: 'Breathe easier with our selection of top-rated air purifiers.',
    category: 'Home & Kitchen',
    slug: '10-best-air-purifiers',
    image: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: '10 Best Standing Desks',
    description: 'Boost your productivity and health with these ergonomic desks.',
    category: 'Office',
    slug: '10-best-standing-desks',
    image: 'https://images.pexels.com/photos/7516366/pexels-photo-7516366.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: '10 Best Skincare Products',
    description: 'Achieve radiant skin with our carefully selected skincare essentials.',
    category: 'Beauty',
    slug: '10-best-skincare-products',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const features = [
  {
    icon: Star,
    title: 'Expert Reviews',
    description: 'In-depth analysis of each product by industry experts.'
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven',
    description: 'Rankings based on real user reviews and performance metrics.'
  },
  {
    icon: Shield,
    title: 'Trusted Brands',
    description: 'Only recommend products from verified and reliable brands.'
  },
  {
    icon: Award,
    title: 'Best Value',
    description: 'Find the perfect balance between quality and price.'
  }
];

const categories = [
  {
    name: 'Home & Kitchen',
    icon: HomeIcon,
    count: 25,
    color: 'bg-orange-100 text-orange-600 hover:bg-orange-200'
  },
  {
    name: 'Electronics',
    icon: Laptop,
    count: 30,
    color: 'bg-blue-100 text-blue-600 hover:bg-blue-200'
  },
  {
    name: 'Health & Fitness',
    icon: Dumbbell,
    count: 20,
    color: 'bg-green-100 text-green-600 hover:bg-green-200'
  },
  {
    name: 'Beauty',
    icon: Sparkle,
    count: 18,
    color: 'bg-pink-100 text-pink-600 hover:bg-pink-200'
  }
];

const stats = [
  { label: 'Products Reviewed', value: '500+' },
  { label: 'Happy Readers', value: '50K+' },
  { label: 'Expert Reviews', value: '150+' }
];

const benefits = [
  'Save hours of research time',
  'Compare products side-by-side',
  'Read honest, unbiased reviews',
  'Find the best deals available'
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 opacity-20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Trusted by 50,000+ Smart Shoppers
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Discover the <span className="text-blue-600 relative">
                    10 Best
                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                      <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <br />Products in Every Category
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl leading-relaxed">
                  Expert-curated lists and honest reviews to help you make confident purchasing decisions. No more endless scrolling through reviews.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link href="/blog">
                    Explore Reviews <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 w-full max-w-2xl">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-2">Shop by Category</h2>
              <p className="text-gray-600">Find the best products in your favorite categories</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <Link key={index} href="/blog">
                  <Card className={`${category.color} border-0 cursor-pointer transition-all hover:scale-105 hover:shadow-lg`}>
                    <CardContent className="p-6 text-center">
                      <category.icon className="h-8 w-8 mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-80">{category.count} Reviews</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Why Choose 10BestPick?
              </h2>
              <p className="text-gray-600 max-w-[700px] mx-auto">
                We take the guesswork out of shopping by providing thoroughly researched product recommendations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-blue-600 hover:shadow-lg transition-all group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
                  Featured Product Lists
                </h2>
                <p className="text-gray-600">
                  Browse our most popular product reviews and find your next great purchase.
                </p>
              </div>
              <Button variant="ghost" asChild className="hidden md:flex">
                <Link href="/blog">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group border-2 hover:border-blue-200">
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-gray-900 hover:bg-white">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" asChild className="w-full group-hover:bg-blue-50 group-hover:text-blue-600">
                      <Link href={`/blog/${post.slug}`}>
                        Read Full Review <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/blog">View All 15 Reviews</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <CheckCircle className="inline h-4 w-4 mr-2" />
                  100% Free to Use
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Make Smarter Shopping Decisions
                </h2>
                <p className="text-gray-600 text-lg">
                  Stop wasting time reading hundreds of reviews. Our expert team does the research for you, comparing features, prices, and real user feedback.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" asChild>
                  <Link href="/blog">
                    Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
                      <div className="text-2xl font-bold text-blue-900 mb-1">150+</div>
                      <div className="text-sm text-blue-700">Expert Reviews</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200 mt-8">
                    <CardContent className="p-6">
                      <Users className="h-8 w-8 text-green-600 mb-3" />
                      <div className="text-2xl font-bold text-green-900 mb-1">50K+</div>
                      <div className="text-sm text-green-700">Happy Users</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-orange-50 border-orange-200 -mt-4">
                    <CardContent className="p-6">
                      <Star className="h-8 w-8 text-orange-600 mb-3" />
                      <div className="text-2xl font-bold text-orange-900 mb-1">4.9/5</div>
                      <div className="text-sm text-orange-700">Average Rating</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 border-purple-200 mt-4">
                    <CardContent className="p-6">
                      <Award className="h-8 w-8 text-purple-600 mb-3" />
                      <div className="text-2xl font-bold text-purple-900 mb-1">500+</div>
                      <div className="text-sm text-purple-700">Products Tested</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Perfect Product?
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl">
                Join thousands of satisfied shoppers who trust our recommendations. Start exploring our expert reviews today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl" asChild>
                  <Link href="/blog">
                    Browse All Reviews <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
