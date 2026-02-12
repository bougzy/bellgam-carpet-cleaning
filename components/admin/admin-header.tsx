'use client';

import { useRouter } from 'next/navigation';
import { clearSessionCookie } from '@/lib/auth-simple';
import { Button } from '@/components/ui/button';
import { Bell, LogOut, User } from 'lucide-react';

export function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    clearSessionCookie();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <header className="glass-card border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Welcome back, Admin
          </h2>
          <p className="text-sm text-gray-400">
            Manage your carpet cleaning website
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg glass-button hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3 px-4 py-2 rounded-lg glass-card">
            <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
              <User className="w-4 h-4 text-primary-400" />
            </div>
            <span className="text-sm font-medium">Admin</span>
          </div>

          {/* Logout Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="hidden sm:flex"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
