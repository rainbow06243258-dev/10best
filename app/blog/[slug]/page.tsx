import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <article className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <div className="space-y-6">
                <div>
                  <Badge className="mb-4">{post.category}</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                    {post.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>

                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>

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

                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    } else if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <p key={index} className="font-semibold mb-4">
                          {paragraph.replace(/\*\*/g, '')}
                        </p>
                      );
                    } else if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n');
                      return (
                        <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                          {items.map((item, itemIndex) => {
                            const text = item.replace('- ', '');
                            const parts = text.split(/(\*\*.*?\*\*)/g);
                            return (
                              <li key={itemIndex} className="text-gray-700">
                                {parts.map((part, partIndex) => {
                                  if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
                                  }
                                  return part;
                                })}
                              </li>
                            );
                          })}
                        </ul>
                      );
                    } else if (/^\d+\./.test(paragraph)) {
                      const items = paragraph.split('\n');
                      return (
                        <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
                          {items.map((item, itemIndex) => {
                            const text = item.replace(/^\d+\.\s/, '');
                            const parts = text.split(/(\*\*.*?\*\*)/g);
                            return (
                              <li key={itemIndex} className="text-gray-700">
                                {parts.map((part, partIndex) => {
                                  if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
                                  }
                                  return part;
                                })}
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
                          <div key={index} className="mb-6">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700">
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
                        <p key={index} className="text-gray-700 leading-relaxed mb-4">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    }
                  })}
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Affiliate Disclosure</h3>
                  <p className="text-sm text-gray-600">
                    We may earn a commission when you click on links to products we recommend and make a purchase.
                    This comes at no additional cost to you. Our recommendations are based on thorough research and
                    genuine value to our readers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
