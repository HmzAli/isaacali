import './Navbar.scss'

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const Navbar = ({ isMenuOpen, closeMenu }: NavbarProps) => {
  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul className="nav-list">
          <li>
            <a href="#menu" className="nav-link" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#find-us" className="nav-link" onClick={closeMenu}>My work</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>About Me</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>Contact me</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar 