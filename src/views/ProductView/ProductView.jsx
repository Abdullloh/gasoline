import React from "react";
import ProductCard from "../../components/NewProducts/ProductCard";
import Service from "../../components/Servise/Service";
import { ProductViewStyle } from "./ProductViewStyle";
import CardImg from "../../assets/img/category-oil.svg";
import { Button, Checkbox, Col, Collapse, InputNumber, Row } from "antd";
import { StyledContainer } from "../../styles/Container.style";
import { useState } from "react";
import { useEffect } from "react";
import useFetchHook from "../../customhooks/useFetchHook";
import { useTranslation } from "react-i18next";
export default function ProductView() {
  const [productList] = useFetchHook("/products");
  const { results = [] } = productList;
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation()
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  const { Panel } = Collapse;
  const handleChange = (e) => {
    console.log(`checked = ${e.target.value}`);
  };
  const onChange = (value) => {
    console.log("changed", value);
  };
  const makeVisible = () => {
    setVisible(!visible);
  };
  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <StyledContainer>
        <div className="container">
          {width < 768 ? <h3 onClick={() => makeVisible()}>Фильтр</h3> : ""}
          <ProductViewStyle
            style={width < 768 ? { display: "initial" } : { display: "flex" }}
          >
            <div
              style={visible ? { display: "initial" } : { width: "20%" }}
              className="filter-container"
            >
              <h4
                style={
                  width > 768 ? { display: "inherit" } : { display: "none" }
                }
              >
                {t("p50")}
              </h4>
              <Collapse defaultActiveKey={["0", "1", "2"]} ghost>
                <Panel header={t("p51")}>
                  <div>
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={3}
                      onChange={onChange}
                    />
                    <InputNumber
                      style={{ marginLeft: "15px" }}
                      min={1}
                      max={10}
                      defaultValue={3}
                      onChange={onChange}
                    />
                  </div>
                </Panel>
                <Panel header={t("p52")}>
                  <div className="checkbox-container">
                    <Checkbox value={"masla"} onChange={handleChange}>
                      Масла
                    </Checkbox>
                    <Checkbox value={"toplivo"} onChange={handleChange}>
                      Топливо
                    </Checkbox>
                    <Checkbox onChange={handleChange}>Смазки</Checkbox>
                  </div>
                </Panel>
                <Panel header={t("p53")}>
                  <div className="checkbox-container">
                    <Checkbox onChange={handleChange}>{t("p54")}</Checkbox>
                    <Checkbox onChange={handleChange}>{t("p55")}</Checkbox>
                    <Checkbox onChange={handleChange}>{t("p56")}</Checkbox>
                    <Checkbox onChange={handleChange}>{t("p57")}</Checkbox>
                    <Checkbox onChange={handleChange}> {t("p58")}</Checkbox>
                  </div>
                </Panel>
              </Collapse>
              <div className="button-container">
                <Button type="primary">{t("p59")}</Button>
                <Button type="default ">{t("p60")}</Button>
              </div>
            </div>
            <div className="product-container">
              <Row>
                {results.map((item, index) => {
                  return (
                    <Col
                      sm={{
                        span: 24,
                      }}
                      md={{
                        span: 12,
                      }}
                      lg={{
                        span: 8,
                      }}
                      key={index}
                    >
                      <ProductCard
                        margin="10px"
                        key={index}
                        data={item}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </ProductViewStyle>
        </div>
      </StyledContainer>
      <Service />
    </>
  );
}
