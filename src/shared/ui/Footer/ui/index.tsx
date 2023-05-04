import { css } from "@emotion/css";

const footerStyles = css`
  background: #0f2027;
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);

  padding: 30px var(--base-padding);
`;

const footerLinkStyles = css`
  color: white;

  &:visited {
    color: gret;
  }
`;

export default function Footer() {
  return (
    <footer className={footerStyles}>
      <a
        href="https://www.flaticon.com/free-stickers/finance"
        title="finance stickers"
        target="_blank"
        className={footerLinkStyles}
      >
        Finance stickers created by Stickers - Flaticon
      </a>
    </footer>
  );
}
