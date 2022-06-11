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

function Landing() {
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
     width: '100%',
 }
  return (
    <StyledLanding>
      <div className="entry-section">
        <StyledContainer>
          <div className="container">
            <Row
              style={{
                "align-items": "center",
                "justify-content": "space-between",
              }}
            >
              <Col
              style={colStyle}
                sm={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 12,
                  offset: 0,
                }}
              >
                <h1 className="heading-title">
                  Высоко качественные моторные масла
                </h1>
                <p className="heading-paragraph">
                  Мы предлагаем моторные, трансмиссионные, <br /> гидравлические
                  и компрессорные масла таких <br /> брендов, как ROWE, Shell,
                  Micking и Winiron.
                </p>
                <button className="headeing-btn">Продукция</button>
              </Col>
              <Col
              style={colStyle}
                sm={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 12,
                  offset: 0,
                }}
              >
                <div className="img-block">
                  <img src={OilImg} alt="oil" className="oilImg" />
                  <button className="headeing-btn">Продукция</button>
                </div>
              </Col>
            </Row>
          </div>
        </StyledContainer>
      </div>
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
                <Card data={item} key={index}/>
              ))}
            </Carousel>
          </div>
        </StyledContainer>
      </div>
      <Products headTitle={'Новые товары'}/>
      <Discount/>
      <Products headTitle={'Хиты продаж'}/>
      <Service/>
    </StyledLanding>
  );
}

export default Landing;
