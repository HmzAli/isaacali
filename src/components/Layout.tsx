import { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="main-content">
        {children}
      </main>
    </>
  )
}

export default Layout 