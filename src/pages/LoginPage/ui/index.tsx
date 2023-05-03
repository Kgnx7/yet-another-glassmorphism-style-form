import { css } from "@emotion/css";
import { LoginWidget } from "@/widgets";
import BusinessCatWebP from "@/shared/assets/images/business.webp";
import BusinessCatPng from "@/shared/assets/images/business.png";
import { Footer } from "@/shared/ui";
import { glPadding } from "@/shared/styles";

const pageStyles = css`
  min-height: 100vh;
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #6dd5fa,
    #2980b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #6dd5fa,
    #2980b9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  container-type: inline-size;
  ${glPadding};

  @media (max-width: 425px) {
    align-items: stretch;
  }
`;

const pageTitleStyles = css`
  color: white;
  font-size: 6rem;
  transform: translateY(40%);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
    transform: translateY(30%);
  }

  @media (max-width: 425px) {
    font-size: 2rem;
    transform: translateY(0);
  }
`;

const picturesStyles = css`
  transform: translate(-100%, -10%) rotate(-20deg);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 425px) {
    transform: translate(0%, -10%) rotate(0deg);
  }
`;

export default function LogInPage() {
  return (
    <>
      <main className={pageStyles}>
        <h1 className={pageTitleStyles}>Best calls service</h1>

        <LoginWidget />

        <picture>
          <source srcSet={BusinessCatWebP} />
          <img
            className={picturesStyles}
            src={BusinessCatPng}
            alt="funny cat"
            width="150px"
            height="150px"
          />
        </picture>
      </main>
      <Footer />
    </>
  );
}
