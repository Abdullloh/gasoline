import styled from "styled-components";
import COLORS from "../constants/colors";

export const StyledLanding = styled.div`
  background-color: ${COLORS.white};
  .entry-section {
    background-color: ${COLORS.lightGrey};
    /* min-height: calc(100vh - 150px); */
    padding: 50px 0px;
    margin-top: 50px;
    .img-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        display: none;
      }
    }
    .heading-title {
      font-weight: 600;
      font-size: 60px;
      color: ${COLORS.darkGrey};
      line-height: 103.5%;
    }
    .heading-paragraph {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: ${COLORS.darkGrey};
    }
    .headeing-btn {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: ${COLORS.white};
      border-radius: 6px;
      background-color: ${COLORS.main};
      border: none;
      outline: none;
      cursor: pointer;
      width: 215px;
      padding: 14px;
      margin-top: 50px;
    }
    .oilImg {
      width: 100%;
      max-width: 375px;
    }
  }

  .category-section {
    padding-bottom: 40px;
    .rec-arrow{
      display: none;
    }
    .rec-dot {
      border-radius: 2px;
      background-color: ${COLORS.lightGrey};
      width: 6px;
      height: 2px;
      box-shadow: none;
    }
    .rec-dot_active {
      border-radius: 2px;
      background-color: ${COLORS.main};
      width: 16px;
    }
  }

  @media only screen and (max-width: 992px) {
    .headeing-btn {
      display: none;
    }
    .img-block > button {
      display: block !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .entry-section .heading-title {
      font-size: 28px;
    }
    .entry-section .heading-paragraph {
      font-size: 16px;
      line-height: 19px;
    }
    .img-block {
      width: 100%;
      .oilImg{
        max-width: 285px;
      }
      button {
        width: 100% !important;
      }
    }
  }
`;
