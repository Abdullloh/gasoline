import React, { useState } from "react";
import { Row, Col } from "antd";
import { StyledContainer } from "../../styles/Container.style";
import PageHeader from "../PageHeader/PageHeader";
import ServiceImg1 from "../../assets/img/service-img1.svg";
import ServiceImg2 from "../../assets/img/service-img2.svg";
import ServiceImg3 from "../../assets/img/service-img3.svg";
import ServiceImg4 from "../../assets/img/service-img4.svg";
import ServiceCard from "./ServiceCard";

function Service() {
  const [data, setData] = useState([
    {
      title: "Помощь в поиске и подборе автозапчастей",
      imgUrl: ServiceImg1,
    },
    {
      title: "Широчайший ассортимент товаров",
      imgUrl: ServiceImg2,
    },
    {
      title: "Реальные и конкурентоспособные цены",
      imgUrl: ServiceImg3,
    },
    {
      title:
        "Реальные и конкурентоспособные ценыШирочайший ассортимент товаров",
      imgUrl: ServiceImg4,
    },
  ]);
  return (
    <div>
      <StyledContainer>
        <div className="container">
          <PageHeader title={"Почему именно мы?"} />
          <Row gutter={[15, 15]} style={{ "align-items": "stretch" }}>
            {data?.map((item, index) => (
              <Col
                xs={{
                  span: 24,
                }}
                sm={{
                  span: 12,
                }}
                md={{
                  span: 12,
                }}
                lg={{
                  span: 6,
                }}
                key={index}
              >
                <ServiceCard imgUrl={item.imgUrl} serviceTitle={item.title} />
              </Col>
            ))}
          </Row>
        </div>
      </StyledContainer>
    </div>
  );
}

export default Service;
