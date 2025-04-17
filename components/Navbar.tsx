'use client';

import { Category, Subcategory } from '@/utils/api';
import { ChevronDown, Menu, Navigation } from 'lucide-react';
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
import { ModeToggle } from './theme-toggle';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';

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
    <nav className="bg-primary-foreground shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-indigo-600"
              onClick={closeMobileMenu}
            >
              <Image
                src="/logo.png" // Replace with your logo path
                alt="Logo"
                width={150} // Adjust width as needed
                height={40} // Adjust height as needed
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-indigo-600"
              onClick={closeMobileMenu}
            >
              Home
            </Link>


            <NavigationMenu>
              <NavigationMenuList
                className='flex items-center space-x-4'
              >

                {categoriesWithSubs.map(category => (
                  <NavigationMenuItem
                    key={category.id}
                  >
                    <NavigationMenuTrigger>
                      <Button variant="ghost" className="hover:text-indigo-600">
                        {category.name}
                      </Button>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-48">
                      {category.subcategories.map(subcategory => (
                        <Link
                          key={subcategory.id}
                          href={`/category/${category.id}/${subcategory.id}`}
                          className="block py-1 hover:text-indigo-600"
                          onClick={closeMobileMenu}
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                ))}
                {categoriesWithoutSubs.map(category => (
                  <NavigationMenuItem
                    key={category.id}
                  >
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      className="hover:text-indigo-600"
                      onClick={closeMobileMenu}
                    >
                      {category.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/products"
              className="hover:text-indigo-600"
              onClick={closeMobileMenu}
            >
              All Products
            </Link>
            <Link
              href="/about"
              className="hover:text-indigo-600"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-indigo-600"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-x-3">
            <ModeToggle />
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