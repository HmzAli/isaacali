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
            <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#menu" className="nav-link" onClick={closeMenu}>Menu</a>
          </li>
          <li>
            <a href="#find-us" className="nav-link" onClick={closeMenu}>Find us</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar 