import { css } from "@emotion/css";
import { useForm } from "react-hook-form";
import { Glass, Input, Button } from "@/shared/ui";

import { LoginFormModel, useLogin } from "../model";
import { useEffect } from "react";

const loginWidgetTitle = css`
  margin: 0;
  font-weight: 400;
  margin-bottom: 15px;
  text-align: center;
`;

const logInFormStyles = css`
  display: flex;
  flex-direction: column;
  gap: 35px;

  width: 500px;

  @container (width < 768px) {
    width: 300px;
  }

  @container (width < 400px) {
    width: auto;
  }
`;

const errorMsgStyles = css`
  font-weight: bold;
  font-size: 1.2em;
  color: OrangeRed;
`;

const registrationTipStyles = css`
  display: block;
  text-align: center;
`;

const usefullStuffStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const loginFormKeys: { [key in keyof LoginFormModel]: key } = {
  email: "email",
  password: "password",
  rememberMe: "rememberMe",
};

export default function LoginWidget() {
  const { register, handleSubmit, resetField } = useForm<LoginFormModel>();
  const { tryToLogin, loginInProcess, errorMsg } = useLogin();

  useEffect(() => {
    if (errorMsg !== null) {
      resetField(loginFormKeys.password);
    }
  }, [errorMsg]);

  return (
    <Glass>
      <h2 className={loginWidgetTitle}>Hey, hello 👋</h2>

      <form className={logInFormStyles} onSubmit={handleSubmit(tryToLogin)}>
        <Input<typeof loginFormKeys.email>
          label="Email"
          type="email"
          registerProps={register(loginFormKeys.email)}
          required
        />
        <Input<typeof loginFormKeys.password>
          label="Password"
          type="password"
          registerProps={register(loginFormKeys.password)}
          required
        />
        <div className={usefullStuffStyles}>
          <Input<typeof loginFormKeys.rememberMe>
            label="Remember me"
            type="checkbox"
            registerProps={register(loginFormKeys.rememberMe)}
          />
          <a href="#">Forgot your password?</a>
        </div>
        <Button ButtonProps={{ type: "submit" }} loading={loginInProcess}>
          Login
        </Button>
        <span className={registrationTipStyles}>
          Don't have an account yet? <a href="#">Register now</a>
        </span>
        {errorMsg && <span className={errorMsgStyles}>{errorMsg}</span>}
      </form>
    </Glass>
  );
}
