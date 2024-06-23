import { useQuery } from "react-query";

export default function useFilters() {
  return useQuery({
    queryKey: "filters",
    staleTime: Infinity,
    initialData: {
      min_budget: 1000,
      max_budget: 2660,
      categories: "Laptops",
      num_pcs: 15, // Example value,
    },
  });
}
