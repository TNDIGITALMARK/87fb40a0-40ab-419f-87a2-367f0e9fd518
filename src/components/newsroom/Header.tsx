'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container-newsroom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              NEWSROOM
            </h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors border-b-2 border-primary pb-1"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sources
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Button
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
          >
            Sign In
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm font-medium text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sources
              </Link>
              <Link
                href="/settings"
                className="text-sm font-medium text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium w-full mt-2"
              >
                Sign In
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
