import { CheckCircle2, Leaf, Coffee, Truck, Zap, Award, RotateCcw } from 'lucide-react'

const features = [
  {
    icon: Award,
    number: '01',
    title: 'Padel-specialized expertise',
    description:
      'We understand padel venue rhythms — morning coffee rush, mid-match hydration, post-game meals, tournament catering. Packaging timed to your peak hours.',
  },
  {
    icon: RotateCcw,
    number: '02',
    title: 'Full-cycle F&B coverage',
    description:
      'From specialty coffee & cold brew to healthy bowls, protein snacks & tournament catering. One supplier for every touchpoint: cups, bowls, bags, boxes, cutlery, napkins.',
  },
  {
    icon: Leaf,
    number: '03',
    title: 'Eco-first by default',
    description:
      'Bagasse bowls, kraft bags, corn-starch cutlery, recyclable cups — sustainable options across every category. No greenwashing, just honest materials that perform.',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Lightning-fast turnaround',
    description:
      'Stock held in Bali warehouse. Custom print runs in days, not weeks. Emergency restocks same-day for Denpasar/Sanur/Canggu. Your tournament never waits.',
  },
  {
    icon: Coffee,
    number: '05',
    title: 'Brand visibility that lasts',
    description:
      'Custom-printed cups & bowls turn every serve into brand exposure. Logo, colors, QR codes, social handles — packaging that markets your venue while guests play.',
  },
  {
    icon: Truck,
    number: '06',
    title: 'Island-wide free delivery',
    description:
      'Sanur to Canggu, Nusa Dua to Ubud — free delivery on every order. Scheduled weekly drops or on-demand. No minimums, no surprises.',
  },
]

export function PadelWhyYumico() {
  return (
    <section id="why-yumico" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/3 via-transparent to-primary/3 opacity-20" aria-hidden="true" />
      
      <div className="relative max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Why padel venues choose Yumico
        </p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Built for the <span className="text-accent">padel rhythm.</span>
        </h2>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Since 1996, Yumico has powered Bali&apos;s F&B scene. Now we&apos;ve tailored our range, logistics & custom print for the unique pace of padel clubs — where every match drives a service wave.
        </p>
      </div>

      <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li key={feature.number} className="relative group flex flex-col gap-4 rounded-2xl border border-border bg-card/50 backdrop-blur p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-start gap-3">
              <span className="flex shrink-0 items-center justify-center rounded-xl bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <feature.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="mt-1 font-serif text-3xl font-medium text-muted-foreground/50">{feature.number}</span>
            </div>
            <div className="pl-11">
              <h3 className="font-serif text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}