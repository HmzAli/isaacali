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

              <p>
                As a long-time member of Muayfit gym, I had the pleasure of becoming acquainted with most of the staff at the PJ branch. My coach quickly learned about my profession and suggested I rebuild the gym's outdated official website.
              </p>

              <p>
                This project was one of the fastest from design to delivery that I've undertaken due to the tight deadline imposed by the gym's planned major event, which required the site's immediate launch. The simple design, aesthetics, and user experience of the resulting site were highly praised by both gym members and staff.
              </p>

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

              <p>
                Starting by designing bottle stickers for Flemonade, I established the foundation for their visual identity. Working with their provided typography, I developed a color scheme that would work across all their materials. The colors needed to feel authentic and clean, matching their handcrafted approach to making lemonade.
              </p>

              <p>
                From there, I built their first website with clear sections covering their story and ordering process. The site organizes everything from ingredients to pickup locations, creating a straightforward digital presence for their craft beverage business.
              </p>

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

              <p>
                Edvance is a fintech startup that automates school fee collection and provides smart fee disbursement solutions. I've worked closely with Edward who gave me full ownership of development and delivery of both website and admin panel.
                </p>

              <p>
                In contrast to my later projects, Edvance Digital presented a unique challenge with its scarce design assets. This required me to step into a significant design role alongside development, allowing me to make key aesthetic and UX decisions that defined the final product.
              </p>
              
              <a className="btn btn-primary mb-3" href="https://www.edvance.school" target="_blank"> Open site </a>
            </div>
          </div>
        </div>
      </Modal>

      <div className="container-fluid container-xl">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500">Project Showcase </h2>

        <div className="projects-wrapper" data-aos="fade-in" data-aos-duration="800" data-aos-delay="300">
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