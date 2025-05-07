'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, Menu } from 'lucide-react'

export const HeaderNav: React.FC<{ 
  data: HeaderType,
  mobileMenuOpen: boolean,
  toggleMobileMenu: () => void 
}> = ({ data, mobileMenuOpen, toggleMobileMenu }) => {
  const navItems = data?.navItems || []

  return (
    <>
      {/* Mobile menu button - only shown on small screens */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden flex items-center text-gray-700"
        aria-label="Toggle navigation menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Desktop navigation - hidden on small screens */}
      <nav className="hidden md:flex gap-6 items-center">
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="link" className="font-medium" />
        })}
        <Link href="/search" className="hover:text-primary transition-colors">
          <span className="sr-only">Search</span>
          <SearchIcon className="w-5 text-primary" />
        </Link>
      </nav>

      {/* Mobile Navigation Menu - shown when toggled on small screens */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            {navItems.map(({ link }, i) => {
              return (
                <div key={i} onClick={toggleMobileMenu} className="w-full">
                  <CMSLink 
                    {...link} 
                    appearance="link" 
                    className="font-medium py-2 block w-full text-gray-800 hover:text-primary" 
                  />
                </div>
              )
            })}
            <Link 
              href="/search" 
              className="flex items-center gap-2 py-2 font-medium text-gray-800 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              <SearchIcon className="w-5" />
              <span>Search</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
