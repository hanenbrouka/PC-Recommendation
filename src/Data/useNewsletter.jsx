import axios from "axios";
import { useMutation, useQuery } from "react-query";

// Hook pour inscrire un email à la newsletter
export function useInscriptionNewsletter() {
  return useMutation({
    mutationKey: ["inscriptionNewsletter"],
    mutationFn: (values) =>
      axios.post("http://localhost:5000/api/newsletter/inscritNewsletter", values),
  });
}

// Hook pour envoyer des notifications
export function useSendAdminNotification() {
  return useMutation({
    mutationKey: ["sendAdminNotification"],
    mutationFn: (values) =>
      axios.post("http://localhost:5000/api/newsletter/admin/send-notifications", values),
  });
}

// Hook pour récupérer tous les emails de la newsletter
export function useGetAllEmailNews() {
  return useQuery({
    queryKey: ["getAllEmailNews"],
    queryFn: () =>
      axios.get("http://localhost:5000/api/newsletter/admin/getAllMailNews"),
  });
}

// Hook pour récupérer tous les messages de la newsletter
export function useGetAllMessageNews() {
  return useQuery({
    queryKey: ["getAllMessageNews"],
    queryFn: () =>
      axios.get("http://localhost:5000/api/newsletter/admin/getAllMessageNews"),
  });
}
