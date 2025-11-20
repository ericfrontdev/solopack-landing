'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

export function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr'
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <button
      onClick={toggleLocale}
      className="h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center"
      aria-label={locale === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <span className="text-xs font-semibold">
        {locale === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  )
}
