'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { Menu, X, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappLink = generateWhatsAppLink({
    message: "Hi! I'd like to get a free quote for carpet cleaning.",
  });

  return (
    <header className="nav-blur sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/bellgamslogo.png"
              alt="Bellgams Cleaning Services"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
            <div>
              <h1 className="text-xl font-bold text-white">Bellgams</h1>
              <p className="text-xs text-gray-400">Cleaning Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm">
                Get Free Quote
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg glass-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'text-gray-300 hover:bg-white/5'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg glass-button"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{SITE_CONFIG.phoneDisplay}</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="primary" size="lg" className="w-full">
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
