import React from "react";
import Main from "../../components/Main";
import PartnerBodyImage from "../../assets/img/partner-body-img.png";
import PartnerImage from "../../assets/img/partner-bg.png";
import { StyledLanding } from "../../styles/Landing.style";
import BodyInfo from "../../components/BodyInfo/BodyInfo";
import CardList from "../../components/CardList/CardList";
import Bar from "../../assets/img/bar-new.svg";
import Bar1 from "../../assets/img/chart.svg";
import Purchase from "../../assets/img/operator.svg";
import Purchase1 from "../../assets/img/safety.svg";
import Download from "../../assets/img/technic.svg";
import Download1 from "../../assets/img/convenient.svg";
import Product from "../../assets/img/product.svg";
import { Col, Row } from "antd";
import Text from "../../components/Text/Text";
import { StyledContainer } from "../../styles/Container.style";
import Service from "../../components/Servise/Service";
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
    <StyledLanding img={PartnerImage}>
      <Main
        buttonText={"Разместить товар"}
        textColor={"white"}
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
        <div className="container">
          <div className="conveniences_block">
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
                  img={Bar1}
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
                  img={Purchase1}
                  heading={"Быстро"}
                  text={"Быстрая загрузка товара на сайт GAZOIL.UZ"}
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
                  img={Download1}
                  heading={"Удобно"}
                  text={
                    "Получайте заказ от клиента и привозите нам заказанный товар в удобный временной диапазон"
                  }
                />
              </Col>
            </Row>
          </div>

          <Text
            heading={"Продвигайте товары"}
            text={
              "С помощью продвижения ставками вы можете показывать товары бренда и предложения магазинов-партнёров на более выгодных позициях в результатах поиска, товарной карточке и на страницах категорий"
            }
          />
          <Text
            heading={"Один шаг до управления брендом на GAZOIL.UZ"}
            text={
              "Один шаг до управления брендом на сайте, чтобы получить доступ к кабинету производителя, заполните анкету и наши менеджеры свяжутся с вами!"
            }
          />
          <div className="conveniences_block">
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
                  text={"Отображение всех товаров  в каталоге"}
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
                  text={"Удаленный менеджер по обслуживанию"}
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
                  text={"Бесплатная  техническая поддержка"}
                />
              </Col>
            </Row>
          </div>
        </div>
      </StyledContainer>
      <Service />
    </StyledLanding>
  );
};

export default Partner;
