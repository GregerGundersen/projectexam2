import styled from "styled-components";
import { spacing, colors, fonts } from "../../App.styled";

export const FooterStyled = styled.footer`
  margin-top: ${spacing.space8};
  display: flex;
  justify-content: space-around;
  padding: ${spacing.space4};

  .footer_logo {
    h2 {
      color: ${colors.green600};
      font-weight: 300;
      font-size: 40px;
    }
    h3 {
      color: ${colors.dark400};
      font-weight: 200;
      font-size: 20px;
    }
  }

  .footer_links {
    display: flex;
    justify-content: space-around;
    gap: ${spacing.space8};
    h2 {
      font-family: ${fonts.Alice};
      font-weight: 200;
    }

    .footer_links__contact__socials {
      display: flex;
      gap: ${spacing.space2};
      margin: ${spacing.space3} 0;

      .fb {
        fill: #075299;
      }

      .ig {
        fill: #d6249f;
      }

      .tw {
        fill: #1da1f2;
      }
    }

    .footer_links__helpful {
      h2 {
        margin-bottom: ${spacing.space2};
      }

      .footer_links__helpful__links {
        display: flex;
        flex-direction: column;
        gap: ${spacing.space2};

        button {
          background-color: ${colors.green400};
          border: none;
          padding: ${spacing.space1};
          color: ${colors.light200};
        }
      }
    }
  }
`;
