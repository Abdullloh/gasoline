import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledFooter = styled.footer`
  padding: 100px 0;
  margin-top: 100px;
  background-color: ${COLORS.main};
  .navigation,
  .contact {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${COLORS.white};
  }
  .navigation {
    p {
      cursor: pointer;
    }
  }
  .footer_heading {
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: ${COLORS.black};
  }
  .footer_social_heading {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${COLORS.lightBlack};
  }
  .social_icons {
    display: flex;
    align-items: center;
    justify-content: start;
    div {
      margin: 0 4px;
      width: 39px;
      height: 39px;
      border-radius: 39px;
      background-color: ${COLORS.white};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 10px;
      }
    }
  }
  .message_btn {
    background-color: ${COLORS.white};
    border-radius: 6px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: ${COLORS.main};
    border: none;
    outline: none;
    padding: 14px 30px;
  }
  @media only screen and (max-width: 768px) {
      padding: 28px 0;
  }
`;
