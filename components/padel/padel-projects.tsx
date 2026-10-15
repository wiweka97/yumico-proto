import Image from 'next/image'
import { ArrowUpRight, Package, Coffee, Stamp, MapPin, CheckCircle2 } from 'lucide-react'
import { primaryWhatsapp } from '@/lib/site'

const projects = [
  {
    slug: 'fuelo-at-fifteen-padel',
    name: 'Fuelo at Fifteen Padel',
    location: 'Canggu',
    courts: 8,
    image: '/images/hero.png',
    packaging: 'Custom-printed eco-friendly paper & plastic cups, and cup holders for daily takeaway service.',
    application: 'Designed for hot and cold beverages, counter service, and secure customer takeaway orders.',
    branding: 'Fuelo-branded packaging featuring signature logo, colors, and social media handles.',
    products: ['Double-wall paper cups', 'Clear PET cups', 'Cup holders', 'Bagasse lids'],
  },
  {
    slug: 'bali-social-club',
    name: 'Bali Social Club',
    location: 'Sanur',
    courts: 6,
    image: '/images/hero.png',
    packaging: 'Premium white kraft paper bags designed for effortless, eco-friendly takeout after every match.',
    application: 'Built for post-match energy bites, healthy meals, and refreshing club-house drinks.',
    branding: 'Crisp custom logo printing on white kraft—where sport meets modern island lifestyle.',
    products: ['White kraft bags', 'Custom-printed cups', 'Bowl containers', 'Cutlery kits'],
  },
  {
    slug: 'meet-me-cafe-at-pro-padel',
    name: 'Meet Me Cafe at Pro Padel',
    location: 'Denpasar',
    courts: 10,
    image: '/images/hero.png',
    packaging: 'Custom-printed PET clear plastic cups, eco-friendly KCL paper cups, and bagasse lids for daily beverage service.',
    application: 'Designed for serving cold iced drinks, juices, and hot specialty coffee at the cafe counter.',
    branding: 'Custom-branded packaging featuring Meet Me Cafe\'s signature logo and visual identity.',
    products: ['PET clear cups', 'KCL paper cups', 'Bagasse lids', 'Cup sleeves'],
  },
  {
    slug: 'nusa-padel',
    name: 'Nusa Padel',
    location: 'Nusa Dua',
    courts: 4,
    image: '/images/hero.png',
    packaging: 'Custom-printed paper cups, clear plastic cups, food bowls, and secure takeaway meal boxes.',
    application: 'Designed for serving hot specialty coffee, cold beverages, healthy bowls, and complete takeaway food orders at the venue.',
    branding: 'Custom-branded packaging featuring signature logos, brand colors, and visual identity.',
    products: ['Paper cups', 'Clear cups', 'Food bowls', 'Meal boxes'],
  },
  {
    slug: 'nusa-padel-by-the-beach',
    name: 'Nusa Padel by the Beach',
    location: 'Nusa Dua Beach',
    courts: 3,
    image: '/images/hero.png',
    packaging: 'Premium plastic cups, paper cups, and sturdy brown kraft bowls crafted to keep beachside treats fresh and eco-friendly.',
    application: 'Engineered for chilled beverages, hot drinks, and healthy meals under the sun.',
    branding: 'Distinct custom logo placement across all packaging formats for instant brand recognition.',
    products: ['Premium plastic cups', 'Paper cups', 'Kraft bowls', 'Ice cream cups'],
  },
]

const detailIcons = {
  packaging: Package,
  application: Coffee,
  branding: Stamp,
}

function enquiryHref(projectName: string) {
  const text = encodeURIComponent(`Hi Yumico, I'd like a quote for ${projectName} padel F&B packaging.`)
  return `${primaryWhatsapp}?text=${text}`
}

export function PadelProjects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/2 via-transparent to-primary/2 opacity-20" aria-hidden="true" />
      
      <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Padel venues we power
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Trusted by Bali&apos;s <span className="text-accent">padel F&B.</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            5 venues, 31 courts, thousands of serves — packaging that keeps up with every match.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            <span>5 locations across Bali</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-green-500" aria-hidden="true" />
            <span>31 total courts</span>
          </div>
        </div>
      </div>

      <ul className="mt-12 relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="relative group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10">
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <Image
                src={project.image}
                alt={`${project.name} padel venue packaging`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent" aria-hidden="true" />
              
              {/* Badges */}
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Case Study
                </span>
                <span className="rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-white flex items-center gap-1">
                  <MapPin className="size-3" aria-hidden="true" />
                  {project.location}
                </span>
                <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground flex items-center gap-1">
                  <CheckCircle2 className="size-3" aria-hidden="true" />
                  {project.courts} courts
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Project Portfolio
              </p>
              <h3 className="mt-2 font-serif text-2xl font-medium">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Packaging solutions supplied for the F&B operation at this padel venue.
              </p>

              {/* Product tags */}
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Products supplied">
                {project.products.map((product) => (
                  <span key={product} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground group-hover:border-accent/50 group-hover:text-accent transition-colors">
                    {product}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  { key: 'packaging', label: 'PACKAGING', content: project.packaging, icon: Package },
                  { key: 'application', label: 'APPLICATION', content: project.application, icon: Coffee },
                  { key: 'branding', label: 'BRANDING', content: project.branding, icon: Stamp },
                ].map((detail) => (
                  <div key={detail.key} className="rounded-xl bg-muted/50 p-4 border border-border/50 group-hover:border-accent/20 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      <detail.icon className="size-4 text-accent" aria-hidden="true" />
                      {detail.label}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{detail.content}</p>
                  </div>
                ))}
              </div>

              <a
                href={enquiryHref(project.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 self-start pt-4 text-sm font-semibold text-primary underline-offset-4 hover:underline group-hover:gap-3 transition-all"
              >
                Get a quote for this venue
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only">for {project.name}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 relative text-center text-sm text-muted-foreground">
        <span className="relative z-10 bg-background px-4">Explore our featured partnerships — see how we support their daily operations</span>
        <span className="absolute left-0 right-0 top-1/2 border-t border-border -z-10" aria-hidden="true" />
      </p>
    </section>
  )
}