'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check, Package } from 'lucide-react'
import { productCategories, productGroups } from '@/lib/products'
import { primaryWhatsapp } from '@/lib/site'

type Group = (typeof productGroups)[number]

function enquiryHref(name: string) {
  const text = encodeURIComponent(`Hi Yumico, I'd like a quote for ${name}.`)
  return `${primaryWhatsapp}?text=${text}`
}

export function ProductsCatalogue() {
  const [active, setActive] = useState<Group>('All')
  const visible =
    active === 'All' ? productCategories : productCategories.filter((c) => c.group === active)

  return (
    <section aria-labelledby="catalogue-heading" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <h2 id="catalogue-heading" className="sr-only">
        Product categories
      </h2>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-2">
          {productGroups.map((group) => {
            const selected = group === active
            return (
              <button
                key={group}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(group)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-foreground/75 hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {group}
              </button>
            )
          })}
        </div>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'category' : 'categories'}
        </p>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <li
            key={product.slug}
            id={product.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.name} packaging`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex size-full items-center justify-center">
                  <Package className="size-12 text-primary/40" aria-hidden="true" />
                </div>
              )}
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {product.tag}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {product.group}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-medium">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                {product.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={enquiryHref(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Request a quote
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only">for {product.name}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
