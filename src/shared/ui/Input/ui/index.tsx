import { css } from "@emotion/css";
import type { UseFormRegisterReturn } from "react-hook-form";

const fieldsetStyles = css`
  border: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const inputStyles = css`
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  height: var(--base-height);
  padding: 0 var(--base-padding);
  border-radius: var(--base-border-radius);
`;

interface InputProps<InputName extends string> {
  label?: string;
  type?: string;
  registerProps: UseFormRegisterReturn<InputName>;
  required?: boolean;
}

export default function Input<InputName extends string>({
  label,
  type,
  registerProps,
  required,
}: InputProps<InputName>) {
  return (
    <fieldset className={fieldsetStyles}>
      <label htmlFor={registerProps.name}>{`${label} ${
        required ?? false ? "*" : ""
      }`}</label>
      <input
        className={inputStyles}
        type={type}
        required={required}
        {...registerProps}
      />
    </fieldset>
  );
}
