"use client";

import { useState } from 'react';
import { ShoppingCart, Calendar, MapPin, Phone, Mail, Menu, X, ArrowRight } from 'lucide-react';

// Mock data representing what would be fetched from the database for `params.tenantSlug`
const mockSiteData = {
  name: "My Demo Site",
  headline: "Welcome to our amazing store",
  description: "We offer the best products and services in town. Book a reservation or shop online today.",
  themeColor: "#2563eb",
  font: "Inter, sans-serif",
  products: [
    { id: 1, name: 'Premium SEO Audit', price: 299.99, image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80' },
    { id: 2, name: 'Consultation Hour', price: 150.00, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80' },
    { id: 3, name: 'Website Theme Pack', price: 49.99, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80' },
  ],
  contact: {
    email: "hello@mydemosite.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Avenue, Suite 100"
  }
};

export default function TenantSite({ params }: { params: { tenantSlug: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = mockSiteData; // In production: fetch from DB based on params.tenantSlug

  return (
    <div style={{ fontFamily: data.font }} className="flex flex-col min-h-screen text-gray-900">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold" style={{ color: data.themeColor }}>
              {data.name}
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-sm font-medium hover:text-gray-600 transition-colors">Home</a>
              <a href="#store" className="text-sm font-medium hover:text-gray-600 transition-colors">Store</a>
              <a href="#reservations" className="text-sm font-medium hover:text-gray-600 transition-colors">Reservations</a>
              <a href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors">Contact</a>
              
              <button 
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: data.themeColor }}
              >
                <ShoppingCart className="w-4 h-4" />
                Cart (0)
              </button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 bg-gray-50">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            {data.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#store"
              className="px-8 py-4 rounded-full text-white font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: data.themeColor }}
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#reservations"
              className="px-8 py-4 rounded-full bg-white text-gray-900 border-2 border-gray-200 font-semibold shadow-sm hover:border-gray-300 transition-all text-lg"
            >
              Book Reservation
            </a>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: data.themeColor }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.products.map(product => (
              <div key={product.id} className="group rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-2xl font-black mb-6" style={{ color: data.themeColor }}>${product.price.toFixed(2)}</p>
                  <button 
                    className="w-full py-3 rounded-xl font-medium border-2 transition-colors flex justify-center items-center gap-2"
                    style={{ borderColor: data.themeColor, color: data.themeColor }}
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <Calendar className="w-12 h-12 mx-auto mb-4" style={{ color: data.themeColor }} />
            <h2 className="text-4xl font-bold mb-4">Book a Session</h2>
            <p className="text-gray-600">Select a date and time to reserve your spot.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Reservation submitted!'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <input type="date" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:outline-none bg-white">
                  <option>10:00 AM</option>
                  <option>11:30 AM</option>
                  <option>2:00 PM</option>
                  <option>4:00 PM</option>
                </select>
              </div>
            </div>
            <button 
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: data.themeColor }}
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: data.themeColor }}>{data.name}</h3>
            <p className="text-gray-400 max-w-sm">{data.description}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center justify-center md:justify-start gap-3"><Mail className="w-5 h-5" /> {data.contact.email}</p>
              <p className="flex items-center justify-center md:justify-start gap-3"><Phone className="w-5 h-5" /> {data.contact.phone}</p>
              <p className="flex items-center justify-center md:justify-start gap-3"><MapPin className="w-5 h-5" /> {data.contact.address}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Powered By</h4>
            <div className="text-gray-400">
              <a href="/" className="hover:text-white transition-colors font-medium">Sowwan SaaS Platform</a>
              <p className="text-sm mt-2">Create your own website in minutes.</p>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
