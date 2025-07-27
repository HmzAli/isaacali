import { ReactNode, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className={`main-content ${isHomePage ? 'home-page' : 'not-homepage'}`}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout 