import WhatsApp from "../icons/WhatsApp";

interface CtaProps {
  link: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'dark';
  icon?: string;
}

const Cta = ({ link, text, variant = 'primary', icon = '' }: CtaProps) => {
  return (
    <div className="cta-wrapper">
      <a 
        target="_blank" 
        href={link} 
        className={`btn btn-${variant} ${icon ? 'has-icon icon ' + icon : ''}`}
      >
        {icon && icon === 'whatsapp' && <WhatsApp />}
        {text}
      </a>
    </div>
  )
}

export default Cta 