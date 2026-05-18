"use client";
import { Award, Target, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Satisfied Clients'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years Experience'
  },
  {
    icon: Target,
    value: '1000+',
    label: 'Projects Completed'
  },
  {
    icon: Zap,
    value: '98%',
    label: 'Client Retention'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY2NDM1MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="SEO Analytics"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
              About Sowwan
            </div>
            
            <h2 className="text-gray-900">
              Your Trusted Partner in Digital Marketing Success
            </h2>
            
            <p className="text-gray-600 text-lg">
              Sowwan is a leading digital marketing agency specializing in SEO and SEM services. 
              We help businesses of all sizes achieve their online marketing goals through 
              data-driven strategies and innovative solutions.
            </p>

            <p className="text-gray-600">
              Our team of certified experts combines technical expertise with creative thinking 
              to deliver measurable results. Whether you're looking to improve your search rankings, 
              increase website traffic, or maximize your advertising ROI, we have the skills and 
              experience to make it happen.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

