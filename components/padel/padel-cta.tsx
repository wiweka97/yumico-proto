import { MapPin, MessageCircle, Zap, Clock, Mail } from 'lucide-react'
import { primaryWhatsapp, whatsappNumbers, officeNumbers } from '@/lib/site'

export function PadelCta() {
  const whatsapp1 = whatsappNumbers[0]
  const whatsapp2 = whatsappNumbers[1] || whatsappNumbers[0]
  const office1 = officeNumbers[0]

  return (
    <section id="contact" className="relative overflow-hidden w-full">
      {/* Full-width animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-64 rounded-full bg-accent/20 blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 size-48 rounded-full bg-accent/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
      
      {/* Court line pattern - more visible */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg viewBox="0 0 400 400" className="size-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="padelGrid2" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6"/>
              <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#padelGrid2)" />
        </svg>
      </div>

      {/* Centered content container */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Ready to level up your padel F&B?
        </p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl text-white">
          Let&apos;s talk <span className="text-accent">packaging.</span>
        </h2>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-white/90 mx-auto">
          Tell us your venue size, peak hours, menu & sustainability goals. We&apos;ll send a tailored quote with samples — no obligation.
        </p>

        {/* Quick stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-accent" aria-hidden="true" />
            <span>Quote in <strong>2 hours</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-accent" aria-hidden="true" />
            <span>Samples in <strong>48h</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="size-4 text-accent" aria-hidden="true" />
            <span>Design support <strong>included</strong></span>
          </div>
        </div>
      </div>

      <div className="mt-16 relative grid gap-6 md:grid-cols-3">
        {/* WhatsApp 1 */}
        <a
          href={whatsapp1.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6 transition-all hover:bg-white/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp 1
          </div>
          <div className="text-center">
            <p className="text-2xl font-medium text-white">{whatsapp1.label}</p>
            <p className="text-sm text-white/70">Sales & quotes</p>
          </div>
          <Zap className="absolute top-4 right-4 size-5 text-accent/50 group-hover:text-accent transition-colors" aria-hidden="true" />
        </a>

        {/* WhatsApp 2 */}
        <a
          href={whatsapp2.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6 transition-all hover:bg-white/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp 2
          </div>
          <div className="text-center">
            <p className="text-2xl font-medium text-white">{whatsapp2.label}</p>
            <p className="text-sm text-white/70">Operations & logistics</p>
          </div>
          <Zap className="absolute top-4 right-4 size-5 text-accent/50 group-hover:text-accent transition-colors" aria-hidden="true" />
        </a>

        {/* Location & Office */}
        <div className="relative group flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6 transition-all hover:bg-white/20 hover:border-accent/40">
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
            <MapPin className="size-4" aria-hidden="true" />
            Visit Us
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-white">Office & Warehouse</p>
            <p className="text-sm text-white/70 max-w-xs">Jl. Sekar Tunjung XIV No.11A, Kesiman Kertalangu, Denpasar Timur, Bali 80237</p>
            <p className="mt-1 text-sm text-white/60">{office1.label}</p>
          </div>
          <a
            href="https://maps.google.com/?q=Jl.+Sekar+Tunjung+XIV+No.11A,+Kesiman+Kertalangu,+Denpasar+Timur,+Bali+80237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-2 hover:underline"
          >
            Get Directions
            <MapPin className="size-3.5" aria-hidden="true" />
          </a>
          <MapPin className="absolute top-4 right-4 size-5 text-accent/50" aria-hidden="true" />
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-16 relative">
        <div className="absolute inset-x-0 top-0 border-t border-white/20" aria-hidden="true" />
        <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center pt-8">
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Zap className="size-3.5 text-accent" aria-hidden="true" />
              Packaging Since 1996
            </span>
            <span className="w-px h-6 bg-white/20" aria-hidden="true" />
            <span>Yumico Bali</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors text-white/60">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
            <a href="https://yumico.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors text-white/60">
              www.yumico.id
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}