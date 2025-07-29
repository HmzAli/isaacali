import ContactForm from '../ContactForm';
import './Contact.scss';

const Contact = () => {

  return <>
    <div className="contact main-section" id="contact">
      <div className="container">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500"> Contact Me </h2>

        <div className="section-intro" data-aos="fade-in" data-aos-duration="500" data-aos-delay="100">
          <p className="mb-3">Interested in building a beautiful web experience? Contact me anytime by filling the&nbsp;form below.</p>
          <p>Rates and workflow details will be provided upon request.</p>
        </div>

        <div className="form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  </>
}

export {
  Contact
}