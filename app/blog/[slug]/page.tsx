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
