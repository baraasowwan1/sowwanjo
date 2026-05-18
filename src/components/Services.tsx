"use client";
import { Search, Target, TrendingUp, ChartBar, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your organic search rankings and drive qualified traffic to your website with our comprehensive SEO strategies.',
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building']
  },
  {
    icon: Target,
    title: 'Search Engine Marketing (SEM)',
    description: 'Maximize your ROI with targeted paid advertising campaigns across Google Ads and other search platforms.',
    features: ['PPC Campaigns', 'Ad Copywriting', 'Bid Management', 'Conversion Tracking']
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Get detailed insights into your marketing performance with comprehensive analytics and custom reporting.',
    features: ['Google Analytics', 'Performance Metrics', 'Custom Reports', 'ROI Analysis']
  },
  {
    icon: ChartBar,
    title: 'Content Marketing',
    description: 'Engage your audience with high-quality, SEO-optimized content that drives results and builds brand authority.',
    features: ['Content Strategy', 'Blog Posts', 'SEO Copywriting', 'Content Calendar']
  },
  {
    icon: Zap,
    title: 'Conversion Optimization',
    description: 'Turn more visitors into customers with data-driven conversion rate optimization strategies.',
    features: ['A/B Testing', 'Landing Pages', 'User Experience', 'Heat Mapping']
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    description: 'Expand your reach and engage with your audience across all major social media platforms.',
    features: ['Strategy Development', 'Content Creation', 'Community Management', 'Paid Social']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-gray-900 mb-4">
            Comprehensive Digital Marketing Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a full suite of digital marketing services designed to help your business 
            thrive in the competitive online landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

