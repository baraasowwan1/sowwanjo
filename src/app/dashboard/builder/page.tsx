"use client";

import { useState } from 'react';
import { Save, Layout, Palette, Type, Image as ImageIcon, Settings } from 'lucide-react';

export default function SiteBuilder() {
  const [siteData, setSiteData] = useState({
    name: 'My Demo Site',
    headline: 'Welcome to our amazing store',
    themeColor: '#2563eb',
    font: 'Inter',
  });

  const handleSave = () => {
    alert("Site configuration saved! In a real app, this would update the database.");
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Site Builder</h1>
          <p className="text-sm text-gray-500">Customize the look and feel of your website.</p>
        </div>
        <button 
          onClick={handleSave}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
        {/* Editor Settings */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6 h-fit">
          
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
              <Settings className="w-5 h-5 text-gray-500" />
              General
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                <input 
                  type="text" 
                  value={siteData.name}
                  onChange={e => setSiteData({...siteData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Headline</label>
                <input 
                  type="text" 
                  value={siteData.headline}
                  onChange={e => setSiteData({...siteData, headline: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
              <Palette className="w-5 h-5 text-gray-500" />
              Theme & Colors
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                <div className="flex gap-2 items-center">
                  <input 
                    type="color" 
                    value={siteData.themeColor}
                    onChange={e => setSiteData({...siteData, themeColor: e.target.value})}
                    className="w-10 h-10 rounded border-0 cursor-pointer"
                  />
                  <span className="text-sm font-mono text-gray-500">{siteData.themeColor}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Typography</label>
                <select 
                  value={siteData.font}
                  onChange={e => setSiteData({...siteData, font: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="Inter">Inter (Modern)</option>
                  <option value="serif">Playfair Display (Elegant)</option>
                  <option value="mono">Space Mono (Tech)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="lg:col-span-2 bg-gray-200 rounded-xl border border-gray-300 shadow-inner flex flex-col overflow-hidden relative min-h-[600px]">
          <div className="bg-gray-800 text-gray-400 px-4 py-2 flex items-center gap-2 text-xs font-mono">
            <div className="flex gap-1.5 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span>preview.sowwanjo.online/sites/my-demo-site</span>
          </div>
          <div className="flex-1 bg-white overflow-y-auto">
            {/* The generated site preview */}
            <header className="px-8 py-4 border-b flex justify-between items-center" style={{fontFamily: siteData.font}}>
              <div className="text-xl font-bold" style={{color: siteData.themeColor}}>{siteData.name}</div>
              <nav className="flex gap-6 text-sm font-medium text-gray-600">
                <a href="#">Home</a>
                <a href="#">Store</a>
                <a href="#">Reservations</a>
              </nav>
            </header>
            <main>
              <section className="py-24 px-8 text-center bg-gray-50 border-b">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6" style={{fontFamily: siteData.font}}>
                  {siteData.headline}
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  This is a live preview of your generated site. Customize the settings on the left to see changes instantly.
                </p>
                <button 
                  className="px-8 py-3 rounded-full text-white font-medium shadow-lg"
                  style={{backgroundColor: siteData.themeColor}}
                >
                  Shop Now
                </button>
              </section>
              <section className="py-16 px-8">
                <h2 className="text-2xl font-bold mb-8" style={{fontFamily: siteData.font}}>Featured Products</h2>
                <div className="grid grid-cols-3 gap-6">
                  {[1,2,3].map(i => (
                    <div key={i} className="border rounded-xl p-4 shadow-sm">
                      <div className="bg-gray-100 aspect-square rounded-lg mb-4 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="font-semibold">Sample Product {i}</h3>
                      <p className="text-gray-500 text-sm mt-1" style={{color: siteData.themeColor}}>$29.99</p>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
