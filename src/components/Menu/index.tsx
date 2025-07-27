import './Menu.scss';

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container-fluid container-xl">
        <h2 className="main-section__title" data-aos="fade-in" data-aos-duration="500">Our Menu </h2>

        <div className="menu-wrapper">
          <a href="/IsaacAli-menu.jpeg" target="_blank" className="link-item">
            <img src="/IsaacAli-menu.jpeg" alt="original" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;