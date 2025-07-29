import "./Testimonials.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Coach Ethan",
      content: "The Muayfit website was rebuilt incredibly fast thanks to Isaac's responsiveness. Even with a tight deadline, he delivered a fantastic design and user experience that our members love.",
      position: "Head Coach",
      image: "/eathan.webp"
    },
    {
      name: "Razif",
      content: "I fully trusted Isaac with our first website, and what he delivered far exceeded our expectations. Love the design details, like the use of the bottle silhouettes. Well done.",
      position: "Founder",
      image: "razif.webp",
    },
    {
      name: "Yusuf",
      content: "At Bokadios, everything moves fast—just like our food. Isaac matched that pace, delivering a clean, info-rich website in record time. It captures exactly who we are.",
      position: "Owner & Master Chef",
      image: "yusuf.webp",

    },
    {
      name: "Edward",
      content: "Isaac's impact on Edvance was pivotal. His ownership and delivery of a robust, user-friendly system have been instrumental in our progress.",
      position: "CEO",
      image: "edward.jpeg",
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false
  }

  return (
    <div className="testimonials main-section">
      <h2 className="main-section__title" data-content-id="testimonials-section-title" data-aos="fade-in" data-aos-duration="500">Kind Words, Happy Clients</h2>

      <div className="testimonial-wrapper" data-aos="fade-in" data-aos-duration="500">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="item-wrapper">
              <div key={index} className="testimonials__item">
                <img className="testimonials__image" src={testimonial.image} alt={testimonial.name} />
                <p className="testimonials__content">{testimonial.content}</p>
                <h5 className="testimonials__name">{testimonial.name}</h5>
                <h5 className="testimonials__position">{testimonial.position}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials 