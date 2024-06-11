import axios from "axios";
import { useMutation } from "react-query";

export default function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (values) =>
      axios.post("http://localhost:5000/api/user/login", values),
  });
}
