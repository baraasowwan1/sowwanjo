import { Activity, Globe, ShoppingCart, Users } from 'lucide-react';

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric Card 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm font-medium">Total Views</h3>
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-900">12,450</p>
          <p className="mt-1 text-sm text-green-500">+14% from last month</p>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm font-medium">Store Orders</h3>
            <ShoppingCart className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-900">84</p>
          <p className="mt-1 text-sm text-green-500">+5% from last month</p>
        </div>

        {/* Metric Card 3 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm font-medium">Reservations</h3>
            <Users className="w-5 h-5 text-orange-500" />
          </div>
          <p className="mt-4 text-3xl font-bold text-gray-900">23</p>
          <p className="mt-1 text-sm text-red-500">-2% from last month</p>
        </div>

        {/* Metric Card 4 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm font-medium">Site Status</h3>
            <Globe className="w-5 h-5 text-green-500" />
          </div>
          <p className="mt-4 text-xl font-bold text-green-600">Active</p>
          <a href="/sites/my-demo-site" target="_blank" className="mt-1 block text-sm text-blue-500 hover:underline">
            View Live Site &rarr;
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New Order #102{i}</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">$45.00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
