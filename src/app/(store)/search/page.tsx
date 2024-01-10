import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className={twMerge(
                'group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-100',
                'dark:bg-zinc-900',
              )}
            >
              <Image
                className="transition-transform duration-500 group-hover:scale-105"
                src={product.image}
                width={480}
                height={480}
                quality={100}
                alt="moleton branco com o texto 'Come to the Ai Side' escrito na altura do peito"
              />
              <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-50 bg-white/80 p-1 pl-5 dark:border-zinc-500 dark:bg-black/80">
                <span className="truncate text-sm">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-300 px-5 font-semibold dark:bg-violet-500">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
