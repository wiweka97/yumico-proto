import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { deliveryAreas, officeNumbers, whatsappNumbers } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-secondary">
        <div className="grid gap-12 p-8 md:p-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground/70">
              Get in touch
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Let&apos;s find the right packaging for you.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Message us on WhatsApp for prices, samples and stock — or call our office and our
              team will help you choose.
            </p>

            <div className="mt-8 flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold">Free delivery areas</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {deliveryAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">Following our delivery schedule.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col rounded-3xl bg-primary p-7 text-primary-foreground">
              <MessageCircle className="size-6" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl font-medium">WhatsApp</h3>
              <p className="mt-1 text-sm text-primary-foreground/70">Fastest for orders & quotes</p>
              <ul className="mt-6 space-y-2">
                {whatsappNumbers.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                    >
                      {n.label}
                      <span aria-hidden="true">{'→'}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col rounded-3xl bg-background p-7">
              <Phone className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl font-medium">Office</h3>
              <p className="mt-1 text-sm text-muted-foreground">Bali, Indonesia</p>
              <ul className="mt-6 space-y-2">
                {officeNumbers.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      {n.label}
                      <span aria-hidden="true">{'→'}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
