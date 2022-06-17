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
export default function ProductView() {
  const [productList] = useFetchHook("/products");
  const { results = [] } = productList;
  const [visible, setVisible] = useState(false);
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
                Фильтр по параметрам
              </h4>
              <Collapse defaultActiveKey={["0", "1", "2"]} ghost>
                <Panel header="Цена">
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
                <Panel header="Тип продаж">
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
                <Panel header="Метки">
                  <div className="checkbox-container">
                    <Checkbox onChange={handleChange}>Без метки</Checkbox>
                    <Checkbox onChange={handleChange}>Новинка</Checkbox>
                    <Checkbox onChange={handleChange}>Хит сезона</Checkbox>
                    <Checkbox onChange={handleChange}>Хит продаж</Checkbox>
                    <Checkbox onChange={handleChange}>Популярные </Checkbox>
                  </div>
                </Panel>
              </Collapse>
              <div className="button-container">
                <Button type="primary">Применить фильтры</Button>
                <Button type="default ">Сбросить фильтры</Button>
              </div>
            </div>
            <div className="product-container">
              <Row>
                {results.map((item, index) => {
                  const { title, images, price } = item;
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
                        img={images[1]?.image}
                        title={title}
                        price={price}
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
