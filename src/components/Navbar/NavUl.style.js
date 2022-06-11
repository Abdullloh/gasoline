import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledNavUl = styled.nav`
  display: block;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      padding: 20px 0px;
    }
  }
  .nav_link {
    font-weight: 400;
    font-size: 23px;
    line-height: 27px;
    transition: all 0.3s ease-in-out;
    color: ${COLORS.black};
    &:hover {
      color: ${COLORS.main};
    }
  }
  .active {
    color: ${COLORS.main};
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
