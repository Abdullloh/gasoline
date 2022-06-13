import { Col, Row } from "antd";
import React from "react";
import { StyledContainer } from "../../styles/Container.style";
import PartnerBodyImage from "../../assets/img/PartnerBodyImage.svg";

const BodyInfo = (props) => {
  const paragraghStyle = {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "22px"
  };
  const titleStyle = {
    fontSize: "40px",
    fontWeight: "400",
    lineHeight: "49px"
  };
  return (
    <StyledContainer>
      <div className="container">
        <div>
          <Row>
            <Col
              style={{ "width": "100%", "padding": "30px 0px" }}
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={{
                span: 12,
                offset: 0,
              }}
            >
              <img
                src={props?.img}
                style={{ width: "100%" }}
                className="partnerImage"
                alt="PartnerImage"
              />
            </Col>
            <Col
              style={{ "width": "100%", "padding": "30px 0px" }}
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={{
                span: 12,
                offset: 0,
              }}
            >
              <h2 style={titleStyle}>{props?.title}</h2>
              <p style={paragraghStyle}>{props?.subtitle}</p>
              <p style={paragraghStyle}>{props?.subtitleSecond}</p>
              <p style={paragraghStyle}>{props?.subtitleThird}</p>
            </Col>
          </Row>
        </div>
      </div>
    </StyledContainer>
  );
};

export default BodyInfo;
