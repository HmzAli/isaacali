import Cta from '../Cta';
import './MainBanner.scss'
import { useEffect } from 'react'

const MainBanner = () => {
  useEffect(() => {
    
  }, [])
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline" id="tagline">
           <h1 data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">Bespoke Websites</h1>
           <p data-aos="fade-in" data-aos-duration="500" data-aos-delay="300">For business and individuals committed to delivering powerful first impression</p>

           <div data-aos="fade-in" data-aos-duration="500" data-aos-delay="400">
              <Cta link="#contact" text="Request a Project" />
           </div>
        </div>
      </div>

      <img src="/grid.webp" alt="bg" className="grid"/>
    </section>
  )
}

export default MainBanner 