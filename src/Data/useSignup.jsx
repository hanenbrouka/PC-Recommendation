import axios from "axios";
import { useMutation } from "react-query";

export default function useSignup() {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: (values) =>
      axios.post("http://localhost:5000/api/user/signup", values),
  });
}
