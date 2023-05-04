import type React from "react";
import { css, cx } from "@emotion/css";

const glassCardStyles = css`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(8px);

  color: white;
  padding: 40px 30px;

  border-radius: var(--base-border-radius);
`;

interface GlassProps {
  children?: React.ReactNode;
}

export default function Glass({ children }: GlassProps) {
  return <div className={cx(glassCardStyles)}>{children}</div>;
}
