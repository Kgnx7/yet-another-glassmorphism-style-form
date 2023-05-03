import { css } from "@emotion/css";
import { glPadding, glBorderRadius } from "@/shared/styles";

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
  ${glPadding};
  ${glBorderRadius};
`;

interface InputProps {
  label?: string;
  id: string;
  type?: string;
  required?: boolean;
}

export default function Input({ label, id, type, required }: InputProps) {
  return (
    <fieldset className={fieldsetStyles}>
      <label htmlFor={id}>{`${label} ${required ?? false ? "*" : ""}`}</label>
      <input className={inputStyles} id={id} type={type} required={required} />
    </fieldset>
  );
}
