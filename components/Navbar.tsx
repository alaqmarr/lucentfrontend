'use client';

import { Category, Subcategory } from '@/utils/api';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';

type CategoryWithSubcategories = Category & {
  subcategories: Subcategory[];
};

export function Navbar({ categories }: { categories: CategoryWithSubcategories[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Separate categories with and without subcategories
  const categoriesWithSubs = categories.filter(cat => cat.subcategories.length > 0);
  const categoriesWithoutSubs = categories.filter(cat => cat.subcategories.length === 0);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-indigo-600"
              onClick={closeMobileMenu}
            >
              ACME
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            {/* Main categories without subcategories */}
            {categoriesWithoutSubs.map(category => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="text-gray-700 hover:text-indigo-600"
                onClick={closeMobileMenu}
              >
                {category.name}
              </Link>
            ))}

            {/* Categories with subcategories */}
            {categoriesWithSubs.map(category => (
              <DropdownMenu key={category.id}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-indigo-600">
                    {category.name} <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {category.subcategories.map(subcategory => (
                    <DropdownMenuItem key={subcategory.id} asChild>
                      <Link
                        href={`/category/${category.id}/${subcategory.id}`}
                        className="w-full"
                        onClick={closeMobileMenu}
                      >
                        {subcategory.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            <Link
              href="/products"
              className="text-gray-700 hover:text-indigo-600"
              onClick={closeMobileMenu}
            >
              All Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-indigo-600"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="px-4 py-2 space-y-2">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-indigo-600"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              {/* Mobile categories list */}
              {categories.map(category => (
                <div key={category.id}>
                  <Link
                    href={`/category/${category.id}`}
                    className="block py-1 text-gray-600 hover:text-indigo-600"
                    onClick={closeMobileMenu}
                  >
                    {category.name}
                  </Link>
                  {category.subcategories.length > 0 && (
                    <div className="pl-4 space-y-1">
                      {category.subcategories.map(subcategory => (
                        <Link
                          key={subcategory.id}
                          href={`/category/${category.id}/${subcategory.id}`}
                          className="block py-1 text-gray-500 hover:text-indigo-600"
                          onClick={closeMobileMenu}
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/products"
                className="block py-2 text-gray-700 hover:text-indigo-600"
                onClick={closeMobileMenu}
              >
                All Products
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-700 hover:text-indigo-600"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-indigo-600"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}