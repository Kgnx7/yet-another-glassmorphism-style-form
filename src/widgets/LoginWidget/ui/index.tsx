import { css } from "@emotion/css";
import { useForm } from "react-hook-form";
import { Glass, Input, Button } from "@/shared/ui";

import { LoginFormModel, useLogin } from "../model";

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

export default function LoginWidget() {
  const { register, handleSubmit } = useForm<LoginFormModel>();
  const { tryToLogin } = useLogin();

  return (
    <Glass>
      <h2 className={loginWidgetTitle}>Hey, hello 👋</h2>

      <form className={logInFormStyles} onSubmit={handleSubmit(tryToLogin)}>
        <Input
          label="Email"
          type="email"
          registerProps={register("email")}
          required
        />
        <Input
          label="Password"
          type="password"
          registerProps={register("password")}
          required
        />
        <Button ButtonProps={{ type: "submit" }}>Login</Button>
      </form>
    </Glass>
  );
}
