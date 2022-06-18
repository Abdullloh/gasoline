import React from "react";
import { Row, Col } from "antd";
import { StyledContainer } from "../../styles/Container.style";
import { StyledNews } from "./News.style";
import PageHeader from "../PageHeader/PageHeader";
import NewsImg from "../../assets/img/news_img.svg";
import NewsImg2 from "../../assets/img/news_img2.svg";

function News() {
  return (
    <StyledNews>
      <StyledContainer>
        <div className="container">
          <PageHeader title="Новости" />
          <Row gutter={[20, 20]}>
            <Col sm={{ span: 24 }} lg={{ span: 14 }}>
              <div className="img_card">
                <img src={NewsImg} alt="news" />
              </div>
              <p className="date">17 июня. 2022</p>
              <h3 className="title">
                Российский "Сибур" заинтересовался проектами Узбекистана в
                нефтехимии
              </h3>
              <h5 className="sub_title">
                Речь идет о проектах, вносящих развитие и динамичные изменения в
                области глубокой переработки углеводородов в РУз и темпы
                развития нефтехимии.
              </h5>
            </Col>
            <Col sm={{ span: 24 }} lg={{ span: 10 }}>
              <Row gutter={[20, 20]}>
                <Col lg={{span: 10 }} sm={{span: 24}}>
                  <div className="img_card_small">
                    <img src={NewsImg2} alt="news" />
                  </div>
                </Col>
                <Col sm={{ span: 24 }} lg={{ span: 14 }}>
                  <div className="other_news">
                    <h4>
                      Российский "Сибур" заинтересовался проектами Узбекистана в
                      нефтехимии
                    </h4>
                    <p className="date">17 июня. 2022</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={[20, 20]}>
                <Col lg={{span: 10 }} sm={{span: 24}}>
                  <div className="img_card_small">
                    <img src={NewsImg2} alt="news" />
                  </div>
                </Col>
                <Col sm={{ span: 24 }} lg={{ span: 14 }}>
                  <div className="other_news">
                    <h4>
                      Российский "Сибур" заинтересовался проектами Узбекистана в
                      нефтехимии
                    </h4>
                    <p className="date">17 июня. 2022</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={[20, 20]}>
                <Col lg={{span: 10 }} sm={{span: 24}}>
                  <div className="img_card_small">
                    <img src={NewsImg2} alt="news" />
                  </div>
                </Col>
                <Col sm={{ span: 24 }} lg={{ span: 14 }}>
                  <div className="other_news">
                    <h4>
                      Российский "Сибур" заинтересовался проектами Узбекистана в
                      нефтехимии
                    </h4>
                    <p className="date">17 июня. 2022</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={[20, 20]}>
                <Col lg={{span: 10 }} sm={{span: 24}}>
                  <div className="img_card_small">
                    <img src={NewsImg2} alt="news" />
                  </div>
                </Col>
                <Col sm={{ span: 24 }} lg={{ span: 14 }}>
                  <div className="other_news">
                    <h4>
                      Российский "Сибур" заинтересовался проектами Узбекистана в
                      нефтехимии
                    </h4>
                    <p className="date">17 июня. 2022</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </StyledContainer>
    </StyledNews>
  );
}

export default News;
