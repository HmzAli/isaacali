import './NavButton.scss'

interface NavButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavButton = ({ isOpen, onClick }: NavButtonProps) => {
  return (
    <a 
      className={`nav-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label="Toggle navigation menu"
    >
      <div className="menu-btw-wrapper">
        <img src="./menu-button.png" className="menu-btn menu-btn-open" alt="menu button" />
        <img src="./menu-button-close.png" className="menu-btn menu-btn-close" alt="close menu button" />
      </div>
    </a>
  )
}

export default NavButton 