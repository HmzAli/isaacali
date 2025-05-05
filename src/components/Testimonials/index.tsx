import "./Testimonials.scss"

const Testimonials = () => {
  return (
    <div className="testimonials main-section">
      <div className="container">
        <h2 className="main-section__title">Kind words, Happy Clients</h2>
        
        <ul className="testimonials__list">
          <li className="testimonials__item">
            <blockquote className="testimonials__quote" data-content-id="testimonial-allo">
              Isaac quickly grasped our vision for allO. He built a website that's both beautiful and truly intuitive for restaurant operators, reflecting our focus on their efficiency. Impressive work!
            </blockquote>

            <div className="testimonials__author">
              <span className="testimonials__name">Thomas Dudzik</span>
              <span className="testimonials__role">Head of Customer Success</span>
              <span className="testimonials__company">allO</span>
            </div>
          </li>

          <li className="testimonials__item">
            <blockquote className="testimonials__quote" data-content-id="testimonial-muayfit">
              The Muayfit website was rebuilt incredibly fast thanks to Isaac's responsiveness. Even with a tight deadline, he delivered a fantastic design and user experience that our members love.
            </blockquote>

            <div className="testimonials__author">
              <span className="testimonials__name">Coach Eathan</span>
              <span className="testimonials__role">Head Coach</span>
              <span className="testimonials__company">Muayfit</span>
            </div>
          </li>

          <li className="testimonials__item">
            <blockquote className="testimonials__quote" data-content-id="testimonial-jasper">
              Witnessing Isaac's magic on our Jasper AI redesign was breathtaking. The way he brought our platform to life with seamless motion and speed left us utterly impressed. It's not just a website; it's an experience. Thank you!
            </blockquote>

            <div className="testimonials__author">
              <span className="testimonials__name">Chief Product Officer</span>
              <span className="testimonials__company">Jasper AI</span>
            </div>
          </li>

          <li className="testimonials__item">
            <blockquote className="testimonials__quote" data-content-id="testimonial-edvance">
              Isaac's impact on Edvance was pivotal. His ownership and delivery of a robust, user-friendly system have been instrumental in our progress.
            </blockquote>
            
            <div className="testimonials__author">
              <span className="testimonials__name">Edward Ling</span>
              <span className="testimonials__company">Edvance</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials 