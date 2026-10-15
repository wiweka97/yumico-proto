import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { Materials } from '@/components/materials'
import { CustomPrint } from '@/components/custom-print'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Products />
        <Materials />
        <CustomPrint />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
