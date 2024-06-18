import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import { queryClient } from '../../src/index'; // Assurez-vous d'importer le queryClient de manière appropriée

export default function useMyProfile() {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:5000/api/user', {
        headers: {
          'x-auth-token': token, // Utiliser le bon en-tête d'authentification
        },
      });
      return response.data;
    },
    staleTime: Infinity,
  });
}

export function useUpdateProfile() {
  const { data: me } = useMyProfile(); // Récupérez le profil utilisateur actuel pour obtenir l'ID

  return useMutation(
    async (updatedUser) => {
      const token = Cookies.get('token');
      const userId = updatedUser?.user?.id; // Obtenez l'ID de l'utilisateur à partir des données
      console.log(userId);
      if (!userId) throw new Error('User ID not found');

      const response = await axios.put(`http://localhost:5000/api/user/updateInfo/${userId}`, updatedUser, {
        headers: {
          'x-auth-token': token, // Utiliser le bon en-tête d'authentification
        },
      });
      return response.data;
    }
  );
}
