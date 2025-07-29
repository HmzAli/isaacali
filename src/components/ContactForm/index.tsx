import './ContactForm.scss';
import { useRef, useState, FormEvent } from 'react';

type FormStatus = {
  message: string;
  isError: boolean;
  isSuccess: boolean;
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>({
    message: '',
    isError: false,
    isSuccess: false
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ message: '', isError: false, isSuccess: false });

    if (!formRef.current) return;

    try {
      const response = await fetch(formRef.current.action, {
        method: 'POST',
        body: new FormData(formRef.current),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus({ 
          message: `Message sent. \nI will contact you shortly!`, 
          isError: false, 
          isSuccess: true 
        });
        formRef.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        message: 'Error sending message. Please try again or send your message to plomenet[at]gmail.com', 
        isError: true, 
        isSuccess: false 
      });
      console.error(error);
    }
  };

  return (
    <div className="contact-form">
      <form 
        ref={formRef}
        action="https://formspree.io/f/xldjqkgn" 
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="input-wrapper">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="text-danger">*</span>
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="fullName" 
            name="fullName" 
            maxLength={50} 
            required 
          />
        </div>
        
        <div className="input-wrapper">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            maxLength={100} 
            required 
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input 
            type="tel" 
            className="form-control" 
            id="phoneNumber" 
            name="phoneNumber" 
            maxLength={50} 
          />
        </div>
        
        <div className="input-wrapper">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea 
            className="form-control" 
            id="message" 
            name="message" 
            maxLength={800}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>

        {status.message && (
          <div className={`mt-3 alert ${status.isError ? 'alert-danger' : 'alert-success'}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;