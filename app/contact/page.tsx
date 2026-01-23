'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <Mail className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>
                      Send us an email anytime
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">contact@10bestpick.online</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>General Inquiries</CardTitle>
                    <CardDescription>
                      Questions about our reviews
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">We respond within 24-48 hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Send className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Partnerships</CardTitle>
                    <CardDescription>
                      Interested in collaborating?
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">partnerships@10bestpick.online</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-12 text-center space-y-4">
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                <div className="max-w-2xl mx-auto space-y-4 text-left">
                  <div className="space-y-2">
                    <h3 className="font-semibold">How do you choose products to review?</h3>
                    <p className="text-sm text-gray-600">
                      We select products based on popularity, customer reviews, expert recommendations, and market trends. Our goal is to cover products that are most relevant to our readers.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Can I suggest a product for review?</h3>
                    <p className="text-sm text-gray-600">
                      Absolutely! We welcome product suggestions from our community. Please use the contact form above to submit your recommendations.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Do you accept guest posts?</h3>
                    <p className="text-sm text-gray-600">
                      We occasionally accept high-quality guest posts. Please email us with your proposal and writing samples.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
