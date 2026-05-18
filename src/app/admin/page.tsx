"use client";

import { useState, useEffect } from 'react';
import { Users, Search, Activity, ShieldCheck, CreditCard, Ban } from 'lucide-react';
import { getAdminData, toggleSiteStatus } from '@/app/actions/admin';

export default function AdminOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sites, setSites] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setIsLoading(true);
    const data = await getAdminData();
    setSites(data);
    setIsLoading(false);
  }

  const handleToggleStatus = async (siteId: string, currentStatus: string) => {
    await toggleSiteStatus(siteId, currentStatus);
    await loadData();
  };

  const filteredSites = sites.filter(site => 
    site.user?.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.siteName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-8 pt-24 min-h-screen bg-[#0A0A0A] text-white">
      <div className="flex justify-between items-center bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Platform Overview</h1>
          <p className="text-gray-400">Manage all tenant sites and subscriptions.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-4 border border-gray-700">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg"><Users className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-gray-400">Total Sites</p>
              <p className="text-2xl font-bold text-white">{sites.length}</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-4 border border-gray-700">
            <div className="p-3 bg-green-500/20 text-green-400 rounded-lg"><Activity className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-gray-400">Active</p>
              <p className="text-2xl font-bold text-white">{sites.filter(s => s.status === 'ACTIVE').length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Client Websites</h2>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Client / Email</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Site URL</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Expires At</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {isLoading ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-500">Loading database...</td></tr>
              ) : filteredSites.length === 0 ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-500">No sites found.</td></tr>
              ) : filteredSites.map((site) => (
                <tr key={site.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                        {site.user?.email?.charAt(0).toUpperCase() || '?'}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{site.siteName}</div>
                        <div className="text-sm text-gray-400">{site.user?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href={`/sites/${site.slug}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                      /{site.slug}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">
                      {site.expiresAt ? new Date(site.expiresAt).toLocaleDateString() : 'Lifetime'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${
                      site.status === 'ACTIVE' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {site.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => handleToggleStatus(site.id, site.status)}
                      className={`text-${site.status === 'ACTIVE' ? 'red' : 'green'}-400 hover:text-${site.status === 'ACTIVE' ? 'red' : 'green'}-300 transition-colors font-medium flex items-center justify-end gap-1 w-full`}
                    >
                      {site.status === 'ACTIVE' ? <><Ban className="w-4 h-4" /> Suspend Site</> : <><ShieldCheck className="w-4 h-4" /> Activate Site</>}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
