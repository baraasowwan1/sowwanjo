import Link from 'next/link';
import { Users, CreditCard, ShieldAlert, Settings } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-900 flex text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <span className="text-xl font-bold text-white tracking-wider">SUPER ADMIN</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-zinc-300 rounded-lg hover:bg-zinc-800 bg-zinc-800">
            <Users className="w-5 h-5" />
            Clients
          </Link>
          <Link href="/admin/billing" className="flex items-center gap-3 px-3 py-2 text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-zinc-300">
            <CreditCard className="w-5 h-5" />
            Billing
          </Link>
          <Link href="/admin/security" className="flex items-center gap-3 px-3 py-2 text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-zinc-300">
            <ShieldAlert className="w-5 h-5" />
            Security
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-zinc-300">
            <Settings className="w-5 h-5" />
            Platform Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300">&larr; Back to Main Site</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 bg-zinc-950 border-b border-zinc-800 md:hidden">
            <span className="text-xl font-bold text-white">SUPER ADMIN</span>
        </header>
        <div className="flex-1 overflow-y-auto p-6 bg-zinc-900">
          {children}
        </div>
      </main>
    </div>
  );
}
