import React from "react";
import { Row, Col, Button } from "antd";
import Carousel from "react-elastic-carousel";
import Navbar from "../components/Navbar/Navbar";
import { StyledLanding } from "../styles/Landing.style";
import { StyledContainer } from "../styles/Container.style";
import { OilImage } from "../utils/Images";
import OilImg from "../assets/img/oil-img.svg";
import PageHeader from "../components/PageHeader/PageHeader";
import CategoryOil from "../assets/img/category-oil.svg";
import Tyre from "../assets/img/tyre.svg";
import Antfreez from "../assets/img/antfreez.svg";
import Chimical from "../assets/img/chimical.svg";
import Card from "../components/TestimonialCard/Card";
import Products from "../components/NewProducts/Products";
import Discount from "../components/DiscountSection/Discount";
import Service from "../components/Servise/Service";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main";
import Partner from "./Partner";

function Landing() {
  let leftSideText = "Высоко качественные моторные масла";
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
    <StyledLanding>
      <Main
        img={OilImg}
        buttonText={"Продукция"}
        leftSideText={leftSideText}
        leftSidePar={leftSidePar}
        flexDirection={"row"}
      />
      <div className="category-section">
        <StyledContainer>
          <div className="container">
            <PageHeader title="Категории товаров" />
            {/* <Row gutter={16}>
              {data?.map((item, index) => (
                <Col span={6} key={index}>
                  <Card data={item} />
                </Col>
              ))}
            </Row> */}
            <Carousel breakPoints={carouselBreakpoint}>
              {data?.map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </Carousel>
          </div>
        </StyledContainer>
      </div>
      <Products headTitle={"Новые товары"} />
      <Discount />
      <Products headTitle={"Хиты продаж"} />
      <Service/>
    </StyledLanding>
  );
}

export default Landing;
