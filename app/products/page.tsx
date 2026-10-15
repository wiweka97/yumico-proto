import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductsCatalogue } from '@/components/products-catalogue'
import { CustomPrint } from '@/components/custom-print'
import { primaryWhatsapp } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Products | Yumico Bali Food Packaging',
  description:
    'Browse Yumico\'s full range of food packaging in Bali: kraft & white paper, bagasse, corn starch, aluminium, bakery packaging, candles and hotel supplies.',
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">Product catalogue</p>
              <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Packaging for every menu, in stock in Bali.
              </h1>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
                Eleven categories, hundreds of sizes. Pick what you need and we&apos;ll quote you on WhatsApp,
                with delivery all over Bali.
              </p>
            </div>
            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:self-auto"
            >
              Get the full price list
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Padel F&B specialty link */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Link
            href="/padel-fb"
            className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7 p-8 md:p-12">
                <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground/70">
                  Specialty vertical
                </p>
                <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                  Packaging for the <em className="box-decoration-clone bg-[linear-gradient(to_top,var(--color-accent)_32%,transparent_32%)] px-1 italic text-primary">padel lifestyle.</em>
                </h2>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  Eco-friendly F&B packaging solutions for Bali&apos;s growing padel community. Custom cups, bowls, takeaway boxes & branded packaging for clubs, cafés and food businesses.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline group-hover:gap-3 transition-all">
                  Explore padel F&B packaging
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </div>
              </div>
              <div className="relative md:col-span-5">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <svg className="size-full text-primary/20" viewBox="0 0 400 300" fill="none" aria-hidden="true">
                    <circle cx="200" cy="150" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                    <path d="M200 70v160M120 150h160" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <ProductsCatalogue />
        <CustomPrint />
      </main>
      <SiteFooter />
    </>
  )
}