import { useMutation, useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { queryClient } from "../../src/index"; // Assurez-vous d'importer le queryClient de manière appropriée

export default function useMyProfile() {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:5000/api/user", {
        headers: {
          "x-auth-token": token, // Utiliser le bon en-tête d'authentification
        },
      });
      return response.data;
    },
    staleTime: Infinity,
  });
}
export function useUpdateProfile() {
  return useMutation(
    async (updatedUser) => {
      const token = Cookies.get("token");
      const response = await axios.put("http://localhost:5000/api/user/update", updatedUser, {
        headers: {
          "x-access-token": token, // Utiliser le bon en-tête d'authentification
        },
      });
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("me"); // Ré-invalider la requête "me" pour mettre à jour les données du profil utilisateur
      },
    }
  );
}