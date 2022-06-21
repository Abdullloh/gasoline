import React, { useCallback, useState } from "react";
import { Col, Row, Button, Form, Input, message } from "antd";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";
import { StyledContainer } from "../../styles/Container.style";
import { StyledFooter } from "./Footer.style";
import Axios from "../../utils/axios";
import InstagramIcon from "../../assets/img/instagram.svg";
import FacebookIcon from "../../assets/img/facebook.svg";

const { TextArea } = Input;
const initialState = {
  fullName: "",
  phoneNumber: "",
  description: "",
};
function Footer() {
  const [formValue, setFormValue] = useState({
    fullName: "",
    phoneNumber: "",
    description: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValue((state) => ({ ...state, [name]: value }));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      name: formValue.fullName,
      phone: formValue.phoneNumber,
      text: formValue.description,
      type: "question",
    };
    try {
      const res = await Axios.post("/adminside/request_create/", formData);
      console.log(res);
      setFormValue(initialState)
      if (res.status == 201) {
        message.success("Отправлено");
        handleShowModal();
      }
    } catch (error) {
      message.error("Что-то пошло не так, попробуйте еще раз");
    }
  };

  const handleShowModal = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <StyledFooter>
      <StyledContainer>
        <div className="container">
          <Modal
            visible={isVisible}
            title={null}
            onOk={handleShowModal}
            onCancel={handleShowModal}
            footer={null}
          >
            <Form layout="vertical" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Ф.И.О.</label>
              <Input
                required
                onChange={handleInputChange}
                name="fullName"
                id="fullName"
                value={formValue.fullName}
              />
              <label htmlFor="phoneNumber">Номер телефона</label>
              <Input
                required
                onChange={handleInputChange}
                name="phoneNumber"
                id="phoneNumber"
                minLength={7}
                value={formValue.phoneNumber}
              />
              <label htmlFor="description">Опишите проблему или вопрос</label>
              <TextArea
                required
                onChange={handleInputChange}
                name="description"
                id="description"
                value={formValue.description}
                rows={6}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button type="primary" htmlType="submite" onClick={handleSubmit}>
                  Отправить
                </Button>
              </div>
            </Form>
          </Modal>
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
                <Link to="/">Главная</Link>
                <Link to="/about">О компании</Link>
                <Link to="/partner"> Для партнеров</Link>
                <Link to="/service"> Покупателям</Link>
                <Link to="/products"> Магазин</Link>
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
                <a href="https://www.google.com/maps/place/41°19'55.0%22N+69°14'56.7%22E/@41.331939,69.2468823,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xce22268ab1beb8ec!8m2!3d41.331939!4d69.249071">
                  Адрес: г. Ташкент, массив Себзор Ц17/18 дом 4, кв.137{" "}
                </a>
                <a href="mailto:info@email.com">Эл. почта: info@gazoil.uz </a>
                <a href="tel:+998 77 777 73 13"> Телефон: +998 77 777 73 13</a>
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
                      <a href="https://t.me/gazoiluz">
                        <FaTelegramPlane color="#364A7E" size="20" />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/gazoiluz/">
                        <FaInstagram color="#364A7E" size="20" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_message">
                <div>
                  <h4 className="footer_social_heading">Остались вопросы?</h4>
                  <button className="message_btn" onClick={handleShowModal}>
                    Напишите нам
                  </button>
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
