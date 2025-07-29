import './Header.scss'
import Navbar from '../Navbar'
import { useState, useEffect } from 'react'
import NavButton from '../NavButton'
import AboutMe from '../AboutMe'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHomePage, setIsHomepage] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <header id="header" className={(isScrolled) ? 'scrolled' : !isHomePage ? 'not-in-homepage' : '' } >
      <div className="header-outer">
        <div className="container-lg" data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">
          <div className="row">
            <div className="col">
              <a href="/" className="logo"> Isaac Ali </a>
            </div>

            <div className="col-7">
              <ul className="main-menu d-none d-md-flex">
                <li>
                  <a href="#services"> Services </a>
                </li>

                <li>
                  <a href="#projects"> Project Showcase </a>
                </li>

                <li>
                  <a onClick={() => setIsModalOpen(true)}> About Me </a>
                </li>

                <li>
                  <a href="#contact"> Contact Me </a>
                </li>
              </ul>
            </div>

            <NavButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>

      <Navbar isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      <AboutMe isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

export default Header
