import axios from "axios";
import { useMutation, useQuery } from "react-query";
import useFilters from "./useFilters";

export default function usePredict() {
  const filters = useFilters().data;

  const url = new URL("http://localhost:8000/predict");

  url.searchParams.set("min_budget", filters.min_budget);
  url.searchParams.set("max_budget", filters.max_budget);
  url.searchParams.set("categories", filters.categories);
  url.searchParams.set("num_pcs", filters.num_pcs);

  return useQuery({
    queryFn: () => axios.get(url.toString()).then((response) => response.data),
  });
}
