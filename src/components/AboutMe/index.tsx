import Modal from "../Modal";

interface AboutMeProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="about-item">
        <div className="about-item__content">
          <div className="row">
            <div className="col-md-8">
              <h3>About me</h3>
              <p>
                I'm a web developer with over 10 years of experience bringing digital designs to life for millions of users. <br />I transform ideas into pixel-perfect, high-performing websites with technical precision and attention to detail.
              </p>

              <p>
                My expertise lies in enhancing original designs with thoughtful implementation choices that improve usability and performance, delivering websites that look stunning and achieve real results for clients.
              </p>
            </div>
          </div>

          <img src="/isaac.webp" alt="Isaac" />
        </div>
      </div>
    </Modal>
  );
};

export default AboutMe;