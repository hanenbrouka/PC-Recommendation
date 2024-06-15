import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineSend } from "react-icons/ai";
import { FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import "../Footer/Footer.css";
import { useInscriptionNewsletter } from "../../../Data/useNewsletter";

const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const mutation = useInscriptionNewsletter();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data, {
      onSuccess: () => {
        alert("Inscription réussie");
        reset(); // Réinitialiser le formulaire après une soumission réussie
      },
      onError: (error) => {
        alert(error.response?.data?.message || "Erreur lors de l'inscription");
      },
    });
  };

  return (
    <footer className="footer">
      <div className="footerPart">
        <h3 className="footerTitle">PC Recommendation</h3>

        <div className="footer1">
          <h3>PC Recommendation</h3>
          <p>
            Our website's main aim is to aid you in finding the optimal PC that aligns with your needs.
            By conveniently filtering your search according to your budgetary preferences, you can discover the ideal computer at a reasonable price.
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
            Copyright © {new Date().getFullYear()} Envast. All rights
          </p>
        </div>

        <div className="PPresources">
          <div className="resourcess">
            <p className="ppp">Resource</p>
            <p>
              <a className="vvv" href="#">Blogs</a>
            </p>
            <p>
              <a className="vvv" href="#">Help and Center</a>
            </p>
            <p>
              <a className="vvv" href="#">FaQs</a>
            </p>
          </div>
        </div>

        <div className="subscribe">
          <h4>Subscribe Us</h4>
          <p>
            Signup for our newsletter to get the 
            latest news in your inbox.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input1">
              <input
                type="email"
                placeholder="Info@yourgmail.com"
                aria-label="Email for newsletter subscription"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p>{errors.email.message}</p>}
              <button type="submit" aria-label="Subscribe to newsletter">
                <AiOutlineSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
