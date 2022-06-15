import React from "react";
import { StyledContainer } from "../styles/Container.style";
import { Row, Col, Button } from "antd";
import Service from "./Servise/Service";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const navigate = useNavigate();
  const {
    img,
    buttonText,
    leftSideText,
    leftSidePar,
    flexDirection,
    aboutPageButtonText,
    isFlexTrue,
  } = props;
  const colStyle = {
    width: "100%",
  };
  return (
    <div className="entry-section">
      <StyledContainer>
        <div className="container">
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection,
            }}
          >
            <Col
              style={
                isFlexTrue
                  ? {
                      ...colStyle,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }
                  : colStyle
              }
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={
                isFlexTrue
                  ? {
                      span: 24,
                      offset: 0,
                    }
                  : {
                      span: 12,
                      offset: 0,
                    }
              }
            >
              <h1 className="heading-title">{leftSideText}</h1>
              <p className="heading-paragraph">{leftSidePar}</p>
              <div className="buttonContainer">
                <button
                  onClick={() => navigate("/products")}
                  className="headeing-btn"
                >
                  {buttonText}
                </button>
                {aboutPageButtonText && (
                  <button
                    style={{ marginLeft: "70px" }}
                    className="headeing-btn"
                  >
                    {aboutPageButtonText}
                  </button>
                )}
              </div>
            </Col>
            <Col
              style={colStyle}
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={
                isFlexTrue
                  ? {
                      span: 24,
                      offset: 0,
                    }
                  : {
                      span: 12,
                      offset: 0,
                    }
              }
            >
              <div className="img-block">
                {img && <img src={img} alt="oil" className="oilImg" />}
                <button className="headeing-btn">{buttonText}</button>
                {aboutPageButtonText && (
                  <button className="headeing-btn">
                    {aboutPageButtonText}
                  </button>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </StyledContainer>
    </div>
  );
};

export default Main;
