import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div className="grid-rows-6 grid max-h-[860px] grid-cols-9 gap-6">
      <Link
        href="/"
        className={twMerge(
          'group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-100',
          'dark:bg-zinc-900',
        )}
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src="/moletom-never-stop-learning.png"
          width={920}
          height={920}
          quality={100}
          alt="moleton branco com o texto 'Come to the Ai Side' escrito na altura do peito"
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-50 bg-white/80 p-1 pl-5 dark:border-zinc-500 dark:bg-black/80">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-300 px-5 font-semibold dark:bg-violet-500">
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className={twMerge(
          'group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-100',
          'dark:bg-zinc-900',
        )}
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src="/moletom-java.png"
          width={920}
          height={920}
          quality={100}
          alt="moleton branco com o texto 'Come to the Ai Side' escrito na altura do peito"
        />
        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-50 bg-white/80 p-1 pl-5 dark:border-zinc-500 dark:bg-black/80">
          <span className="truncate text-sm">Moleton COFFEE JAVA</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-300 px-5 font-semibold dark:bg-violet-500">
            R$109
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className={twMerge(
          'group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-100',
          'dark:bg-zinc-900',
        )}
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src="/camiseta-dowhile-2022.png"
          width={920}
          height={920}
          quality={100}
          alt="moleton branco com o texto 'Come to the Ai Side' escrito na altura do peito"
        />
        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-50 bg-white/80 p-1 pl-5 dark:border-zinc-500 dark:bg-black/80">
          <span className="truncate text-sm">Moletom DoWihle2022</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-300 px-5 font-semibold dark:bg-violet-500">
            R$120
          </span>
        </div>
      </Link>
    </div>
  )
}
