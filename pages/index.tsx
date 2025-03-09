import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LandingHero from '@/components/LandingHero'
import FeatureSection from '@/components/FeatureSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Law Bhai - Legal Services Made Simple</title>
        <meta name="description" content="Law Bhai connects you with qualified legal professionals for affordable legal services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <LandingHero />
          <FeatureSection />
          <TestimonialsSection />
          
          {/* CTA Section */}
          <section className="bg-primary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-xl text-primary-foreground">
                Join thousands of satisfied clients who trust Law Bhai for their legal needs.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Talk to a Lawyer Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}