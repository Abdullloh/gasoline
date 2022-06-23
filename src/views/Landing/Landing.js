import React from "react";
import { Row, Col, Button } from "antd";
import {Link} from 'react-router-dom'
import Carousel from "react-elastic-carousel";
import { StyledLanding } from "../../styles/Landing.style";
import { StyledContainer } from "../../styles/Container.style";
import OilImg from "../../assets/img/home-bg.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import CategoryOil from "../../assets/img/category-oil.svg";
import Tyre from "../../assets/img/tyre.svg";
import Antfreez from "../../assets/img/antfreez.svg";
import Chimical from "../../assets/img/chimical.svg";
import Card from "../../components/TestimonialCard/Card";
import Products from "../../components/NewProducts/Products";
import Discount from "../../components/DiscountSection/Discount";
import Service from "../../components/Servise/Service";
import Main from "../../components/Main";
import useFetchHook from "../../customhooks/useFetchHook";
import News from "../../components/News/News";
import { useTranslation } from "react-i18next";

function Landing() {
  const { t } = useTranslation();
  console.log("landing started");
  let leftSideText = "Добро пожаловать на первую биржу по ГСМ в Узбекистане";
  let leftSidePar =
    "Мы предлагаем моторные, трансмиссионные, гидравлические и компрессорные масла таких брендов, как ROWE, Shell, Micking и Winiron. ";
  const data = [
    {
      title: "Моторные масла",
      imgUrl: CategoryOil,
    },
    {
      title: "Шины под заказ",
      imgUrl: Tyre,
    },
    {
      title: "Масло и тех-жидкости",
      imgUrl: Antfreez,
    },
    {
      title: "Авто-химия",
      imgUrl: Chimical,
    },
  ];
  const carouselBreakpoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const colStyle = {
    width: "100%",
  };
  return (
    <StyledLanding img={OilImg}>
      <Main
        buttonText={"Подробнее"}
        leftSideText={t("p8")}
        leftSidePar={leftSidePar}
        flexDirection={"row"}
      />
      <div className="category-section">
        <StyledContainer>
          <div className="container">
            <News />
            <div className="news_link">
            <Link to="/news">
              <Button type="primary" size="large">Все новости</Button>
            </Link>
            </div>
          </div>
        </StyledContainer>
      </div>
      <Products headTitle={"Новые товары"} />
      <Discount />
      {/* <Products headTitle={"Хиты продаж"} /> */}
      <Service />
    </StyledLanding>
  );
}

export default Landing;
