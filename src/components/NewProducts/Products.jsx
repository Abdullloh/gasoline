import React from "react";
import { Button, Col, Row } from "antd";
import { StyledContainer } from "../../styles/Container.style";
import PageHeader from "../PageHeader/PageHeader";
import ProductCard from "./ProductCard";
import CardImg from "../../assets/img/category-oil.svg";
// import { StyledBtn } from './Button.style';
import { btnStyle } from "./Button.style";
import { StyledProducts } from "./Product.style";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  let item = [1, 2, 3, 4, 5, 6, 7, 8];
  const navigate = useNavigate();
  return (
    <StyledProducts>
      <StyledContainer>
        <div className="container">
          <PageHeader title={props.headTitle} />
          <Row gutter={[20, 50]}>
            {item.map((item, index) => {
              return (
                <Col
                  key={index}
                  md={{
                    span: 12,
                  }}
                  lg={{
                    span: 6,
                  }}
                  style={{ margin: "auto" }}
                >
                  <ProductCard
                    key={index}
                    img={CardImg}
                    title="Антифриз концентрат HEPU 1.5 л/Красный"
                    price="$149"
                  />
                </Col>
              );
            })}
          </Row>
          <div
            className="btn_wrapper"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "40px",
            }}
          >
            <Button
              onClick={() => navigate("/products")}
              className="btn_read_more"
              size="large"
              type="primary"
              ghost
            >
              Показать ещё
            </Button>
          </div>
        </div>
      </StyledContainer>
    </StyledProducts>
  );
};

export default Products;
