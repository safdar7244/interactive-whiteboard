import { useMutation } from "convex/react";
import { useState } from "react";

export const useApiMutation = (mutationFunction: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const apiMutation = useMutation(mutationFunction);

  const mutate = async (payload: any) => {
    try {
      setIsLoading(true);
      const result = await apiMutation(payload);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate,
    isLoading,
  };
};
