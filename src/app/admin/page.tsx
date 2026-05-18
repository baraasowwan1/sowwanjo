"use client";

import { useState } from 'react';
import { Search, MoreVertical, CheckCircle2, XCircle } from 'lucide-react';

const mockClients = [
  { id: '1', name: 'Acme Corp', email: 'admin@acme.com', site: 'acme.sowwanjo.online', status: 'ACTIVE', subPlan: 'Pro' },
  { id: '2', name: 'Global Tech', email: 'hello@global.tech', site: 'globaltech.sowwanjo.online', status: 'SUSPENDED', subPlan: 'Basic' },
  { id: '3', name: 'Local Cafe', email: 'info@localcafe.com', site: 'localcafe.sowwanjo.online', status: 'ACTIVE', subPlan: 'Premium' },
];

export default function AdminOverview() {
  const [clients, setClients] = useState(mockClients);

  const toggleStatus = (id: string) => {
    setClients(clients.map(c => {
      if (c.id === id) {
        return { ...c, status: c.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE' };
      }
      return c;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Client Management</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search clients..." 
            className="bg-zinc-950 border border-zinc-800 text-sm rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
          />
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/50">
              <th className="py-4 px-6 text-xs font-medium text-zinc-400 uppercase tracking-wider">Client / Email</th>
              <th className="py-4 px-6 text-xs font-medium text-zinc-400 uppercase tracking-wider">Website URL</th>
              <th className="py-4 px-6 text-xs font-medium text-zinc-400 uppercase tracking-wider">Plan</th>
              <th className="py-4 px-6 text-xs font-medium text-zinc-400 uppercase tracking-wider">Status</th>
              <th className="py-4 px-6 text-xs font-medium text-zinc-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-zinc-900/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-medium text-white">{client.name}</div>
                  <div className="text-sm text-zinc-500">{client.email}</div>
                </td>
                <td className="py-4 px-6 text-sm text-blue-400 hover:underline cursor-pointer">
                  {client.site}
                </td>
                <td className="py-4 px-6 text-sm text-zinc-300">
                  <span className="px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs">
                    {client.subPlan}
                  </span>
                </td>
                <td className="py-4 px-6">
                  {client.status === 'ACTIVE' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">
                      <XCircle className="w-3.5 h-3.5" />
                      Suspended
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-right">
                  <button 
                    onClick={() => toggleStatus(client.id)}
                    className="text-sm px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors mr-2"
                  >
                    {client.status === 'ACTIVE' ? 'Suspend' : 'Activate'}
                  </button>
                  <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
                    <MoreVertical className="w-5 h-5 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
