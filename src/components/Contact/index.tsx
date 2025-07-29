import { useState } from 'react';
import ContactForm from '../ContactForm';
import './Contact.scss';
import AboutMe from '../AboutMe';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <>
    <div className="contact main-section" id="contact">
      <div className="container">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500"> Contact Me </h2>

        <div className="section-intro" data-aos="fade-in" data-aos-duration="300" data-aos-delay="100">
          <p className="mb-3">Interested in building a beautiful web experience? Contact me anytime by filling the&nbsp;form below.</p>
          <p>Rates and workflow details will be provided upon request.</p>
        </div>

        <div className="form-wrapper">
          <ContactForm />
        </div>

        <a className="link-item about-me-cta" onClick={() => setIsModalOpen(true)}>
          <h3> Who Am I? </h3>
          <img src="/isaac.webp" alt="Isaac" />
        </a>

        <AboutMe isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  </>
}

export {
  Contact
}