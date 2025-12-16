import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';
import { Logo } from './Logo';

const navLinks: NavLink[] = [
  { label: 'Fitur', href: '#features' },
  { label: 'Cara Booking', href: '#how-it-works' },
  { label: 'Pelatih', href: '#coach' },
  { label: 'Sparring', href: '#community' },
  { label: 'Add-Ons', href: '#addons' },
  
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="block hover:opacity-90 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-text-secondary font-medium hover:text-primary transition-colors text-sm lg:text-base"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="sm" onClick={() => window.location.href = '#'}>
            Unduh Sekarang
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-text-main hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg font-medium text-text-main hover:text-primary py-2 block border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Unduh Sekarang
          </Button>
        </div>
      )}
    </header>
  );
};