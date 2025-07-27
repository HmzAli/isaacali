import "./Services.scss"

const Services = () => {
  return (
    <div className="services main-section">
      <div className="container">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">What I offer</h2>

        <div className="service-wrapper" data-aos="fade-in" data-aos-duration="800" data-aos-delay="300">
          <div className="service-item" data-content-id="service-item-1">
            <div className="service-item__content">
                <p>
                  Beautifully crafted websites tailored to your brand and vision. Designed with a strong focus on delivering an exceptional user experience across all screens.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mock-wrapper" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
        <img className="phone-mock" src="/phone-mock.webp" alt="Phone" />
        <img className="laptop-mock" src="/laptop-mock.webp" alt="Phone" />
      </div>
    </div>
  )
}

export default Services 