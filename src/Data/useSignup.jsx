import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export default function useSignup() {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["signup"],
    mutationFn: (values) =>
      axios.post("http://localhost:5000/api/user/signup", values),
    onSuccess: () => {
      alert("Inscription réussie");
      navigate("/login"); // Redirige vers la page de connexion
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Erreur lors de l'inscription");
    },  
  });
}
