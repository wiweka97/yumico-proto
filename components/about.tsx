import { HandHeart, Package, Printer, Truck } from 'lucide-react'

const advantages = [
  {
    icon: Package,
    title: 'Wide product range',
    body: 'Food and drink packaging, candles, health protection products and more — all from one supplier.',
  },
  {
    icon: Printer,
    title: 'Your logo, printed',
    body: 'Custom-print your brand on our packaging with a small minimum order and short production time.',
  },
  {
    icon: Truck,
    title: 'Free delivery',
    body: 'Free delivery to Sanur, Denpasar, Canggu, Nusa Dua, Kuta, Pecatu and more on our regular schedule.',
  },
  {
    icon: HandHeart,
    title: 'Honest advice',
    body: 'Our team recommends the best packaging option for your menu, your budget and your brand.',
  },
]

export function About() {
  return (
    <section id="about" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground/70">
              About Yumico
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              More than protection — packaging is part of your brand.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
            <p>
              Founded in 1996 and based in Bali, Yumico has spent three decades helping food and
              beverage businesses present their products with care. Good packaging builds customer
              trust, elevates presentation and keeps every takeaway and delivery safe.
            </p>
            <p>
              Today we&apos;re one of Bali&apos;s leading local packaging distributors — offering
              quality products at competitive prices, backed by reliable service and on-time
              delivery across the island.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-4 bg-background p-7">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
