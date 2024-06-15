import React from "react";
import { useForm } from "react-hook-form";
import { useInscriptionNewsletter, useGetAllEmailNews } from "../../Data/useNewsletter";
import { useQueryClient } from "react-query";

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mutation = useInscriptionNewsletter();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        alert("Inscription réussie");
        queryClient.invalidateQueries(["getAllEmailNews"]);
      },
      onError: (error) => {
        alert(error.response.data.message);
      },
    });
  };

  const { data, error, isLoading } = useGetAllEmailNews();

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur lors de la récupération des emails</div>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <h2>Liste des emails inscrits</h2>
      <ul>
        {data.data.map((email, index) => (
          <li key={index}>{email.email}</li>
        ))}
      </ul>
    </div>
  );
}
