import logo_img from "../assets/logo-img.png";
import clock from "../assets/footer-clock.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="bg-[#171A1F] footer-section">
          <div className="footer-container">
            <div className="footer-brand ">
              <a href="" className="footer-logo">
                <img src={logo_img} alt="logo-img" className="logo-img" />
                <span>Fitness Forge</span>
              </a>
              <p className="footer-brand-text">
                Unlock your fitness potential with our gym's expertly crafted
                professional workout plans for a transformative fitness journey.
              </p>
              <div className="wrapper">
                <img src={clock} alt="clock" loading="lazy" />
                <ul className="footer-brand-list">
                  <li>
                    <p className="footer-brand-title">Monday-Friday</p>
                    <p>7:00 A.M. - 10:00 P.M.</p>
                  </li>
                  <li>
                    <p className="footer-brand-title">Saturday-Sunday</p>
                    <p>7:00 A.M. - 5:00 P.M.</p>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Our Links</p>
              </li>
              <li>
                <a href="" className="Footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  Blogs
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  Classes
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <address className="address-footer-link">
                  560 Urban Via Suite 195 Friesenville Missouri, USA
                </address>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <a href="#" class="footer-link">
                    1800-121-3637
                  </a>
                </div>
              </li>
              <li class="footer-list-item">
                <div class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <a href="#" class="footer-link">
                  FitnessForge@hotmail.com
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p class="footer-list-title has-before">Tips and Guides</p>
              </li>
              <li class="footer-list-item">
                <div class="fw-recent">
                  <h6>
                    <a href="#">
                      Physial fitness may help prevent depression, anxiety
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 comments</li>
                  </ul>
                </div>
              </li>
              <li class="footer-list-item">
                <div class="fw-recent">
                  <h6>
                    <a href="#">
                      Physical fitness may help prevent depression, anxiety
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 comments</li>
                  </ul>
                </div>
              </li>
              <li>
                <ul class="social-list">
                  <li>
                    <a href="#" class="social-link">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-link">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-link">
                      <i class="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
