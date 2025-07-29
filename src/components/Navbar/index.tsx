import { useState } from 'react';
import AboutMe from '../AboutMe';
import './Navbar.scss'

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const Navbar = ({ isMenuOpen, closeMenu }: NavbarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAboutModal = () => {
    closeMenu();
    setIsModalOpen(true);
  }

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul className="nav-list">
          <li>
            <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Project Showcase</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={() => openAboutModal()}>About Me</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact me</a>
          </li>
        </ul>
      </nav>

      <AboutMe isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  )
}

export default Navbar 