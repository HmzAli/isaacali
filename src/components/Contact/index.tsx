import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact main-section">
      <div className="container">
        <h2 className="main-section__title">Let's work together</h2>

        <h4 className="contact__subtitle text-center">Request a project</h4>
        
        <form 
          className="contact__form"
          action="https://formspree.io/f/xldjqkgn"
          method="POST"
        >
          <div className="contact__field">
            <label className="contact__label">
              Your email:
              <input 
                type="email" 
                name="email"
                className="contact__input form-control"
                required
              />
            </label>
          </div>

          <div className="contact__field">
            <label className="contact__label">
              Your message:
              <textarea 
                name="message"
                className="contact__textarea form-control"
                required
              ></textarea>
            </label>
          </div>

          <button type="submit" className="contact__submit btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact 