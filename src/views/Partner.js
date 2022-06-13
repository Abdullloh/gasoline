import React, { useState } from "react";
import Main from "./Main";
import PartnerBodyImage from "../assets/img/PartnerBodyImage.svg";
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
const Partner = () => {
  let leftSideText = "Развивайте бизнес и зарабатывайте вместе с нами";
  const [cards, setCards] = useState([1, 2, 3]);
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
      {/* <BodyInfo img={PartnerBodyImage} /> */}
      <StyledContainer>
        <div className="contaier">
          <Row>
            {cards.map((item, index) => (
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
                key={index}
              >
                <CardList
                  img={Purchase}
                  heading={"Выгодно"}
                  text={
                    "Вам не надо создавать свой собственный интернет-магазин для онлайн продаж"
                  }
                />
              </Col>
            ))}
          </Row>
        </div>
      </StyledContainer>
      {/* <Text
        heading={"Продвигайте товары"}
        key={"as"}
        text={
          "С помощью продвижения ставками вы можете показывать товары бренда и предложения магазинов-партнёров на более выгодных позициях в результатах поиска, товарной карточке и на страницах категорий"
        }
      />
      <Text
        heading={"Продвигайте товары"}
        key={"as2"}
        text={
          "С помощью продвижения ставками вы можете показывать товары бренда и предложения магазинов-партнёров на более выгодных позициях в результатах поиска, товарной карточке и на страницах категорий"
        }
      /> */}
      {/* <Row>
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
      </Row> */}
    </StyledLanding>
  );
};

export default Partner;
