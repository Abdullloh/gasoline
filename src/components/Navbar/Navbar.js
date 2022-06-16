import React, { useState, useRef } from "react";
import { Button, Input, Space, Select, Dropdown, Menu } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { StyledContainer } from "../../styles/Container.style";
import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./Navbar.style";
import { Col, Row } from "antd";
import Logo from "../../assets/img/logo2.svg";
import Neft from "../../assets/img/neft-logo.svg";
import HomeIcon from "../../assets/img/home-icon.svg";
import CompanyIcon from "../../assets/img/company-icon.svg";
import PartnerIcon from "../../assets/img/partner-icon.svg";
import PurchaserIcon from "../../assets/img/purchaser-icon.svg";
import ProductIcon from "../../assets/img/product-icon.svg";
import Menuicon from "../../assets/img/menu-icon.svg";
import { MenuIcon, SearchIcon } from "../../utils/Images";
import COLORS from "../../constants/colors";
import { UserIcon, ShopCartIcon } from "../../utils/Images";
import { StyledNavUl } from "./NavUl.style";
import Tread from "./Tread";
import Navigation from "./Navigation";

const { Search } = Input;
const { Option } = Select;

function Navbar() {
  const [search, setSearch] = useState("");
  const [hideMenu, setHideMenu] = useState(false);
  const inputRef = useRef();
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const showMenu = () => {
    setHideMenu((prev) => !prev);
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const responSearch = () => {
    setHideMenu(true);
    focusInput();
  };
  const focusInput = () => {
    inputRef.current.focus();
  };

  const menu = (
    <Menu
      items={[
        {
          label: <p>Масло </p>,
          key: "0",
        },
        {
          label: <p> Топливо </p>,
          key: "1",
        },
        {
          label: <p> Смазки</p>,
          key: "2",
        },
      ]}
    />
  );
  return (
    <>
      <StyledNavbar>
        {/* <div className="tread">
          {arr.map((item) => {
            return <Tread key={item} />;
          })}
        </div> */}
        <StyledContainer>
          <div className="container">
            <div className="wrapper">
              <div className="logoBlock">
                <div onClick={showMenu}>
                  <img className="menuIcon" src={Menuicon} alt="icon" />
                </div>
                <a href="#">
                  <img className="logoImg" src={Logo} alt="Logo" />
                </a>
              </div>
              <div>
                <button className="catalog-btn">
                  <MenuOutlined className="catalog-icon" />
                  Весь каталог
                </button>
              </div>
              <div>
                <div className="searchBlock" onClick={focusInput}>
                  <input
                    type="text"
                    value={search}
                    onChange={handleInput}
                    ref={inputRef}
                    placeholder="Поиск по товарам"
                  />
                  <SearchOutlined
                    style={{
                      fontSize: 20,
                      color: `${COLORS.black}`,
                    }}
                  />
                </div>
              </div>
              <div>
                <Select
                  className="select-city"
                  defaultValue="Ташкент"
                  size="large"
                  bordered="false"
                >
                  <Option value="москва">Москва</Option>
                  <Option value="москва">Москва</Option>
                </Select>
              </div>
              <div>
                <div className="nav-userAccount">
                  <div className="respons-search" onClick={responSearch}>
                    <SearchIcon />
                  </div>
                  <div className="user-account">
                    <UserIcon />
                  </div>
                  <div className="user-shopCart">
                    <ShopCartIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledContainer>
        <StyledContainer>
          <div
            className="respons-menu"
            style={{ top: hideMenu ? "95px" : "-600px" }}
          >
            <div>
              <div className="searchBlock" onClick={focusInput}>
                <input
                  type="text"
                  value={search}
                  onChange={handleInput}
                  ref={inputRef}
                  placeholder="Поиск по товарам"
                />
                <SearchOutlined
                  style={{
                    fontSize: 20,
                    color: `${COLORS.black}`,
                  }}
                />
              </div>
              <Row gutter="10">
                <Col>
                  <button className="catalog-btn">
                    <MenuOutlined className="catalog-icon" />
                    Весь каталог
                  </button>
                </Col>
                <Col>
                  <Select
                    className="select-city"
                    defaultValue="Ташкент"
                    size="large"
                    bordered="false"
                  >
                    <Option value="москва">Москва</Option>
                    <Option value="москва">Москва</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <Navigation />
          </div>
        </StyledContainer>
      </StyledNavbar>
      <StyledNavUl>
        <StyledContainer>
          <div className="container">
            <div className="navigation">
              <nav>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="nav_link" to="/">
                    <img src={Neft} />
                    <Dropdown overlay={menu} placement="bottomLeft">
                      <Space>Нефтепродукты</Space>
                    </Dropdown>
                  </div>
                </div>
                <div>
                  <NavLink className="nav_link" to="/">
                    <img src={HomeIcon} />
                    Главная
                  </NavLink>
                </div>
                <div>
                  <NavLink className="nav_link" to="/about">
                    <img src={CompanyIcon} />О компании
                  </NavLink>
                </div>
                <div>
                  <NavLink className="nav_link" to="/partner">
                    <img src={PartnerIcon} />
                    Для партнеров
                  </NavLink>
                </div>
                <div>
                  <NavLink className="nav_link" to="/service">
                    <img src={PurchaserIcon} />
                    Покупателям
                  </NavLink>
                </div>
                <div>
                  <NavLink className="nav_link" to="/products">
                    <img src={ProductIcon} />
                    Товары
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </StyledContainer>
      </StyledNavUl>
    </>
  );
}

export default Navbar;
