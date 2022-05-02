import React from 'react';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import pinterest from '../../images/pinterest.svg';
import email from '../../images/email.svg';
import './Footer.css';

function Footer() {
  return (
    <div class='footer'>
      <div class='container-fluid margin-inline-auto'>
        <div className='social-links-and-contact'>
          <div className='social-links-images'>
            <img class='social-link-image' src={facebook} />

            <img class='social-link-image' src={linkedin} />

            <img class='social-link-image' src={pinterest} />

            <img class='social-link-image' src={email} />
          </div>

          <div className='personal-contact'>
            <h4>Phone: XXXXXX</h4>
            <h4>Email: XXXXX@gmail.com</h4>
          </div>
        </div>

        <div class='footer-bottom-row'>
          <div class='company-information'>
            <h3>XXXX</h3>
            <h4>Copyright &copy; 2021</h4>
            <h4>NY</h4>
          </div>

          <div class='home-footer'>
            <h4>
              <a href='#'>Home</a>
            </h4>
          </div>

          <div class='portfolio-footer'>
            <h4>
              <a href='#'>Portfolio</a>
            </h4>
            <ul>
              <li>
                <a href='#'>Project1</a>
              </li>
              <li>
                <a href='#'>Project2</a>
              </li>
              <li>
                <a href='#'>Project3</a>
              </li>
              <li>
                <a href='#'>See All</a>
              </li>
            </ul>
          </div>

          <div class='resume-footer'>
            <h4>
              <a href='#'>Resume</a>
            </h4>
            <ul>
              <li>
                <a href='#'>Download</a>
              </li>
            </ul>
          </div>

          <div class='contact-footer'>
            <h4>
              <a href='#'>Contact</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
