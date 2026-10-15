import { Leaf, Recycle, ShieldCheck, Sprout, Timer } from 'lucide-react'

const materials = [
  {
    icon: Leaf,
    title: 'Eco Friendly',
    body: 'Safe for storing food and gentle on the environment.',
  },
  {
    icon: Sprout,
    title: 'Biodegradable',
    body: 'Naturally decomposed by bacteria and other living organisms.',
  },
  {
    icon: Recycle,
    title: 'Recyclable',
    body: 'Made to be collected, processed and used again.',
  },
  {
    icon: Timer,
    title: 'Oxo-Biodegradable',
    body: 'Oxium additive helps plastic break down in around 2–5 years.',
  },
  {
    icon: ShieldCheck,
    title: 'Food Grade',
    body: 'Materials safe to hold all food and beverages.',
  },
]

export function Materials() {
  return (
    <section id="materials" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/60">
              Material guide
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Know exactly what you&apos;re serving in.
            </h2>
          </div>
          <p className="text-pretty leading-relaxed text-primary-foreground/75 lg:col-span-4 lg:col-start-9">
            Every product is labelled with these icons so you can choose packaging that matches
            your values and your guests&apos; expectations.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {materials.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
