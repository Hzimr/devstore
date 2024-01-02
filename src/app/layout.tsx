import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/Theme/ThemeProvider'
import { ThemeToggle } from './components/Theme/ThemeToggle'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Devstore',
  description: 'Loja Dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} dark antialiased inter.variable`}
    >
      <body>
        <main className="max-w-[100vw] px-4 pb-12 pt-4">
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
