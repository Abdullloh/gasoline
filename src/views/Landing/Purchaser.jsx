import React from "react";
import Main from "../../components/Main";
import OilBallon from "../../assets/img/oilBalloon.svg";
import { StyledLanding } from "../../styles/Landing.style";
import BodyInfo from "../../components/BodyInfo/BodyInfo";
import CardList from "../../components/CardList/CardList";
import Bar from "../../assets/img/bar.svg";
import Purchase from "../../assets/img/purchase.svg";
import Download from "../../assets/img/download.svg";
import Product from "../../assets/img/product.svg";
import { Col, Row } from "antd";
import Text from "../../components/Text/Text";
import { StyledContainer } from "../../styles/Container.style";
import Service from "../../components/Servise/Service";
const Purchaser = () => {
  let leftSideText =
    "GAZOIL ОНЛАЙН ТОРГОВЫЙ ЦЕНТР НЕФТЕННЫХ ПРОДУКЦИЙ   В УЗБЕКИСТАНЕ";
  let style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <StyledLanding>
      <Main
        leftSideText={leftSideText}
        buttonText={"Купить товар"}
        flexDirection={"column"}
        isFlexTrue={true}
      />
      <BodyInfo
        img={OilBallon}
        title="Для покупателей"
        subtitle="GASOIL это огромный маркетплейс в интернете нефтяных продукций"
        subtitleSecond="Это уникальная база товаров и услуг от разных компаний, собранных в одном месте. С помощью нас вы сможете найти самый широкий ассортимент товаров и услуг и заказать их непосредственно на нашем сайте или на сайте поставщика."
        subtitleThird="Теперь Вам необязательно посещать разные сайты по отдельности, так как все товары и услуги доступны в каталоге нашего маркетплейса"
      />
      <StyledContainer>
        <div className="container">
          <Row>
            <Col
              style={style}
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={{
                span: 8,
                offset: 0,
              }}
            >
              <CardList
                img={Bar}
                heading={"Выгодно"}
                text={
                  "Вам не надо создавать свой собственный интернет-магазин для онлайн продаж"
                }
              />
            </Col>
            <Col
              style={style}
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={{
                span: 8,
                offset: 0,
              }}
            >
              <CardList
                img={Purchase}
                heading={"Выгодно"}
                text={
                  "Вам не надо создавать свой собственный интернет-магазин для онлайн продаж"
                }
              />
            </Col>
            <Col
              style={style}
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={{
                span: 8,
                offset: 0,
              }}
            >
              <CardList
                img={Download}
                heading={"Выгодно"}
                text={
                  "Вам не надо создавать свой собственный интернет-магазин для онлайн продаж"
                }
              />
            </Col>
          </Row>
        </div>
      </StyledContainer>
      <Service />
    </StyledLanding>
  );
};

export default Purchaser;
