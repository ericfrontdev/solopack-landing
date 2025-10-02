'use client'

import { ThemeProvider } from "@/lib/theme-context"

export default function Template({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
