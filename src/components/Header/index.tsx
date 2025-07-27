import './Header.scss'
import Navbar from '../Navbar'
import { useState, useEffect } from 'react'
import NavButton from '../NavButton'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHomePage, setIsHomepage] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 10)
    }

    window.addEventListener('scroll', handleScroll)
  
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomepage(true)
    }
  }, [])

  return (
    <header id="header" className={(isScrolled) ? 'scrolled' : !isHomePage ? 'not-in-homepage' : '' }>
      <div className="header-outer">
        <div className="container-fluid">
          <div className="header-inner">
            {/* <Logo variant="invert" /> */}

            <NavButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>

      <Navbar isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </header>
  )
}

export default Header
