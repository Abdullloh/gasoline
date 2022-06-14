import React from "react";
import Main from "../components/Main";
import PartnerBodyImage from "../assets/img/oilBalloon.svg";
import PartnerImage from "../assets/img/Partnerimage.svg";
import { StyledLanding } from "../styles/Landing.style";
import BodyInfo from "../components/BodyInfo/BodyInfo";
import CardList from "../components/CardList/CardList";
import Bar from "../assets/img/bar.svg";
import Purchase from "../assets/img/purchase.svg";
import Download from "../assets/img/download.svg";
import Product from "../assets/img/product.svg";
import { Col, Row } from "antd";
import Text from "../components/Text/Text";
import { StyledContainer } from "../styles/Container.style";
import Service from "../components/Servise/Service";
const Partner = () => {
  let leftSideText = "Развивайте бизнес и зарабатывайте вместе с нами";
  let leftSidePar =
    "Получайте заказы от клиентов, привозите товар и получайте большe прибыли от онлайн продаж";
  let style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <StyledLanding>
      <Main
        img={PartnerImage}
        buttonText={"Добавить товар"}
        leftSideText={leftSideText}
        leftSidePar={leftSidePar}
      />
      <BodyInfo
        img={PartnerBodyImage}
        title="Партнёрская сеть — это выгодно и просто!"
        subtitle="GASOIL предоставляет магазинам и предпринимателям возможность получить полный комплекс услуг на одной площадке."
        subtitleSecond="Вам не надо тратиться на маркетинг, искать различные источники трафика. Мы предоставим вам вышеперечисленные услуги и гарантирукм."
        subtitleThird="Благодаря нативности инструментов средний CTR на площадках наших партнёров — 9%. В некоторых случаях этот показатель достигает "
      />
      <StyledContainer>
        <div className="contaier">
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
          <Text
            heading={"Продвигайте товары"}
            text={
              "С помощью продвижения ставками вы можете показывать товары бренда и предложения магазинов-партнёров на более выгодных позициях в результатах поиска, товарной карточке и на страницах категорий"
            }
          />
          <Text
            heading={"Продвигайте товары"}
            text={
              "С помощью продвижения ставками вы можете показывать товары бренда и предложения магазинов-партнёров на более выгодных позициях в результатах поиска, товарной карточке и на страницах категорий"
            }
          />
          <Row>
            <Col
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
                img={Product}
                heading={"Выгодно"}
                text={
                  "Вам не надо создавать свой собственный интернет-магазин для онлайн продаж"
                }
              />
            </Col>
            <Col
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
                img={Product}
                heading={"Выгодно"}
                text={
                  "Вам не надо создавать свой собственный интернет-магазин для онлайн продаж"
                }
              />
            </Col>
          </Row>
        </div>
      </StyledContainer>
      <Service/>
    </StyledLanding>
  );
};

export default Partner;
