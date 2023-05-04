import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface LoginFormModel {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const useLogin = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>();

  const mutation = useMutation<unknown, unknown, LoginFormModel>({
    mutationFn: (data) => {
      setErrorMsg(null);
      return axios.post("/login", data);
    },
    onError: (error) => {
      const errorStatus = axios.isAxiosError(error)
        ? `${error.response?.status} ${error.code}`
        : "";

      setErrorMsg(
        `${errorStatus}: Sorry backend still in progress 🤖. Try again latter 🙃`
      );
    },
  });

  const tryToLogin: SubmitHandler<LoginFormModel> = async (data) => {
    mutation.mutate(data);
  };

  return { tryToLogin, loginInProcess: mutation.isLoading, errorMsg };
};
