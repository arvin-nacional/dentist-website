'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useCallback } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false)
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileMenuOpen])

  return (
    <header className="w-full relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-4 md:py-6 px-4 md:px-8 lg:px-12 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          <Logo loading="eager" priority="high" />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 whitespace-nowrap">Dental Website</h1>
        </Link>
        <HeaderNav 
          data={data} 
          mobileMenuOpen={mobileMenuOpen} 
          toggleMobileMenu={toggleMobileMenu} 
        />
      </div>
      
      {/* Overlay behind mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 md:hidden z-40" 
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
