import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledNavUl = styled.nav`
  display: block;
  background: ${COLORS.main};
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      padding: 20px 48px;
    }
  }
  .nav_link {
    font-weight: 400;
    font-size: 23px;
    line-height: 27px;
    transition: all 0.3s ease-in-out;
    color: ${COLORS.white};
    &:hover {
      color: ${COLORS.black};
    }
  }
  /* .active {
    color: ${COLORS.main};
  } */
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
