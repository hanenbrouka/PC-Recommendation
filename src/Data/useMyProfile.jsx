import { useQuery } from "react-query";

export default function useMyProfile() {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => {},
    staleTime: Infinity,
  });
}
