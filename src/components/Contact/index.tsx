import { useState } from 'react';
import ContactForm from '../ContactForm';
import Modal from '../Modal';
import './Contact.scss';

const Contact = () => {
  const [isModalsOpen, setIsModalOpen] = useState(false);

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

        <a className="link-item about-me-cta" onClick={() => setIsModalOpen(true)}>
          <h3> Who Am I? </h3>
          <img src="/isaac.webp" alt="Isaac" />
        </a>

        <Modal isOpen={isModalsOpen} onClose={() => setIsModalOpen(false)}>
          <div className="about-item">
            <div className="about-item__content">
              <div className="row">
                <div className="col-md-8">
                  <h3>About me</h3>
                  <p>
                    I'm a web developer with over 10 years of experience bringing digital designs to life for millions of users. I transform mockups into pixel-perfect, functional websites with technical precision and attention to detail.
                  </p>

                  <p>
                    My expertise lies in enhancing the original designs with thoughtful implementation choices that improve usability and performance, delivering websites that both look stunning and achieve real results for clients.
                  </p>
                </div>
              </div>

              <img src="/isaac.webp" alt="Isaac" />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  </>
}

export {
  Contact
}