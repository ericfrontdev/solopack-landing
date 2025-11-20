'use client'

import Link from 'next/link'
import { ThemeLogo } from '@/components/theme-logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/lib/theme-context'
import {
  ArrowRight,
  Check,
  FileText,
  Users,
  Mail,
  BarChart3,
  Shield,
  FolderKanban,
  Receipt,
} from 'lucide-react'

export function LandingContent() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
        {/* Top right buttons */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          <Link href="https://solopack.app/auth/login">
            <button className="px-4 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-medium text-sm">
              Se connecter
            </button>
          </Link>
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
                    Pack d&apos;outils pour solopreneurs
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                  Gérez votre entreprise
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                  en toute simplicité
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
                La plateforme tout-en-un pour gérer vos clients, projets,
                factures et comptabilité.
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center items-center">
                <Link href="https://solopack.app/auth/register">
                  <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                    Joindre la bêta
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Trust Badge */}
              <p className="text-center text-sm text-muted-foreground mt-8">
                Gratuit pendant la bêta • Aucune carte requise • Configuration
                en 2 minutes
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 md:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tout ce qu&apos;il vous faut
              </h2>
              <p className="text-xl text-muted-foreground">
                Tout ce dont vous avez besoin pour gérer votre entreprise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Gestion des clients
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Centralisez toutes les informations de vos clients en un seul
                  endroit sécurisé.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Factures pro</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Créez des factures professionnelles avec votre branding en
                  quelques clics.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FolderKanban className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Gestion de projets
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suivez vos projets avec budgets, documents et factures liées.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Comptabilité simplifiée
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suivez vos revenus, dépenses et visualisez vos rapports
                  financiers.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% sécurisé</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vos données sont protégées et isolées dans un environnement
                  multi-tenant.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Receipt className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  TPS/TVQ automatique
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Calcul automatique des taxes québécoises sur vos factures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Tarification transparente
                </h2>
                <p className="text-xl text-muted-foreground">
                  Rejoignez la bêta et profitez d&apos;une offre exclusive
                </p>
              </div>

              <div className="bg-card rounded-3xl border border-border shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="text-sm font-medium text-primary">
                      Bêta gratuite
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Gratuit pendant la bêta
                  </h3>
                  <p className="text-muted-foreground text-lg mb-10">
                    <span className="font-semibold">50 places seulement</span> –
                    accès complet, sans carte de crédit
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {[
                      'Clients illimités',
                      'Factures illimitées',
                      'Gestion de projets',
                      'Comptabilité complète',
                      'TPS/TVQ automatique',
                      'Support par email',
                    ].map((feature) => (
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

                  <Link
                    href="https://solopack.app/auth/register"
                    className="block"
                  >
                    <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                      Commencer maintenant
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary dark:from-primary dark:to-primary/80" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
              Prêt à simplifier la gestion de votre entreprise ?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
              Devenez beta testeur et profitez de 50% à vie
            </p>
            <Link href="https://solopack.app/auth/register">
              <button className="px-10 py-5 bg-background text-foreground rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-2">
                Devenir beta testeur
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
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
                © 2025 SoloPack. Tous droits réservés.
              </p>
              <p className="text-muted-foreground mb-6 text-sm">
                Fait avec ❤️ au Québec pour les entrepreneurs d&apos;ici
              </p>
              <div className="flex justify-center gap-8 text-sm">
                <Link
                  href="/politique-confidentialite"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Confidentialité
                </Link>
                <Link
                  href="/cgu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Conditions
                </Link>
                <Link
                  href="mailto:contact@getsolopack.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
