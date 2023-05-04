import type React from "react";
import { css } from "@emotion/css";
import { Loading } from "@/shared/ui";

const ButtonStyles = css`
  border: none;
  background-color: white;
  cursor: pointer;
  border-radius: var(--base-border-radius);
  padding: 0 var(--base-padding);
  height: var(--base-height);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--palette-primary);
`;

interface ButtonProps {
  children?: React.ReactNode;
  ButtonProps?: Record<string, unknown>;
  loading?: boolean;
}

export default function Button({
  children,
  ButtonProps,
  loading,
}: ButtonProps) {
  return (
    <button {...ButtonProps} className={ButtonStyles} disabled={loading}>
      {loading ? <Loading /> : children}
    </button>
  );
}
