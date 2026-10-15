import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PadelHero } from '@/components/padel/padel-hero'
import { PadelWhyYumico } from '@/components/padel/padel-why-yumico'
import { PadelFbNeeds } from '@/components/padel/padel-fb-needs'
import { PadelProjects } from '@/components/padel/padel-projects'
import { PadelCta } from '@/components/padel/padel-cta'

export const metadata: Metadata = {
  title: 'Padel F&B by Yumico — Eco-Friendly Packaging for Bali Padel Clubs',
  description:
    'Eco-friendly F&B packaging solutions for Bali\'s growing padel community. Custom cups, bowls, takeaway boxes & branded packaging. Packaging since 1996.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function PadelFbPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PadelHero />
        <PadelWhyYumico />
        <PadelFbNeeds />
        <PadelProjects />
        <PadelCta />
      </main>
      <SiteFooter />
    </>
  )
}