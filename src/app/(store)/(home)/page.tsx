import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

/**
 Cache & Memoization
 * Funcionalidade do React
 * React: 
 * Cache: específica do NEXT
 * force-cache é o padrão do NEXT
 useMemo / memo / useCallback
 */

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className={twMerge(
          'group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-100',
          'dark:bg-zinc-900',
        )}
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src={highlightedProduct.image}
          width={920}
          height={920}
          quality={100}
          alt="moleton branco com o texto 'Come to the Ai Side' escrito na altura do peito"
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-50 bg-white/80 p-1 pl-5 dark:border-zinc-500 dark:bg-black/80">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-300 px-5 font-semibold dark:bg-violet-500">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className={twMerge(
              'group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-100',
              'dark:bg-zinc-900',
            )}
          >
            <Image
              className="transition-transform duration-500 group-hover:scale-105"
              src={product.image}
              width={920}
              height={920}
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
  )
}
