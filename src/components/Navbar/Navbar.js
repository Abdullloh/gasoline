import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Space, Select, Dropdown, Menu, message } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { StyledContainer } from "../../styles/Container.style";
import { NavLink, useNavigate } from "react-router-dom";
import { StyledNavbar } from "./Navbar.style";
import { Col, Row } from "antd";
import Logo from "../../assets/img/logo2.svg";
import Birja from "../../assets/img/Birja.svg";
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
import useFetchHook from "../../customhooks/useFetchHook";
import axios from "axios";
import Axios from "../../utils/axios";
import Basket from "../Basket/Basket";
import { useSelector } from "react-redux";
import HeaderCarousel from "./HeaderCarousel";

const { Search } = Input;
const { Option } = Select;

function Navbar(props) {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const selector = useSelector((state) => state);
  console.log(selector);
  const { user } = selector.signin;
  const [cartList,setCartList] = useState()
  const [hideMenu, setHideMenu] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();
  const getCarts  = async() => {
    try {
      const res = await Axios.get('/cart')
      setCartList(res?.data?.results)
    } catch (error) {
      
    }
  }
  const openModal = async() => {
    getCarts()
      setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(!showModal);
  };

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
  const removeItemFromBasket = async(id) => {
    try {
      const res = await Axios.delete(`/cart/cartitem/${id}`)
      console.log(res);
      if(res.status === 200){
        getCarts() 
      }
    } catch (error) {
      
    }
  };
  const loginToAccount = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    if(user?.token){
      if (user.admin.role == "Customer") {
        navigate("/my-account");
      }
    }else {
      navigate('/sign-in')
    }
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

  useEffect(() => {
    let timer = setTimeout(async () => {
      try {
        const data = await Axios.get(`/products/?search=${search}`);
        console.log(data);
      } catch (error) {}
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  return (
    <>
      <Basket isVisible={props.isVisible} cartList={props.cartList} removeItemFromBasket={props.cartList} handleCancel={props.handleCancel} />
      <StyledNavbar>
        <HeaderCarousel />
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
                <div className="birja_block">
                  <img src={Birja} alt="logo" />
                </div>
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
                <div className="nav-userAccount">
                  <div className="respons-search" onClick={responSearch}>
                    <SearchIcon />
                  </div>
                  <div className="user-account">
                    <button onClick={loginToAccount}>
                      <UserIcon />
                      <span>
                        Личный кабинет
                      </span>
                    </button>
                  </div>
                  <div className="user-shopCart">
                    <button onClick={openModal}>
                      <ShopCartIcon />
                      <span>
                        Корзина
                      </span>
                    </button>
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
            </div>
            <Navigation />
          </div>
        </StyledContainer>
      </StyledNavbar>
      <StyledNavUl>
        <StyledContainer>
          <div className="container">
            <div className="navigation">
              <nav style={{"background-color": "#364A7E"}}>
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
