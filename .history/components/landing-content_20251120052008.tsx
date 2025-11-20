'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ThemeLogo } from '@/components/theme-logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageSelector } from '@/components/language-selector'
import {
  ArrowRight,
  Check,
  FileText,
  Users,
  BarChart3,
  Shield,
  FolderKanban,
  Receipt,
} from 'lucide-react'

export function LandingContent() {
  const t = useTranslations()

  const pricingFeatures = [
    t('pricing.features.clients'),
    t('pricing.features.invoices'),
    t('pricing.features.projects'),
    t('pricing.features.accounting'),
    t('pricing.features.taxes'),
    t('pricing.features.support'),
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
        {/* Top right buttons */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          <a href="https://solopack.app/auth/login">
            <button className="px-4 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-medium text-sm">
              {t('nav.login')}
            </button>
          </a>
          <LanguageSelector />
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/5" />

          {/* Animated Blur Circles */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-5xl mx-auto">
              {/* Logo */}
              <div className="flex justify-center mb-12">
                <ThemeLogo
                  width={320}
                  height={80}
                  className="h-20 md:h-24 w-auto"
                />
              </div>

              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <span className="text-sm font-medium text-primary">
                    {t('hero.badge')}
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                  {t('hero.title1')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center items-center">
                <a href="https://solopack.app/auth/register">
                  <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                    {t('hero.cta')}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </div>

              {/* Trust Badge */}
              <p className="text-center text-sm text-muted-foreground mt-8">
                {t('hero.trust')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA1 Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary dark:from-primary dark:to-primary/80" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto border-l">
              {t('cta1.text')}
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 md:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('features.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('features.crm.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('features.crm.description')}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('features.invoicing.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('features.invoicing.description')}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FolderKanban className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('features.projects.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('features.projects.description')}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('features.accounting.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('features.accounting.description')}
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('features.security.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('features.security.description')}
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Receipt className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('features.taxes.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('features.taxes.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary dark:from-primary dark:to-primary/80" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-xl mx-auto border-l">
              {t('proof.text')}
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t('pricing.title')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('pricing.subtitle')}
                </p>
              </div>

              <div className="bg-card rounded-3xl border border-border shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="text-sm font-medium text-primary">
                      {t('pricing.badge')}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('pricing.planTitle')}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-10">
                    {t('pricing.planDescription')}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {pricingFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://solopack.app/auth/register"
                    className="block"
                  >
                    <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                      {t('pricing.cta')}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA2 Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary dark:from-primary dark:to-primary/80" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
              {t('cta2.title')}
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
              {t('cta2.subtitle')}
            </p>
            <a href="https://solopack.app/auth/register">
              <button className="px-10 py-5 bg-background text-foreground rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-2">
                {t('cta2.button')}
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <ThemeLogo
                  width={200}
                  height={50}
                  className="h-8 w-auto opacity-60"
                />
              </div>
              <p className="text-muted-foreground mb-2">
                {t('footer.copyright')}
              </p>
              <p className="text-muted-foreground mb-6 text-sm">
                {t('footer.madeWith')}
              </p>
              <div className="flex justify-center gap-8 text-sm">
                <Link
                  href="/politique-confidentialite"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
                <Link
                  href="/cgu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.terms')}
                </Link>
                <a
                  href="mailto:contact@getsolopack.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.contact')}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
