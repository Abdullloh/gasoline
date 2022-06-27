import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Carousel } from "antd";
import { StyledContainer } from "../../styles/Container.style";
import { StyledNews } from "./News.style";
import moment from "moment";
import PageHeader from "../PageHeader/PageHeader";
import NewsImg from "../../assets/img/news_img.svg";
import NewsImg2 from "../../assets/img/news_img2.svg";
import Axios from "../../utils/axios";
import { useTranslation } from "react-i18next";

function News() {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();
  console.log(news);
  const getNews = async () => {
    try {
      const res = await Axios.get("/blog/");
      console.log(res);
      setNews(res?.data?.results);
    } catch (error) {}
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <StyledNews>
      <StyledContainer>
        <div className="container">
          <PageHeader title={t("p11")} />
          <Row gutter={[20, 20]}>
            <Col sm={{ span: 24 }} lg={{ span: 14 }}>
              <Carousel autoplay>
                {news.map((item, index) => (
                  <>
                    <Link to={`/news/${item.id}`}>
                      <div className="img_card">
                        <img src={item.cover_image.image} alt="news" />
                      </div>
                      <p className="date">
                        {moment(item?.published_at).format("DD.MM.YYYY")}
                      </p>
                      <h3 className="title">
                        {item?.title.length > 70
                          ? `${item.title.substring(0, 70)}...`
                          : item.title}
                      </h3>
                      <h5 className="sub_title">
                        {item?.short_description.length > 130
                          ? `${item.short_description.substring(0, 130)}...`
                          : item.short_description}
                      </h5>
                    </Link>
                  </>
                ))}
              </Carousel>
            </Col>
            <Col sm={{ span: 24 }} lg={{ span: 10 }}>
              {news.slice(0, 4).map((item, index) => (
                <Row gutter={[12, 12]} key={index}>
                  <Col md={{ span: 10 }} sm={{ span: 24 }}>
                    <Link to={`/news/${item.id}`}>
                      <div className="img_card_small">
                        <img src={item?.cover_image?.image} alt="news" />
                      </div>
                    </Link>
                  </Col>
                  <Col sm={{ span: 24 }} md={{ span: 14 }}>
                    <Link to={`/news/${item.id}`}>
                      <div className="other_news">
                        <h4>
                          {" "}
                          {item?.title.length > 60
                            ? `${item.title.substring(0, 60)}...`
                            : item.title}
                        </h4>
                        <p className="date">
                          {moment(item?.published_at).format("DD.MM.YYYY")}
                        </p>
                      </div>
                    </Link>
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        </div>
      </StyledContainer>
    </StyledNews>
  );
}

export default News;
