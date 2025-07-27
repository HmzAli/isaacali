import Cta from '../Cta';
import './MainBanner.scss'
import { useEffect } from 'react'

const MainBanner = () => {
  useEffect(() => {
    const initialScrollPosition  = window.scrollY || window.pageYOffset;
    if (initialScrollPosition > 0) {
      return;
    }
    // @ts-ignore
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        reverse: true
      }
    });
        
    // @ts-ignore
    const fadeUpAnimation = gsap.to("#tagline", {
        y: -100,
        opacity: 0,
        duration: 1
    });
        
    // @ts-ignore
      const scene = new ScrollMagic.Scene({
          triggerElement: "#about",
          triggerHook: 1,
          duration: 300
      })
      .setTween(fadeUpAnimation)
      .addTo(controller);
  }, [])
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline" id="tagline">
           <h1 data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">Bespoke Websites</h1>
           <p data-aos="fade-in" data-aos-duration="500" data-aos-delay="300">For business and individuals committed to delivering powerful first impression</p>

           <Cta link="#contact" text="Request a project" />
        </div>
      </div>
    </section>
  )
}

export default MainBanner 