'use client'

import { SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="rounded-md bg-black px-1 py-1 font-semibold text-white dark:bg-white dark:text-black"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <SunMoon />
    </button>
  )
}
