import { glPadding } from "@/shared/styles";
import { css } from "@emotion/css";

const footerStyles = css`
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  ${glPadding};
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
