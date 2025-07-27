import './Order.scss';

const Order = () => {
  return (
    <>
      <section className="order" id="find-us">
        <div className="container">
          <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500">
            Our location </h2>

          <p className="text-center location-text">
            We're located in Damansara Perdana—drop us a visit if you're nearby and craving a quick bite.<br />
          </p>

          <div className="mebed-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7967.451323609659!2d101.60645368418423!3d3.1667936899350786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f005fcda55b%3A0x45e39f369c93ef3f!2sIsaacAli!5e0!3m2!1sen!2ske!4v1753200813995!5m2!1sen!2ske" loading="lazy"></iframe>
          </div>
        </div>
      </section>

      <section className="delivery">
        <h2 className="main-section__title">Delivery</h2>

        <div className="container">
          <p className="text-center mt-4">
            We're also available on these delivery platforms for fast, convenient delivery to your doorstep.
          </p>
        </div>

        <div className="online-order-list">
          <div className="order-item">
            <a target="_blank" href="https://r.grab.com/g/6-20250723_193156_2d07feff4f9349c081a769a134f90b41_MEXMPS-1-C3TCVVMJTPA1TN">
              <img src="/grab-food.png" alt="GrabFood" />
            </a>
          </div>

          <div className="order-item">
            <a href="https://www.foodpanda.my/restaurant/u6qm/IsaacAli-damansara-perdana">
              <img src="/foodpanda.png" alt="FoodPanda" />
            </a>
          </div>

          <div className="order-item">
            <img src="/shopee-food.png" alt="ShopeeFood" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Order; 