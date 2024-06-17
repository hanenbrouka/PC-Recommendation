import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export default function useSignup() {
  const navigate = useNavigate();

  return useMutation(
    (values) => axios.post("http://localhost:5000/api/user/signup", values),
    {
      onSuccess: (response) => {
        if (response.status === 200 || response.status === 201) {
          alert("Inscription réussie");
          navigate("/login"); // Redirige vers la page de connexion
        } else {
          // Gérer d'autres codes de statut comme succès mais non 200 ou 201
          alert("Réponse inattendue lors de l'inscription");
        }
      },
      onError: (error) => {
        alert(error.response?.data?.message || "Erreur lors de l'inscription");
      }
    }
  );
}
