import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledHeaderCarousel = styled.div`
  .carousel_outer {
    height: 100px;
    width: 98vw;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 10px;
    .carousel_inner {
      display: block;
      width: 200%;
      position: absolute;
      animation: marquee 30s linear infinite;
      span {
        float: left;
        display: flex;
        align-items: stretch;
        width: 50%;
      }
      &:hover {
        animation-play-state: paused;
      }
    }
  }

  .card {
    width: 160px;
    border-left: 0.5px solid ${COLORS.white};
    border-right: 0.5px solid ${COLORS.white};
    background-color: ${COLORS.main};
    padding: 7px;
    .text_block {
      width: 145px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: ${COLORS.white};
      }
    }
    .price {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: ${COLORS.white};
    }
    .increasing {
      text-align: start;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: ${COLORS.lightGreen};
    }
    .decreasing {
      text-align: start;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: ${COLORS.lightRed};
    }
  }
  @keyframes marquee {
    0% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
