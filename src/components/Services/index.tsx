import { useEffect } from "react"
import "./Services.scss"

interface SceneConfig {
  triggerElement?: string;
  duration: number;
  tweenTarget: string;
  tweenVars: any;
}

const scenes: SceneConfig[] = [
  {
    duration: 1300,
    tweenTarget: '#phone',
    tweenVars: {
      translateY: -380
    }
  },
  {
    duration: 1800,
    tweenTarget: '#laptop',
    tweenVars: {
      translateY: -180
    }
  }
];


const Services = () => {
  useEffect(() => {
    // @ts-ignore
    if (window.ScrollMagic && window.gsap) {
      // @ts-ignore
      const controller = new ScrollMagic.Controller();

      scenes.forEach(({ triggerElement, duration, tweenTarget, tweenVars }) => {
        // @ts-ignore
        const tween = gsap.to(tweenTarget, tweenVars);

        // @ts-ignore
        new ScrollMagic.Scene({
          triggerElement,
          duration
        })
        .setTween(tween)
        .addTo(controller);
      });
    }
  }, [])

  return (
    <div className="services main-section">
      <div className="container">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">What I offer</h2>

        <p className="section-intro">
          Beautifully crafted websites tailored to your brand and vision. Designed with a strong focus on delivering an exceptional user experience across all screens.
        </p>
      </div>

      <div className="mock-wrapper" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
        <img className="phone-mock" src="/phone-mock.webp" alt="Phone" id="phone" />
        <img className="laptop-mock" src="/laptop-mock.webp" alt="Laptop" id="laptop"/>
      </div>
    </div>
  )
}

export default Services 