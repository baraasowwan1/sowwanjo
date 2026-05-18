import Link from 'next/link';
import { Settings, ShoppingCart, Calendar, LayoutTemplate, Activity } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold text-blue-600">Sowwan Client</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 bg-gray-100">
            <Activity className="w-5 h-5" />
            Overview
          </Link>
          <Link href="/dashboard/builder" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <LayoutTemplate className="w-5 h-5" />
            Site Builder
          </Link>
          <Link href="/dashboard/store" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <ShoppingCart className="w-5 h-5" />
            Store Manager
          </Link>
          <Link href="/dashboard/reservations" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <Calendar className="w-5 h-5" />
            Reservations
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">&larr; Back to Main Site</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-gray-200 md:hidden">
            <span className="text-xl font-bold text-blue-600">Sowwan Client</span>
        </header>
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
