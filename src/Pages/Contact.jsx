import React from 'react';

function Contact() {
  return (
    <section className="contact-section py-5 text-white">
      <div className="container">
        <h2 className="text-center text-accent fw-bold mb-4">Contact Us</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">Name</label>
                <input type="text" className="form-control bg-dark text-white border-0" id="name" placeholder="Your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Email address</label>
                <input type="email" className="form-control bg-dark text-white border-0" id="email" placeholder="name@example.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label text-light">Subject</label>
                <input type="text" className="form-control bg-dark text-white border-0" id="subject" placeholder="Subject" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-light">Message</label>
                <textarea className="form-control bg-dark text-white border-0" id="message" rows="5" placeholder="Your message"></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-accent px-4 fw-bold">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
