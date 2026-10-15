import Image from 'next/image'
import { Check } from 'lucide-react'
import { primaryWhatsapp } from '@/lib/site'

const steps = [
  { title: 'Send your logo', body: 'Share your artwork and the items you want printed.' },
  { title: 'Approve the proof', body: 'We prepare a mock-up and quote for your review.' },
  { title: 'Receive your order', body: 'Short production time, delivered to your door.' },
]

const sectors = ['Hotels & resorts', 'Cafés & coffee bars', 'Restaurants', 'Bakeries', 'Catering', 'Villas']

export function CustomPrint() {
  return (
    <section id="custom-print" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-muted lg:aspect-square">
          <Image
            src="/images/custom-print.png"
            alt="Kraft coffee cups and bags with a custom printed logo on a café counter"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground/70">
            Custom printing
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Put your brand in every guest&apos;s hands.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Print your logo on cups, bags, boxes and more — with a small minimum order, so even
            new cafés and boutique villas can look the part.
          </p>

          <ol className="mt-10 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary font-serif text-lg text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={primaryWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a custom order
          </a>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm font-medium">Trusted across Bali&apos;s hospitality scene</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {sectors.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
