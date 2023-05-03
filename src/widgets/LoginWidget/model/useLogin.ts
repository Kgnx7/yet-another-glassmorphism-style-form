import { useCallback, useRef } from "react";
import type { SyntheticEvent } from "react";

export default function useLogin() {
  const loginFormRef = useRef<null | HTMLFormElement>(null);

  const tryToLogin = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
    console.log(event.target.password.value);

    loginFormRef.current?.reset();
  }, []);

  return { loginFormRef, tryToLogin };
}
