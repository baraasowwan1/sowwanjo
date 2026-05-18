"use client";
import { ChevronRight, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
              Sowwan SaaS Website Builder
            </div>
            
            <h1 className="text-gray-900 text-5xl font-extrabold tracking-tight">
              Create Your Dream Website In Minutes
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              At Sowwan, we provide a ready-made platform to easily and smoothly build a stunning website.
              Sell products online, manage reservations, and grow your business with our all-in-one SaaS solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" passHref>
                <Button size="lg" className="w-full sm:w-auto text-lg py-6 px-8 rounded-xl shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                  Start Building Free
                  <Globe className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg py-6 px-8 rounded-xl" onClick={scrollToServices}>
                View Features
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
              <div>
                <div className="text-gray-900 font-bold text-2xl">500+</div>
                <div className="text-gray-500 text-sm">Active Sites</div>
              </div>
              <div>
                <div className="text-gray-900 font-bold text-2xl">98%</div>
                <div className="text-gray-500 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-gray-900 font-bold text-2xl">24/7</div>
                <div className="text-gray-500 text-sm">Support</div>
              </div>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl shadow-2xl bg-white p-2 transform transition-transform duration-500 hover:scale-[1.02]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Website Builder Dashboard"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
