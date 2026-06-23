import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, ChevronRight } from 'lucide-react';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-posts';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | 10BestPick`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

// Color scheme mapping for different categories
function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Travel': 'from-blue-600 to-cyan-500',
    'Fashion': 'from-rose-600 to-pink-500',
    'Beauty': 'from-amber-600 to-orange-500',
    'Home & Kitchen': 'from-emerald-600 to-green-500',
    'Electronics': 'from-violet-600 to-purple-500',
    'Health & Fitness': 'from-teal-600 to-emerald-500',
    'Office': 'from-slate-600 to-gray-500',
    'Health & Beauty': 'from-amber-600 to-rose-500',
    'Smart Home': 'from-indigo-600 to-blue-500',
    'Lifestyle': 'from-orange-600 to-red-500',
  };
  return colors[category] || 'from-blue-600 to-indigo-500';
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.content);
  const categoryGradient = getCategoryColor(post.category);
  const relatedPosts = getAllBlogPosts()
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgress />

      <main className="flex-1">
        <article>
          {/* Hero Header */}
          <div className={`relative bg-gradient-to-br ${categoryGradient} overflow-hidden`}>
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10 py-12 md:py-16">
              <div className="max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm mb-6 text-white/80">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="h-3 w-3" />
                  <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-white truncate max-w-[200px]">{post.title}</span>
                </nav>

                {/* Category badge */}
                <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-0 hover:bg-white/30">
                  {post.category}
                </Badge>

                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-6 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Clock className="h-4 w-4" />
                    {readingTime} min read
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <BookOpen className="h-4 w-4" />
                    {post.content.split(/\s+/).length.toLocaleString()} words
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom wave */}
            <div className="relative h-8 md:h-12">
              <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-full">
                <path d="M0 50V35C240 10 480 0 720 12C960 24 1200 8 1440 22V50H0Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* Content Section */}
          <div className="container px-4 md:px-6 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-8">
                {/* Main Content */}
                <div className="flex-1 max-w-3xl">
                  {/* Back button */}
                  <Button variant="ghost" asChild className="mb-8 -ml-3 text-gray-500 hover:text-gray-700">
                    <Link href="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to All Reviews
                    </Link>
                  </Button>

                  {/* Featured Image */}
                  <div className="aspect-[21/9] relative overflow-hidden rounded-2xl mb-10 shadow-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* CTA Boxes at top (before content) */}
                  <div className="space-y-6">

                {params.slug === '10-best-petal-and-pup-dresses-worth-buying-2026' && (
                  <div className="mb-8 p-8 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border-2 border-rose-200 shadow-lg">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Discover Your Perfect Dress
                      </h3>
                      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Browse the full Petal & Pup 2026 collection -- from wedding-guest stunners to everyday staples. Effortlessly chic style with "True to Fit" sizing you can trust.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <a
                          href="https://www.linkhaitao.com/index.php?mod=lhdeal&track=6074qmtPCxUblAbbPbvwRREN1_a4iWEO2qPMb_b5AxAcyqGEtLOuKsn3KjDVSh9G4Vw3vqovvMFrBzng_c_c&new=https%3A%2F%2Fpetalandpup.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Petal & Pup Official Website →
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600">
                        Free shipping on orders over $50 • Easy 30-day returns
                      </p>
                    </div>
                  </div>
                )}

                {params.slug === '10-best-cabinzero-travel-bags-worth-buying-2026' && (
                  <div className="mb-8 p-8 bg-gradient-to-r from-sky-50 to-teal-50 rounded-2xl border-2 border-sky-200 shadow-lg">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Ready for a Zero-Hassle Journey?
                      </h3>
                      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore the full CabinZero collection and discover travel bags engineered for every adventure. Lab-tested airline dimensions, 25-year warranty, and Okoban global tracking included.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <a
                          href="https://www.linkhaitao.com/index.php?mod=lhdeal&track=f9afUZoTEfCADc1TvlvxDGU0R_ao2qelWeEX34_a7wkMAy6_aGt_adxVUAS13rGnNewsW1fbf0I_c&new=https%3A%2F%2Fwww.cabinzero.com%2F"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit CabinZero Official Website →
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600">
                        Free global shipping available • 25-year warranty on every bag
                      </p>
                    </div>
                  </div>
                )}

                {params.slug === '10-best-vilebrequin-pieces-worth-buying-2026' && (
                  <div className="mb-8 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-200 shadow-lg">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Experience Saint-Tropez Elegance
                      </h3>
                      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore the full Vilebrequin 2026 collection — from iconic Moorea swim trunks to artisan-crafted linen shirts. Over 50 years of French Riviera luxury in every piece.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-800 hover:to-blue-800 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <a
                          href="https://www.vilebrequin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Vilebrequin Official Website →
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600">
                        Complimentary shipping on orders over $200 • Sustainable luxury since 1971
                      </p>
                    </div>
                  </div>
                )}

                {params.slug === '10-best-mammotion-robotic-mowers-worth-buying-2026' && (
                  <div className="mb-8 p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-200 shadow-lg">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Ready to Transform Your Lawn Care?
                      </h3>
                      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore the full Mammotion 2026 lineup -- from the flagship LUBA 3 AWD to the creative Lawn Printing 2.0. AI-driven precision, All-Wheel Drive performance, and wire-free setup for the ultimate smart yard.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <a
                          href="https://www.linkhaitao.com/index.php?mod=lhdeal&track=ff46968YaXGhJZw2_acXtKMC23LuU6jOzGs_bqXDI5IazwD0D_bD8Zhshk8hTQGl7Wu0NZZYUZDdwrnzg_c_c&new=https%3A%2F%2Fde.mammotion.com%2F"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Mammotion Official Website →
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600">
                        Free shipping available on select models • 2-year warranty included
                      </p>
                    </div>
                  </div>
                )}

                {params.slug === '10-best-cecred-hair-products' && (
                  <div className="mb-8 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 shadow-lg">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Ready to Transform Your Hair?
                      </h3>
                      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore the complete Cécred collection and discover products designed for your unique hair needs. Science-backed formulas meet traditional haircare wisdom.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <a
                          href="https://www.linkhaitao.com/index.php?mod=lhdeal&track=06f7vC3IudU8LfxaQlED74tpA31kiVuMT2a_apWLfak4XMp9mHC7BLD8LG4Pmq0UL0PrBwAo_c&new=https%3A%2F%2Fcecred.com%2F"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Cécred Official Website →
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600">
                        Free shipping on orders over $50 • 30-day satisfaction guarantee
                      </p>
                    </div>
                  </div>
                )}

                {params.slug === 'enterprise-rent-a-car-10-best-rental-cars-comfort-value' && (
                  <div className="mb-8 p-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl border-2 border-emerald-200 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-800">
                        <path d="M10 60 Q30 40 50 55 Q70 70 90 45" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <circle cx="30" cy="45" r="6" fill="currentColor"/>
                        <circle cx="55" cy="50" r="5" fill="currentColor"/>
                        <circle cx="75" cy="40" r="4" fill="currentColor"/>
                        <rect x="20" y="65" width="60" height="25" rx="3" fill="currentColor" opacity="0.5"/>
                        <circle cx="35" cy="77" r="5" fill="white" opacity="0.8"/>
                        <circle cx="65" cy="77" r="5" fill="white" opacity="0.8"/>
                      </svg>
                    </div>
                    <div className="text-center space-y-4 relative z-10">
                      <div className="inline-block mb-2">
                        <span className="text-5xl">🚗</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Find Your Perfect Rental Car with Enterprise
                      </h3>
                      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore the full Enterprise fleet and discover the ideal vehicle for your next trip. From fuel-efficient compacts to spacious SUVs and luxury sedans—with 7,600+ locations worldwide and award-winning customer service.
                      </p>
                      <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-2">
                        <span className="bg-white/70 px-3 py-1 rounded-full">✓ Free Pick-Up Service</span>
                        <span className="bg-white/70 px-3 py-1 rounded-full">✓ 7,600+ Locations Worldwide</span>
                        <span className="bg-white/70 px-3 py-1 rounded-full">✓ Clean, Inspected Vehicles</span>
                      </div>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full border-2 border-emerald-400/30"
                      >
                        <a
                          href="https://www.linkhaitao.com/index.php?mod=lhdeal&track=c2aaIGYx86Jc6hIPJ45wP_bE41O_bb9VNISWbm7mSA98Z7nTUpiUCXzw0TocQiSOwdbtRBcEf_aeMg_c&new=http%3A%2F%2Fwww.enterprise.com%2Fen%2Fhome.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🚗 Book with Enterprise Rent-A-Car →
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600 font-medium">
                        Join Enterprise Plus for free • Earn points on every rental • Best rates when you book early
                      </p>
                    </div>
                  </div>
                )}

                {params.slug === '10-best-alamo-rent-a-car-vehicles-budget-travelers-2026' && (
                  <div className="mb-8 p-8 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 rounded-2xl border-2 border-sky-300 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-sky-800">
                        <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.3"/>
                        <path d="M10 70 Q30 50 50 65 Q70 80 90 55" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <rect x="20" y="65" width="14" height="20" rx="2" fill="currentColor" opacity="0.6"/>
                        <rect x="66" y="55" width="14" height="30" rx="2" fill="currentColor" opacity="0.4"/>
                        <circle cx="27" cy="72" r="4" fill="white" opacity="0.5"/>
                        <circle cx="73" cy="62" r="4" fill="white" opacity="0.5"/>
                      </svg>
                    </div>
                    <div className="text-center space-y-4 relative z-10">
                      <div className="inline-block mb-2">
                        <span className="text-5xl">🚙</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Ready to Save on Your Next Road Trip?
                      </h3>
                      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore Alamo's full 2026 fleet and lock in the best rates for your next adventure. With fuel-efficient vehicles, Skip the Counter online check-in, and the free Alamo Insider program — your budget-friendly journey starts here.
                      </p>
                      <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-2">
                        <span className="bg-white/70 px-3 py-1 rounded-full">✓ Best Rate Guarantee</span>
                        <span className="bg-white/70 px-3 py-1 rounded-full">✓ Skip the Counter Check-In</span>
                        <span className="bg-white/70 px-3 py-1 rounded-full">✓ Free Alamo Insider Program</span>
                      </div>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full border-2 border-sky-400/30"
                      >
                        <a
                          href="https://www.linkhaitao.com/index.php?mod=lhdeal&track=6b14TXBVkKY6nQNPLPpWTEN1_a4iWEO2qPMb_b5AxAcyqGEtLOuKsn3KjDVSh9G4Vw3vqovvMFrBzng_c_c&new=https%3A%2F%2Fwww.alamo.com%2Fen%2Fhome.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🚙 Browse Alamo Rent A Car Deals →
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600 font-medium">
                        Join Alamo Insider for free • Earn points on every rental • Best rates when you book early online
                      </p>
                    </div>
                  </div>
                )}

                {params.slug === '10-best-ariat-cowboy-boots-2026' && (
                  <div className="mb-8 p-8 bg-gradient-to-r from-stone-50 via-amber-50 to-orange-50 rounded-2xl border-2 border-amber-300 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-amber-800">
                        <path d="M20 80 L50 20 L80 80 Z" fill="currentColor" />
                        <circle cx="35" cy="65" r="8" fill="currentColor" />
                        <circle cx="65" cy="65" r="8" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="text-center space-y-4 relative z-10">
                      <div className="inline-block mb-2">
                        <span className="text-4xl">🤠</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Find Your Perfect Pair of Ariat Boots
                      </h3>
                      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore the full Ariat 2026 collection — from the legendary Heritage Roughstock to the rugged WorkHog. Discover why Ariat has been the #1 Western footwear brand for over 30 years.
                      </p>
                      <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-2">
                        <span className="bg-white/60 px-3 py-1 rounded-full">✓ ATS Comfort Technology</span>
                        <span className="bg-white/60 px-3 py-1 rounded-full">✓ Premium Full-Grain Leather</span>
                        <span className="bg-white/60 px-3 py-1 rounded-full">✓ Free Shipping & Returns</span>
                      </div>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 hover:from-amber-800 hover:via-orange-700 hover:to-amber-800 text-white font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full border-2 border-amber-400/30"
                      >
                        <a
                          href="https://www.linkhaitao.com/index.php?mod=lhdeal&track=2c74Q0_bbnhhmZCadfPt5rgkgvEaSfG_bn1L2UFZQn6zgmrmGu8T2fke_bs1AhEsfirrapC2Q_c_c&new=https%3A%2F%2Fwww.ariat.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          🛍️ Shop Ariat Official Website →
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600 font-medium">
                        Free shipping & easy returns • Limited-time 2026 spring collection now available
                      </p>
                    </div>
                  </div>
                )}

                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none prose-headings:scroll-mt-20">
                    {post.content.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('## ')) {
                        const headingId = paragraph.replace('## ', '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                        return (
                          <h2 key={index} id={headingId} className="text-2xl font-bold mt-12 mb-5 pb-2 border-b-2 border-gray-100 flex items-center gap-3">
                            <span className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${categoryGradient}`} />
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      } else if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-gray-800">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      } else if (paragraph.startsWith('**') && paragraph.endsWith('**') && !paragraph.includes('\n')) {
                        return (
                          <p key={index} className="font-semibold text-gray-800 mb-4 text-lg">
                            {paragraph.replace(/\*\*/g, '')}
                          </p>
                        );
                      } else if (paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n');
                        return (
                          <ul key={index} className="space-y-2 my-4">
                            {items.map((item, itemIndex) => {
                              const text = item.replace('- ', '');
                              const parts = text.split(/(\*\*.*?\*\*)/g);
                              return (
                                <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-b ${categoryGradient}`} />
                                  <span>
                                    {parts.map((part, partIndex) => {
                                      if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={partIndex} className="text-gray-900 font-semibold">{part.slice(2, -2)}</strong>;
                                      }
                                      return part;
                                    })}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        );
                      } else if (/^\d+\./.test(paragraph)) {
                        const items = paragraph.split('\n');
                        return (
                          <ol key={index} className="space-y-2 my-4 list-none pl-0">
                            {items.map((item, itemIndex) => {
                              const text = item.replace(/^\d+\.\s/, '');
                              const parts = text.split(/(\*\*.*?\*\*)/g);
                              return (
                                <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                                  <span className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold bg-gradient-to-b ${categoryGradient}`}>
                                    {itemIndex + 1}
                                  </span>
                                  <span>
                                    {parts.map((part, partIndex) => {
                                      if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={partIndex} className="text-gray-900 font-semibold">{part.slice(2, -2)}</strong>;
                                      }
                                      return part;
                                    })}
                                  </span>
                                </li>
                              );
                            })}
                          </ol>
                        );
                      } else if (paragraph.startsWith('[') && paragraph.includes('](')) {
                        const linkMatch = paragraph.match(/\[([^\]]+)\]\(([^)]+)\)/);
                        if (linkMatch) {
                          const [, linkText, linkUrl] = linkMatch;
                          return (
                            <div key={index} className="my-6">
                              <Button asChild className={`bg-gradient-to-r ${categoryGradient} hover:opacity-90 shadow-lg`}>
                                <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                                  {linkText}
                                </a>
                              </Button>
                            </div>
                          );
                        }
                        return null;
                      } else {
                        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                        return (
                          <p key={index} className="text-gray-700 leading-relaxed mb-5 text-[1.05rem]">
                            {parts.map((part, partIndex) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={partIndex} className="text-gray-900 font-semibold">{part.slice(2, -2)}</strong>;
                              }
                              return part;
                            })}
                          </p>
                        );
                      }
                    })}
                  </div>

                  {/* Share & Disclosure */}
                  <div className="mt-16 space-y-6">
                    {/* Share section */}
                    <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Share2 className="h-5 w-5" />
                        <span className="font-semibold">Share this guide</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://10bestpick.online/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer">
                            𝕏 Share
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://10bestpick.online/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer">
                            📘 Share
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Affiliate Disclosure */}
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                      <div className="flex gap-3">
                        <span className="text-2xl">ℹ️</span>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 mb-1">Affiliate Disclosure</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            We may earn a commission when you click on links to products we recommend and make a purchase.
                            This comes at no additional cost to you. Our recommendations are based on thorough research and
                            genuine value to our readers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="hidden lg:block w-80 flex-shrink-0">
                  <div className="sticky top-24 space-y-6">
                    {/* Related posts */}
                    {relatedPosts.length > 0 && (
                      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <BookOpen className="h-4 w-4 text-blue-600" />
                          </span>
                          More in {post.category}
                        </h3>
                        <div className="space-y-4">
                          {relatedPosts.map((related, idx) => (
                            <Link
                              key={related.slug}
                              href={`/blog/${related.slug}`}
                              className="block group p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                              <div className="flex gap-3">
                                <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                                  <img
                                    src={related.image}
                                    alt={related.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                                    {related.title}
                                  </h4>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick stats card */}
                    <div className={`bg-gradient-to-br ${categoryGradient} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-white/50" />
                          About This Guide
                        </h3>
                        <ul className="space-y-3 text-sm text-white/90">
                          <li className="flex justify-between items-center py-1.5 border-b border-white/10">
                            <span>Category</span>
                            <span className="font-semibold bg-white/20 px-2 py-0.5 rounded-full text-xs">{post.category}</span>
                          </li>
                          <li className="flex justify-between items-center py-1.5 border-b border-white/10">
                            <span>Reading Time</span>
                            <span className="font-semibold">{readingTime} min</span>
                          </li>
                          <li className="flex justify-between items-center py-1.5 border-b border-white/10">
                            <span>Published</span>
                            <span className="font-semibold">
                              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                            </span>
                          </li>
                          <li className="flex justify-between items-center py-1.5">
                            <span>Word Count</span>
                            <span className="font-semibold">{post.content.split(/\s+/).length.toLocaleString()}</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Back to blog button */}
                    <Button variant="outline" asChild className="w-full rounded-xl hover:shadow-md transition-all duration-300 border-2">
                      <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to All Reviews
                      </Link>
                    </Button>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
