import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledNavbar = styled.div`
  background-color: ${COLORS.white};
  margin: 0px;
  min-height: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
  box-shadow: 0px 7px 65px rgba(0, 0, 0, 0.06);
  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav_link {
    font-weight: 400 !important;
    font-size: 23px !important;
    line-height: 27px !important;
    transition: all 0.3s ease-in-out;
    color: ${COLORS.white} !important;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      padding: 10px 0px;
    }
  }
  .active {
    color: ${COLORS.main} !important;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 555;
  }
  .logoBlock {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menuIcon {
    width: 95px;
    height: 28px;
    cursor: pointer;
    display: none;
  }
  .logoImg {
    width: 100%;
    max-width: 75px;
  }
  .catalog-btn {
    font-size: 18px;
    font-weight: 500;
    background-color: ${COLORS.main};
    color: ${COLORS.white};
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: auto auto;
    padding-left: 25px;
    padding-right: 25px;
    max-width: 225px;
    width: 100%;
    height: 42px;
    .catalog-icon {
      margin-right: 10px;
    }
  }
  .searchBlock {
    max-width: 500px;
    width: 100%;
    height: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f4f7fa;
    border-radius: 10px;
    padding: auto 0;
    padding-left: 25px;
    padding-right: 25px;
    cursor: pointer;
    input {
      background-color: transparent;
      width: 100%;
      height: 22px;
      color: ${COLORS.grey};
      font-weight: 500;
      font-size: 18px;
      border: none;
      outline: none;
    }
  }
  .select-city {
    .ant-select-selector {
      border: none !important;
      outline: none !important;
    }
    .ant-select-selection-search {
      outline: none !important;
    }
    .ant-select-arrow {
      color: ${COLORS.black} !important;
    }
  }
  .nav-userAccount {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      cursor: pointer;
    }
    .respons-search {
      display: none;
    }
  }

  .respons-menu {
    background-color: ${COLORS.black};
    padding: 15px;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 5;
    transition: all 0.3s ease-in-out;
    .searchBlock {
      margin: 25px 0;
    }
  }

  @media screen and (max-width: 992px) {
    .wrapper {
      .catalog-btn,
      .searchBlock,
      .select-city {
        display: none;
      }
    }
    .menuIcon,
    .nav-userAccount > .respons-search {
      display: block;
    }
  }
`;
