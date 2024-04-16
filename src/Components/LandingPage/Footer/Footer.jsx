import React from "react";
import { FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import "../Footer/Footer.css";
import { AiOutlineSend } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    
      <footer className="footer">
        <div className="footerPart">
          <h3 className="footerTitle">PC Recommendation</h3>

          <div className="footer1">
            <h3>PC Recommendation</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <div className="footericons">
              <div className="icons">
                <a href="#" aria-label="Twitter" className="iconfooter">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Facebook" className="iconfooter">
                  <BsFacebook />
                </a>
                <a href="#" aria-label="Telegram" className="iconfooter">
                  <FaTelegramPlane />
                </a>
                <a href="#" aria-label="YouTube" className="iconfooter">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <p className="copyright">
              Copyrigh © {new Date().getFullYear()} Envast. All rights
            </p>
          </div>
          <div className="Presources">
            <div className="resourcess">
              <p className="Presources">Resource</p>

              <p>
                <a href="#">Blogs</a>
              </p>
              <p>
                <a href="#">Help and Center</a>
              </p>
              <p>
                <a href="#">FaQs</a>
              </p>
            </div>
            <div className="subscribe">
              <h4>Subscribe Us</h4>
              <p>
                Signup for our newsletter to get the latest news in your inbox.
              </p>
              <form action="#">
                <div className="input1">
                  <input
                    type="email"
                    placeholder="Info@yourgmail.com"
                    aria-label="Email for newsletter subscription"
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">
                    <AiOutlineSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    
  );
};
export default Footer;
