import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container" data-aos="fade-in" data-aos-duration="500">
        <div className="connect">
          <h4>Connect with us</h4>
          <ul className="social-links">
            <li>
              <a target="_blank" href="https://www.tiktok.com/@IsaacAli2022?_t=ZS-8yGZxHqhXQm&_r=1">
                <img src="./tiktok.png" alt="tiktok" />
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.facebook.com/share/1H2i6HgSJW/">
                <img src="./facebook.png" alt="facebook" />
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.instagram.com/IsaacAli1307?igsh=N3lzcDAwZXMzaTZ0/">
                <img src="./instagram.png" alt="instagram" />
              </a>
            </li>

            <li>
              <a target="_blank" href="https://wa.me/+60126346774">
                <img src="./whatsapp.png" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <small>©IsaacAli 2025. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer 