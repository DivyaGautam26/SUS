import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './style.css';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        {/* Left */}
        <div className="me-3 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="#" className="me-3 text-reset">
            <FaFacebookF />
          </a>
          <a href="#" className="me-3 text-reset">
            <FaTwitter />
          </a>
          <a href="#" className="me-3 text-reset">
            <FaGoogle />
          </a>
          <a href="#" className="me-3 text-reset">
            <FaInstagram />
          </a>
          <a href="#" className="me-3 text-reset">
            <FaLinkedin />
          </a>
          <a href="#" className="me-3 text-reset">
            <FaGithub />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Contact */}
      <section className="">
        <div className="container text-center text-md-start mt-3">
          {/* Grid row */}
          <div className="row mt-2">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-2">
                <i className="fas fa-gem me-2"></i>GreenHub
              </h6>
              <p>
              Innovating for a Sustainable Tomorrow,Empowering the Future, Today
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
              {/* Contact */}
              <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
              <p><i className="fas fa-home me-2"></i> Hyderabad,India</p>
              <p>
                <i className="fas fa-envelope me-2"></i>
                contact@greenhubtech.in
              </p>
              <p><i className="fas fa-phone me-2"></i> +91 42 9214 5228</p>
              <p><i className="fas fa-print me-2"></i>+91 22 3972 4973 </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Contact */}

      {/* Copyright */}
      <div className="text-center p-2">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">GreenHub</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
