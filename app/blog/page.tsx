import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, TrendingUp, Clock, Star, ChevronRight, Sparkles } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog - Product Reviews and Guides | 10BestPick',
  description: 'Read our comprehensive reviews and guides to find the best products across all categories. Expert recommendations for informed shopping decisions.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = Array.from(new Set(posts.map(p => p.category)));
  const latestPost = posts[0]; // Most recent post for featured section

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAgMS4xLS45IDItMiAyaC0yYy0xLjEgMC0yLS45LTItMlYxNmMwLTEuMS45LTIgMi0yaDJjMS4xIDAgMiAuOSAyIDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-violet-500/5 animate-pulse" style={{ animationDuration: '8s' }} />
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/5 via-transparent to-cyan-400/5 rounded-full blur-3xl" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Category pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {categories.slice(0, 8).map((cat, i) => (
                  <span
                    key={cat}
                    className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Expert{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '6s' }}>
                  Reviews
                </span>{' '}
                &amp; Buying Guides
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Unbiased, research-backed recommendations to help you find the perfect products. We test, compare, and rank so you can buy with confidence.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-8 pt-6">
                <div className="text-center group cursor-default">
                  <div className="text-4xl font-extrabold text-white group-hover:scale-110 transition-transform duration-300">{posts.length}+</div>
                  <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">Expert Guides</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-4xl font-extrabold text-white group-hover:scale-110 transition-transform duration-300">{categories.length}+</div>
                  <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">Categories</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-4xl font-extrabold text-white group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">Products Reviewed</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-4xl font-extrabold text-white group-hover:scale-110 transition-transform duration-300">50K+</div>
                  <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">Monthly Readers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 100V50C240 0 480 0 720 20C960 40 1200 10 1440 40V100H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Featured Post */}
        {latestPost && (
          <section className="w-full py-10 -mt-1 bg-white relative">
            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full opacity-60" />
            <div className="container px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                    <span className="absolute inset-0 bg-amber-400 rounded-full blur-md opacity-40 animate-pulse" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Latest Review</span>
                  <span className="relative inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white animate-pulse">
                    NEW
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 blur-sm opacity-50 -z-10" />
                  </span>
                </div>
                <Link href={`/blog/${latestPost.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border border-gray-100 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                    {/* Glow ring on hover */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400/0 via-indigo-400/0 to-violet-400/0 group-hover:from-blue-400/20 group-hover:via-indigo-400/20 group-hover:to-violet-400/20 blur-xl transition-all duration-700 -z-10" />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="aspect-video md:aspect-auto relative overflow-hidden">
                        <img
                          src={latestPost.image}
                          alt={latestPost.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Enhanced overlay with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent md:bg-gradient-to-r md:from-black/20 md:via-transparent md:to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <Badge className="w-fit mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-blue-500/25">{latestPost.category}</Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-3">
                          {latestPost.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{latestPost.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {new Date(latestPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1 text-amber-600">
                            <TrendingUp className="h-4 w-4" />
                            Trending
                          </span>
                        </div>
                        <Button variant="default" className="w-fit bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300">
                          Read Full Review <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="w-full py-12 md:py-20 bg-white relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-violet-100/30 via-blue-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 px-5 py-2 rounded-full text-sm font-semibold text-indigo-600 mb-5 border border-indigo-100 shadow-sm">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  Expert-Curated Content
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-4 tracking-tight">
                  All{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Reviews
                  </span>{' '}
                  & Guides
                </h2>
                <div className="flex items-center justify-center gap-2 mb-5">
                  <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                  <div className="h-1.5 w-4 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
                  <div className="h-1.5 w-2 rounded-full bg-gradient-to-r from-violet-300 to-purple-300" />
                </div>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  Browse our complete collection of expert reviews across every category
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <Card
                    key={post.slug}
                    className="group overflow-hidden border-gray-100 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col bg-white rounded-xl relative"
                  >
                    {/* Subtle gradient top border on hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10 pointer-events-none" />
                    {/* Glow ring on hover */}
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400/0 via-indigo-400/0 to-violet-400/0 group-hover:from-blue-400/10 group-hover:via-indigo-400/10 group-hover:to-violet-400/10 blur-lg transition-all duration-700 -z-10" />
                    <Link href={`/blog/${post.slug}`} className="block">
                      {/* Image with overlay */}
                      <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                          loading={index > 5 ? 'lazy' : 'eager'}
                        />
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Category badge on image */}
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white shadow-md border-0 font-semibold text-xs">
                            {post.category}
                          </Badge>
                        </div>

                        {/* Read more overlay */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span className="inline-flex items-center gap-1 text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-xl">
                            Read Review <ChevronRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </Link>

                    <CardHeader className="flex-1 px-5 pt-5 pb-2">
                      <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`} className="hover:underline decoration-blue-300 underline-offset-2 decoration-2">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-sm leading-relaxed mt-2 text-gray-500">
                        {post.description}
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="px-5 pb-5 pt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-sm font-semibold group/btn transition-all duration-200"
                      >
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-100/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-tr from-violet-100/30 to-transparent rounded-full blur-3xl" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none" />

          {/* Top wave */}
          <div className="absolute top-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 60V40C240 10 480 5 720 20C960 35 1200 10 1440 30V60H0Z" fill="white" />
            </svg>
          </div>

          <div className="container px-4 md:px-6 relative z-10 mt-8">
            <div className="max-w-3xl mx-auto text-center space-y-7">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm border border-blue-200">
                <Star className="h-4 w-4 fill-blue-700" />
                Expert-Curated Recommendations
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl tracking-tight">
                Make Smarter{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Shopping
                </span>{' '}
                Decisions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Every review is thoroughly researched and regularly updated. We earn commissions on qualifying purchases — at no extra cost to you — which helps us keep producing quality content.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 pt-2">
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 font-medium">✓ Honest Reviews</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 font-medium">✓ No Sponsored Placements</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 font-medium">✓ Updated Regularly</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 font-medium">✓ Expert-Verified</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
