import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Carpet Steam Cleaning', href: '/services/carpet-steam-cleaning' },
    { name: 'Upholstery Cleaning', href: '/services/upholstery-cleaning' },
    { name: 'Area Rug Cleaning', href: '/services/area-rug-cleaning' },
    { name: 'Pet Odor Removal', href: '/services/pet-odor-removal' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Reviews', href: '/reviews' },
  ],
  locations: [
    { name: 'Vancouver', href: '/locations/vancouver-carpet-cleaning' },
    { name: 'Burnaby', href: '/locations/burnaby-carpet-cleaning' },
    { name: 'Surrey', href: '/locations/surrey-carpet-cleaning' },
    { name: 'All Locations', href: '/locations' },
  ],
};

export function Footer() {
  return (
    <footer className="footer-blur mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/bellgamslogo.png"
                alt="Bellgams Cleaning Services"
                width={180}
                height={70}
                className="h-14 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Bellgams</h3>
                <p className="text-xs text-gray-400">Cleaning Services</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Professional carpet cleaning services in British Columbia. Expert steam cleaning,
              pet stain removal, and upholstery cleaning.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.province}, {SITE_CONFIG.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-button hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-button hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-button hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-button hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
