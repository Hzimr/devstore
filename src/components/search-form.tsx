'use client'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import { twMerge } from 'tailwind-merge'

/* Soft Navigation (ideal) */

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className={twMerge(
        'flex w-[320px] items-center gap-3 rounded-full bg-zinc-100 px-5 py-3 ring-zinc-700',
        'dark:bg-zinc-900',
      )}
    >
      <Search className="h-5 w-5" />
      <input
        name="q"
        placeholder="Buscar produtos..."
        defaultValue={query ?? ''}
        className={twMerge(
          'flex flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-300',
          'dark:placeholder:text-zinc-500',
        )}
      />
    </form>
  )
}
