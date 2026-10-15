import { CupSoda, Utensils, ShoppingBag, Stamp, Zap, Coffee, Leaf, Box } from 'lucide-react'

const needsCategories = [
  {
    icon: CupSoda,
    accentIcon: Zap,
    title: 'Court-side Drinks',
    tag: 'High velocity',
    items: [
      'Double-wall paper cups (hot)',
      'Clear PET cups (cold/iced)',
      'Bagasse & PLA lids',
      'Paper & wheat straws',
      'Cup sleeves & carriers',
    ],
    description: 'Morning espresso rush → mid-match electrolytes → sunset spritz. Cups that hold temp, show your logo, and survive condensation.',
  },
  {
    icon: Utensils,
    accentIcon: Coffee,
    title: 'Post-Match Fuel',
    tag: 'Leak-proof',
    items: [
      'Bagasse bowls (hot/cold)',
      'Kraft salad boxes',
      'Compartment meal trays',
      'Sauce & dressing pots',
      'Wooden & corn-starch cutlery',
    ],
    description: 'Protein bowls, acai, nasi campur, pasta — containers that stack in fridge, survive transport, and compost after.',
  },
  {
    icon: ShoppingBag,
    accentIcon: Box,
    title: 'Grab & Go Takeaway',
    tag: 'Tournament ready',
    items: [
      'White & kraft paper bags',
      '2/4-cup drink carriers',
      'Cutlery & napkin kits',
      'Clamshell burger boxes',
      'Pastry & cake boxes',
    ],
    description: 'Spectator bundles, player meal packs, pre-order pickup — sturdy bags & carriers branded for walk-by visibility.',
  },
  {
    icon: Stamp,
    accentIcon: Leaf,
    title: 'Custom Branding',
    tag: 'Full color',
    items: [
      'Logo cups (paper & PET)',
      'Branded bowls & boxes',
      'Custom bag printing',
      'QR code & social handles',
      'Pantone-matched colors',
    ],
    description: 'Every serve = brand impression. Low MOQ custom runs. Design support included. Turn packaging into your court-side billboard.',
  },
]

export function PadelFbNeeds() {
  return (
    <section id="fb-needs" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent)_0%,_transparent_50%),_radial-gradient(ellipse_at_bottom_left,_var(--color-primary)_0%,_transparent_50%)] opacity-10" aria-hidden="true" />
      
      <div className="relative max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Padel F&B essentials
        </p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Four categories. <span className="text-accent">One rhythm.</span>
        </h2>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Padel venues run on service waves — coffee rush, hydration breaks, post-match meals, tournament packs. Each category below is built for that tempo.
        </p>
      </div>

      <ul className="mt-16 relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {needsCategories.map((category) => (
          <li key={category.title} className="relative group flex flex-col gap-4 rounded-2xl border border-border bg-card/50 backdrop-blur p-6 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">
            {/* Accent corner */}
            <div className="absolute top-4 right-4 rounded-full bg-accent/10 p-1.5 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <category.accentIcon className="size-4" aria-hidden="true" />
            </div>
            
            <div className="flex items-start gap-3">
              <span className="flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 p-3 text-accent group-hover:from-accent group-hover:to-primary group-hover:text-accent-foreground transition-all">
                <category.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium">{category.title}</h3>
                <span className="mt-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  {category.tag}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
            <ul className="mt-4 flex-1 flex flex-col gap-1.5 pt-4 border-t border-border">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="size-1.5 rounded-full bg-accent/50" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}