import { Glass, Input, Button } from "@/shared/ui";
import { css } from "@emotion/css";
import useLogin from "../model/useLogin";

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
  const { tryToLogin, loginFormRef } = useLogin();

  return (
    <Glass>
      <h2 className={loginWidgetTitle}>Hey, hello 👋</h2>

      <form
        className={logInFormStyles}
        onSubmit={tryToLogin}
        ref={loginFormRef}
      >
        <Input label="Email" id="email" type="email" required />
        <Input label="Password" id="password" type="password" required />
        <Button ButtonProps={{ type: "submit" }}>Login</Button>
      </form>
    </Glass>
  );
}
