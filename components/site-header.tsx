'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks, primaryWhatsapp } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" aria-label="Yumico home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const current = link.href === pathname
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? 'page' : undefined}
                    className={`text-sm font-medium transition-colors hover:text-foreground ${
                      current
                        ? 'text-primary underline decoration-accent decoration-2 underline-offset-8'
                        : 'text-foreground/75'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={primaryWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Order via WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={link.href === pathname ? 'page' : undefined}
                  className={`block py-3 text-base font-medium ${
                    link.href === pathname ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pb-2 pt-3">
              <a
                href={primaryWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                Order via WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
