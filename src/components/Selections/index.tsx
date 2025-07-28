import { useEffect, useState } from 'react';
import './Selections.scss';
import Modal from '../Modal';

const Selections = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

  }, [])

  return (
    <section className="selections main-section" id="projects">

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is a simple modal with fade-in animation.</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>

      <div className="container-fluid container-xl">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500">Project Showcase </h2>

        <div className="projects-wrapper" data-aos="fade-in" data-aos-duration="800" data-aos-delay="300">
          <div className="row g-0">
            <div className="col-md-6 item-backdrop">
              <a className="link-item" data-custom-open="modal-1">
                <div className="image-item-card b-top-left">
                  <figure className="image-wrapper">
                    <img src="/muayfit.webp" alt="Muay Fit" />
                  </figure>
                </div>
              </a>
            </div>

            <div className="col-md-6 item-backdrop">
              <a className="link-item">
                <div className="image-item-card b-top-right">
                  <figure className="image-wrapper">
                    <img src="/bokadios.webp" alt="Bokadios" />
                  </figure>
                </div>
              </a>
            </div>

            <div className="col-md-6 item-backdrop">
              <a className="link-item">
                <div className="image-item-card b-bottom-left">
                  <figure className="image-wrapper">
                    <img src="/flemonade.webp" alt="Flemonade" />
                  </figure>
                </div>
              </a>
            </div>

            <div className="col-md-6 item-backdrop">
              <a className="link-item">
                <div className="image-item-card b-bottom-right">
                  <figure className="image-wrapper">
                    <img src="/edvance.webp" alt="Edvance" />
                  </figure>
                </div>
              </a>
            </div>

            <div className="item-backdrop"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selections;