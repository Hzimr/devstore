import { ReactNode } from 'react'
import { Header } from '../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-rows-app gap-5 p-4">
      <Header />
      {children}
    </div>
  )
}
