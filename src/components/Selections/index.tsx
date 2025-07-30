import { useEffect, useState } from 'react';
import './Selections.scss';
import Modal from '../Modal';

const Selections = () => {
  const [isModalsOpen, setIsModalOpen] = useState([
    false,
    false,
    false,
    false,
  ]);

  const openModal = (modalIndex: number) => {
    const newState = [...isModalsOpen];
    newState[modalIndex] = true;
    setIsModalOpen(newState);
  }

  const closeModal = (modalIndex: number) => {
    const newState = [...isModalsOpen];
    newState[modalIndex] = false;
    setIsModalOpen(newState);
  }

  useEffect(() => {

  }, [])

  return (
    <section className="selections main-section" id="projects">
      <Modal isOpen={isModalsOpen[0]} onClose={() => closeModal(0)}>
        <div className="project-item">
          <figure className="video-wrapper project-item__video">
            {/* @ts-ignore */}
            <video src="/muayfit.mp4" muted autoplay="true" loop />
          </figure>

          <div className="project-item__content">
            <div>
              <h3> MuayFit</h3>
              <div className="date-label">
                <span>Delivery date:</span> <span className="date-text"> 2021 </span>
              </div>

              <p>As a long-time member of Muayfit gym, I became acquainted with the staff at the PJ branch. My coach learned about my profession and suggested I rebuild the gym's outdated website.</p>

              <p>This was one of my fastest projects from design to delivery due to a tight deadline for the gym's planned major event. The simple design and user experience were praised by both members and staff.</p>

              <a className="btn btn-primary mb-3" href="https://www.muayfit.com" target="_blank"> Open site </a>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isModalsOpen[1]} onClose={() => closeModal(1)}>
        <div className="project-item">
          <figure className="video-wrapper project-item__video">
            {/* @ts-ignore */}
            <video src="/bokadios.mp4" muted autoplay="true" loop />
          </figure>

          <div className="project-item__content">
            <div>
              <h3>Bokadios</h3>
              <div className="date-label">
                <span>Delivery date:</span> <span className="date-text"> 2025 </span>
              </div>

              <p>
                Bokadios is a small mobile kitchen I used to visit daily in Damansara Perdana. After many visits and chats over the counter, the owner offered me the opportunity to design their first website. He wanted something straightforward, easy to navigate, yet rich in information. The final site is clean and compact—capturing the charm of the brand while making everything customers need accessible at a glance.
              </p>

              <a className="btn btn-primary mb-3" href="https://bokadios.com" target="_blank"> Open site </a>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isModalsOpen[2]} onClose={() => closeModal(2)}>
        <div className="project-item">
          <figure className="video-wrapper project-item__video">
            {/* @ts-ignore */}
            <video src="/flemonade.mp4" muted autoplay="true" loop />
          </figure>

          <div className="project-item__content">
            <div>
              <h3>Flemonade</h3>
              <div className="date-label">
                <span>Delivery date:</span> <span className="date-text"> 2024 </span>
              </div>

              <p>Starting by designing bottle stickers for Flemonade, I helped establish their visual identity. Using their typography, I developed a color scheme that felt authentic and clean—matching their handcrafted lemonade approach.</p>

              <p>I then built their website with sections for their story and ordering process. The site covers ingredients to pickup locations, creating a simple digital presence for their craft beverage business.</p>

              <a className="btn btn-primary mb-3" href="https://flemonade.com" target="_blank"> Open site </a>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isModalsOpen[3]} onClose={() => closeModal(3)}>
        <div className="project-item">
          <figure className="video-wrapper project-item__video edvance-video-padding">
            {/* @ts-ignore */}
            <video src="/edvance.mp4" muted autoplay="true" loop />
          </figure>

          <div className="project-item__content">
            <div>
              <h3> Edvance Digital </h3>
              <div className="date-label">
                <span>Delivery date:</span> <span className="date-text"> 2022 </span>
              </div>

              <p>Edvance is a fintech startup that automates school fee collection and provides smart fee disbursement solutions. I worked closely with Edward who gave me full ownership of developing and delivering both the website and admin panel.</p>

              <p>Unlike my later projects, Edvance presented a unique challenge with scarce design assets. This required me to take on a significant design role alongside development, making key aesthetic and UX decisions that defined the final product.</p>
              
              <a className="btn btn-primary mb-3" href="https://www.edvance.school" target="_blank"> Open site </a>
            </div>
          </div>
        </div>
      </Modal>

      <div className="container-fluid container-xl">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="300">Project Showcase </h2>

        <div className="projects-wrapper">
          <div className="row g-0">
            <div className="col-md-6 item-backdrop">
              <a className="link-item" onClick={() => openModal(0)}>
                <div className="image-item-card b-top-left">
                  <figure className="image-wrapper">
                    <img src="/muayfit.webp" alt="Muay Fit" />
                  </figure>
                </div>
              </a>
            </div>

            <div className="col-md-6 item-backdrop">
              <a className="link-item" onClick={() => openModal(1)}>
                <div className="image-item-card b-top-right">
                  <figure className="image-wrapper">
                    <img src="/bokadios.webp" alt="Bokadios" />
                  </figure>
                </div>
              </a>
            </div>

            <div className="col-md-6 item-backdrop">
              <a className="link-item" onClick={() => openModal(2)}>
                <div className="image-item-card b-bottom-left">
                  <figure className="image-wrapper">
                    <img src="/flemonade.webp" alt="Flemonade" />
                  </figure>
                </div>
              </a>
            </div>

            <div className="col-md-6 item-backdrop">
              <a className="link-item" onClick={() => openModal(3)}>
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