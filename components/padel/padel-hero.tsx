import Image from 'next/image'
import { ArrowRight, Truck, Zap, Shield, Leaf } from 'lucide-react'
import { primaryWhatsapp } from '@/lib/site'

export function PadelHero() {
  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* Full-width animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-accent/20 blur-3xl animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} aria-hidden="true" />

      {/* Padel court pattern overlay */}
      <div className="absolute inset-0 opacity-3" aria-hidden="true">
        <svg viewBox="0 0 400 400" className="size-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="padelGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
              <line x1="40" y1="0" x2="40" y2="80" stroke="currentColor" strokeWidth="1"/>
              <line x1="0" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="1"/>
              <circle cx="40" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#padelGrid)" />
        </svg>
      </div>

      {/* Centered content container */}
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-28 md:pt-20">
        <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-1">
              <Zap className="size-3.5 text-accent" aria-hidden="true" />
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            </span>
            Bali&apos;s dedicated padel F&B packaging partner
          </p>
          <h1 className="text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Packaging that matches the <em className="box-decoration-clone bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent px-1 italic">speed & style of padel.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            From court-side coffee to post-match meals — eco-friendly cups, bowls, takeaway boxes & custom-branded packaging built for Bali&apos;s padel clubs, cafés & venues.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Explore padel projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={primaryWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-accent bg-transparent px-6 py-3.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground"
            >
              <Zap className="size-4 mr-1" aria-hidden="true" />
              Get a quote on WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-2">
              <Shield className="size-4 text-accent" aria-hidden="true" />
              <span className="text-sm font-medium">30+ years expertise</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-2">
              <Leaf className="size-4 text-green-600" aria-hidden="true" />
              <span className="text-sm font-medium">Eco-first materials</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-2">
              <Truck className="size-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">Free Bali delivery</span>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          {/* Padel court visual */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-900/20 via-green-800/10 to-emerald-900/20 sm:aspect-[5/4] lg:aspect-[4/5] border border-green-500/20">
            {/* Court lines */}
            <div className="absolute inset-0" aria-hidden="true">
              <svg viewBox="0 0 400 500" className="size-full text-green-400/30" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="20" y="20" width="360" height="460" rx="20" strokeWidth="3"/>
                <line x1="200" y1="20" x2="200" y2="480" strokeDasharray="8 8"/>
                <rect x="80" y="100" width="240" height="120" rx="4"/>
                <rect x="80" y="380" width="240" height="120" rx="4"/>
                <circle cx="200" cy="250" r="40" fill="none"/>
                <line x1="80" y1="250" x2="320" y2="250" strokeDasharray="8 8"/>
              </svg>
            </div>
            <Image
              src="/images/hero.png"
              alt="Padel court with branded cups, bowls and takeaway packaging on café tables"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" aria-hidden="true" />
            
            <div className="absolute bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl border border-border bg-card/95 backdrop-blur p-4 shadow-xl shadow-foreground/10 sm:left-auto sm:right-6 sm:w-80 animate-slide-up">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Truck className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Free delivery island-wide</p>
                <p className="text-sm text-muted-foreground">Sanur, Canggu, Kuta, Nusa Dua & more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}