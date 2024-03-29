import { AddToCartButton } from '@/components/add-to-cart-button'
import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  // Memoização

  const product = await response.json()

  return product
}

// DeDuplicar

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)
  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()
  // return [{ slug: 'moletom-nerver-stop-learning' }]
  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPAge({ params }: ProductProps) {
  const product = await getProduct(params.slug)
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-900 dark:text-zinc-400">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold dark:bg-violet-500">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-800 dark:text-zinc-400">
            Em 12x sem juros{' '}
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="font seminold flex h-9 w-14 items-center justify-center rounded-full border border-zinc-400 bg-zinc-300 text-sm dark:border-zinc-700 dark:bg-zinc-800"
            >
              P
            </button>
            <button
              type="button"
              className="font seminold flex h-9 w-14 items-center justify-center rounded-full border border-zinc-400 bg-zinc-300 text-sm dark:border-zinc-700 dark:bg-zinc-800"
            >
              M
            </button>
            <button
              type="button"
              className="font seminold flex h-9 w-14 items-center justify-center rounded-full border border-zinc-400 bg-zinc-300 text-sm dark:border-zinc-700 dark:bg-zinc-800"
            >
              G
            </button>
          </div>
        </div>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}
