import "./Selections.scss"

const Selections = () => {
  return (
    <div className="selections main-section">
      <div className="container">
        <h2 className="main-section__title">Selected work</h2>

        <div className="row">
            <div className="col-md-6">
                <div className="selection-item">
                    <h3 className="selection-item__title">Jasper AI</h3>

                    <div className="selection-item__content" data-content-id="selection-item-jasper">
                        <p>
                        Jasper.ai is an AI platform helping enterprise marketers create high-impact campaigns with 90+ purpose-built apps. For their website redesign, I focused on blending sleek aesthetics with engaging motion design. I implemented scroll-triggered animations and micro-interactions to showcase Jasper’s AI capabilities dynamically.
                        </p>

                        <p>
                        The challenge was balancing visual flair with rock-solid performance. By optimizing assets and implementing lazy loading, we delivered a fast yet visually immersive experience that effortlessly guides users from discovery to conversion
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="selection-item">
                    <h3 className="selection-item__title">allO</h3>

                    <div className="selection-item__content" data-content-id="selection-item-allO">
                        <p>
                        AllO streamlines operations of restaurants with their suite of solutions for serving guests more efficiently. In collaboration with a team talented designer, I’ve help build outstanding web experience that translates gracefully into smaller screens.

                        </p>
                        <p>
                        Working with AllO showed how constraints like dark mode's limited color options can push creativity further. The project proved beautiful design 
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="selection-item">
                    <h3 className="selection-item__title">Muayfit</h3>

                    <div className="selection-item__content" data-content-id="selection-item-muayfit">
                        <p>
                        As a long-time member of Muayfit gym, I had the pleasure of becoming acquainted with most of the staff at the PJ branch. My coach quickly learned about my profession and suggested I rebuild the gym's outdated official website.</p>

                        <p>This project was one of the fastest from design to delivery that I've undertaken due to the tight deadline imposed by the gym's planned major event, which required the site's immediate launch. The simple design, aesthetics, and user experience of the resulting site were highly praised by both gym members and staff.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="selection-item">
                    <h3 className="selection-item__title">Edvance Digital</h3>

                    <div className="selection-item__content" data-content-id="selection-item-edvance">
                        <p>
                        Edvance is a fintech startup that automates school fee collection and provides smart fee disbursement solutions. I’ve worked closely with Edward who gave me full ownership of development and delivery of both website and admin panel.</p>

                        <p>
                        In contrast to my later projects, Edvance Digital presented a unique challenge with its scarce design assets. This required me to step into a significant design role alongside development, allowing me to make key aesthetic and UX decisions that defined the final product.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Selections 