import type { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface LoginFormModel {
  email: string;
  password: string;
}

export const useLogin = () => {
  const mutation = useMutation<unknown, unknown, LoginFormModel>({
    mutationFn: (data) => {
      return axios.post("/login", data);
    },
  });

  const tryToLogin: SubmitHandler<LoginFormModel> = async (data) => {
    mutation.mutate(data);
  };

  return { tryToLogin };
};
