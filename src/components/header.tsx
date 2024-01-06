import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { CartWidget } from './cart-widget'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className={twMerge(
            'text-2xl font-extrabold text-black',
            'dark:text-white',
          )}
        >
          devstore
        </Link>
        <form
          className={twMerge(
            'flex w-[320px] items-center gap-3 rounded-full bg-zinc-100 px-5 py-3 ring-zinc-700',
            'dark:bg-zinc-900',
          )}
        >
          <Search className="h-5 w-5" />
          <input
            placeholder="Buscar produtos..."
            className={twMerge(
              'flex flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-300',
              'dark:placeholder:text-zinc-500',
            )}
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="h-4 w-px bg-zinc-800 dark:bg-zinc-700" />
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            width={24}
            height={24}
            src="https://github.com/hzimr.png"
            className="h-6 w-6 rounded-full"
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
