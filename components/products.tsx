import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const featured = [
  {
    name: 'Brown Kraft Paper',
    desc: 'Boxes, bowls & bags with a natural look',
    image: '/images/kraft.png',
    tag: 'Recyclable',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    name: 'White Paper',
    desc: 'Clean cups, bowls & takeaway boxes',
    image: '/images/white-paper.png',
    tag: 'Food grade',
  },
  {
    name: 'Bagasse',
    desc: 'Compostable sugarcane-fibre containers',
    image: '/images/bagasse.png',
    tag: 'Biodegradable',
  },
  {
    name: 'Corn Starch',
    desc: 'Plant-based cutlery & lidded boxes',
    image: '/images/cornstarch.png',
    tag: 'Eco friendly',
  },
  {
    name: 'Aluminium Containers',
    desc: 'Oven-safe trays for hot meals',
    image: '/images/aluminium.png',
    tag: 'Recyclable',
  },
  {
    name: 'Bakery Packaging',
    desc: 'Cake boxes, pastry bags & liners',
    image: '/images/bakery.png',
    tag: 'Food grade',
    className: 'md:col-span-2',
  },
  {
    name: 'Candles',
    desc: 'Pillar & tea lights for hotels and venues',
    image: '/images/candles.png',
    tag: 'Hotel supply',
    className: 'md:col-span-2',
  },
]

const more = ['Cassava Packaging', 'Oxium Packaging', 'Plastic Packaging', 'Protective Equipment']

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground/70">
            Our products
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Everything your kitchen sends out the door.
          </h2>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          View all products
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-12 grid auto-rows-[minmax(260px,auto)] gap-4 sm:grid-cols-2 md:grid-cols-4">
        {featured.map((item) => (
          <li
            key={item.name}
            className={`group relative overflow-hidden rounded-3xl bg-muted ${item.className ?? ''}`}
          >
            <Image
              src={item.image}
              alt={`${item.name} packaging`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent"
              aria-hidden="true"
            />
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              {item.tag}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
              <h3 className="font-serif text-2xl font-medium">{item.name}</h3>
              <p className="mt-1 text-sm text-primary-foreground/85">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium">Also available</p>
        <ul className="flex flex-wrap gap-2">
          {more.map((m) => (
            <li
              key={m}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
