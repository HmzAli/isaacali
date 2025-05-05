import "./Services.scss"

const Services = () => {
  return (
    <div className="services main-section">
      <div className="container">
        <h2 className="main-section__title">What I offer</h2>

        <div className="row">
          <div className="col-md-6">

            <div className="service-item" data-content-id="service-item-1">
              <h2>Custom Websites</h2>

              <div className="service-item__content">
                 <p>
                  Pixel-perfect web pages tailored to your specific needs and brand image. Built with strong focus on creating an exceptional user experience on different screen.
                 </p>
              </div>
            </div>
            
          </div>

          <div className="col-md-6">
            <div className="service-item" data-content-id="service-item-2">
              <h2>Landing Pages</h2>

              <div className="service-item__content">
                 <p>
                 Meticulously built landing pages that drive results for events and marketing campaigns. Engineered to captivate your target audience and inspire action.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 