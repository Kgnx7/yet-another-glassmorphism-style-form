import type React from "react";
import { css } from "@emotion/css";
import { glBorderRadius, glPadding } from "@/shared/styles";

const ButtonStyles = css`
  border: none;
  background-color: white;
  cursor: pointer;
  ${glBorderRadius};
  ${glPadding};
`;

interface ButtonProps {
  children?: React.ReactNode;
  ButtonProps?: Record<string, unknown>;
}

export default function Button({ children, ButtonProps }: ButtonProps) {
  return (
    <button {...ButtonProps} className={ButtonStyles}>
      {children}
    </button>
  );
}
