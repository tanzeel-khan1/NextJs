'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <aside className={`bg-gray-800 text-white p-4 space-y-4 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex justify-between items-center">
          {sidebarOpen && <h2 className="text-xl font-bold">Nextjs</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>

        <nav className="flex flex-col space-y-2 mt-4">
          <Link href="/" className="hover:bg-gray-700 px-2 py-1 rounded">
            {sidebarOpen && 'Home'}
          </Link>
          <Link href="/settings" className="hover:bg-gray-700 px-2 py-1 rounded">
            {sidebarOpen && 'Settings'}
          </Link>
          <Link href="/product" className="hover:bg-gray-700 px-2 py-1 rounded">
            {sidebarOpen && 'Product'}
          </Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
