import Image from 'next/image'
import { ArrowRight, Truck } from 'lucide-react'
import { primaryWhatsapp } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Bali&apos;s packaging partner since 1996
          </p>
          <h1 className="text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Packaging that makes good food look <em className="box-decoration-clone bg-[linear-gradient(to_top,var(--color-accent)_32%,transparent_32%)] px-1 italic text-primary">even better.</em>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Eco-friendly food containers, custom-printed packaging and hotel supplies for cafés,
            restaurants, bakeries and resorts all over Bali — at fair prices, delivered free.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse products
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Request a quote
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Experience</dt>
              <dd className="mt-1 font-serif text-3xl font-medium">30 yrs</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Categories</dt>
              <dd className="mt-1 font-serif text-3xl font-medium">12+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Delivery</dt>
              <dd className="mt-1 font-serif text-3xl font-medium">Free</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero.png"
              alt="Kraft paper bowls, bagasse boxes and paper coffee cups arranged in Balinese sunlight"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-lg shadow-foreground/5 sm:left-auto sm:right-6 sm:w-80">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <Truck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold">Free delivery island-wide</p>
              <p className="text-sm text-muted-foreground">Sanur, Canggu, Kuta, Nusa Dua & more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
