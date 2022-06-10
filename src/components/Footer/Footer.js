import { Col, Row } from "antd";
import React from "react";
import { StyledContainer } from "../../styles/Container.style";
import { StyledFooter } from "./Footer.style";
import InstagramIcon from "../../assets/img/instagram.svg";
import FacebookIcon from "../../assets/img/facebook.svg";

function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <div className="container">
          <Row gutter={[30, 30]}>
            <Col
              sm={{
                span: 24,
              }}
              lg={{
                span: 6,
              }}
            >
              <div className="navigation">
                <h4 className="footer_heading">Страницы</h4>
                <p>Главная</p>
                <p>О компании</p>
                <p> Для партнеров</p>
                <p> Покупателям</p>
                <p> Магазин</p>
              </div>
            </Col>
            <Col
              sm={{
                span: 24,
              }}
              lg={{
                span: 12,
              }}
            >
              <div className="contact">
                <h4 className="footer_heading">Контакты</h4>
                <p>Андрес: г. Ташкент, массив Себзор Ц 17/18, кв. 137</p>
                <p>О Эл. почта: gazoil2@gmail.com </p>
                <p> Телефон: +998 77 777 73 13</p>
              </div>
            </Col>
            <Col
              sm={{
                span: 24,
              }}
              lg={{
                span: 6,
              }}
            >
              <div className="socials_media">
                <div>
                  <h4 className="footer_social_heading">
                    Мы в социальных сетях
                  </h4>
                  <div className="social_icons">
                    <div>
                      <img src={FacebookIcon} alt="social icon" />
                    </div>
                    <div>
                      <img
                        src={InstagramIcon}
                        style={{ width: "15px" }}
                        alt="social icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_message">
                <div>
                  <h4 className="footer_social_heading">Остались вопросы?</h4>
                  <button className="message_btn">Напишите нам</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
