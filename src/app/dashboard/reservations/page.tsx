"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle, XCircle, Clock } from 'lucide-react';

const mockReservations = [
  { id: 'RES-001', customer: 'John Doe', email: 'john@example.com', date: 'Oct 24, 2026 - 10:00 AM', status: 'Pending' },
  { id: 'RES-002', customer: 'Sarah Smith', email: 'sarah@example.com', date: 'Oct 24, 2026 - 2:00 PM', status: 'Confirmed' },
  { id: 'RES-003', customer: 'Mike Johnson', email: 'mike@example.com', date: 'Oct 25, 2026 - 11:30 AM', status: 'Cancelled' },
];

export default function Reservations() {
  const [reservations, setReservations] = useState(mockReservations);

  const updateStatus = (id: string, status: string) => {
    setReservations(reservations.map(r => r.id === id ? { ...r, status } : r));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reservations</h1>
          <p className="text-sm text-gray-500">Manage booking requests from your customers.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-1 flex items-center text-sm">
          <button className="px-4 py-1.5 bg-blue-50 text-blue-600 font-medium rounded">Upcoming</button>
          <button className="px-4 py-1.5 text-gray-600 hover:bg-gray-50 font-medium rounded">Past</button>
          <button className="px-4 py-1.5 text-gray-600 hover:bg-gray-50 font-medium rounded">All</button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Customer</th>
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Date & Time</th>
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reservations.map((res) => (
              <tr key={res.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-medium text-gray-900">{res.customer}</div>
                  <div className="text-sm text-gray-500">{res.email}</div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                    {res.date}
                  </div>
                </td>
                <td className="py-4 px-6">
                  {res.status === 'Confirmed' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      <CheckCircle className="w-3.5 h-3.5" /> Confirmed
                    </span>
                  )}
                  {res.status === 'Pending' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                      <Clock className="w-3.5 h-3.5" /> Pending
                    </span>
                  )}
                  {res.status === 'Cancelled' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                      <XCircle className="w-3.5 h-3.5" /> Cancelled
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-right space-x-2">
                  {res.status === 'Pending' && (
                    <>
                      <button 
                        onClick={() => updateStatus(res.id, 'Confirmed')}
                        className="text-xs px-3 py-1.5 rounded bg-green-50 text-green-600 hover:bg-green-100 font-medium transition-colors"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => updateStatus(res.id, 'Cancelled')}
                        className="text-xs px-3 py-1.5 rounded bg-red-50 text-red-600 hover:bg-red-100 font-medium transition-colors"
                      >
                        Decline
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
