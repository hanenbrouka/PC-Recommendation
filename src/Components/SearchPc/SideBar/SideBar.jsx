import React from "react";
import { useForm } from "react-hook-form";
import { BiSearch } from 'react-icons/bi';
import Filtre from "../Filtrage/Filtre";
import '../SideBar/SideBar.css';
import { useInscriptionNewsletter } from "../../../Data/useNewsletter";

function SideBar() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const mutation = useInscriptionNewsletter();

  const onSubmit = (data) => {
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
    <div className="side-container">
      <div className="side-flex-container">
        <div className="newsLetter-container">
          <h6>Join our Newsletter</h6>
          <p>Join our newsletter for updates to the system</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="email-wrapper">
              <div className="email-input">
                <div className="icon-container">
                  <BiSearch />
                </div>
                <input
                  type="email"
                  className="write-email"
                  placeholder="type your email"
                  aria-label="Email for newsletter subscription"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && <p>{errors.email.message}</p>}
              <button type="submit">Activate</button>
            </div>
          </form>
        </div>
        {/* <div className="categorie-chackbox">
          {/* Votre contenu pour les checkboxes */}
        {/* </div> */} 
        {/* <Filtre /> */}
      </div>
    </div>
  );
}

export default SideBar;
