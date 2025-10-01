import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterCard from './FooterCard';
import FooterCell from './FooterCell';
import FooterLocation from './FooterLocation';
import FooterMail from './FooterMail';

function Footer() {
  return (
    <footer className="footer-container text-white py-5 px-4 overflow-hidden" data-aos="fade-up">
      
      <div className="row mb-4">
        
        <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center text-start">
          <div className="d-flex align-items-center gap-2">
            <img src="./public/img/logo.svg" alt="FTB logo" style={{ height: '2rem' }} />
            <NavLink to="/Fitness-Training-Business/home" className="text-decoration-none text-white fs-4 fw-bold">FTB</NavLink>
          </div>
          <p className="mt-3 text-muted">Train with purpose. Transform your life.</p>
        </div>

        
        <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center" data-aos="fade-up">
          <h5 className="text-accent fw-bold mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><NavLink to="/Fitness-Training-Business/home" className="text-white text-decoration-none d-block mb-1">Home</NavLink></li>
            <li><NavLink to="/Fitness-Training-Business/programs" className="text-white text-decoration-none d-block mb-1">Programs</NavLink></li>
            <li><NavLink to="/Fitness-Training-Business/blog" className="text-white text-decoration-none d-block mb-1">Blog</NavLink></li>
            <li><NavLink to="/Fitness-Training-Business/contact" className="text-white text-decoration-none d-block mb-1">Contact</NavLink></li>
          </ul>
        </div>

         
        <div className="col-md-4 d-flex flex-column align-items-center" data-aos="fade-left">
          <h5 className="text-accent fw-bold mb-3">Connect With Us</h5>
          <FooterCard />
        </div>
      </div>

      <hr className="my-4 border-secondary border" />
      
      <div className="row text-center">
        <div className="col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0" data-aos="fade-right">
          <FooterLocation />
          <p className="text-accent fw-bold mt-2 mb-1">Location</p>
          <span className="small">441-408 FTB Training Studio</span>
          <span className="small">Sangli, Maharashtra, India</span>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0" data-aos="fade-up">
          <FooterCell />
          <p className="text-accent fw-bold mt-2 mb-1">Phone</p>
          <span className="small">+91 98765 43210</span>
          <span className="small">+91 91234 56789</span>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center" data-aos="fade-left">
          <FooterMail />
          <p className="text-accent fw-bold mt-2 mb-1">Email</p>
          <a href="mailto:Vishal.kore.2208@gmail.com" className="text-white text-decoration-none small">
            Vishal@gmail.com
          </a>
        </div>
      </div>

      <hr className="my-4 border-secondary border" />

      <div className="text-center text-muted small">
        © Copyright 2025 FTB — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
