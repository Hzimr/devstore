import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/Theme/ThemeProvider'
import { ThemeToggle } from '../components/Theme/ThemeToggle'
import { twMerge } from 'tailwind-merge'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devsotre',
  },
  description: 'Loja Dev',
  keywords: ['dev', 'store'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} inter.variable dark antialiased`}
    >
      <body
        className={twMerge(
          'bg-zinc-200 text-zinc-900',
          'dark:bg-zinc-950 dark:text-zinc-50',
        )}
      >
        <main className="max-w-[100vw] px-4 pt-1">
          <ThemeProvider attribute="class">
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
