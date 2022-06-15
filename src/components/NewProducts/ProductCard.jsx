import React, { useState } from "react";
import { Col, Button } from "antd";
import { StyledProductCard } from "./ProductCardStyle";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductCard = ({ img = "", title = "", price = "", margin }) => {
  const [state, setState] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };

  const increment = (e) => {
    e.stopPropagation();
    setState((prev) => prev + 1);
  };
  const decrement = (e) => {
    e.stopPropagation();
    if (state > 0) {
      setState((prev) => prev - 1);
    }
  };
  return (
    <>
      <ProductDetail
        isVisible={isModalVisible}
        handleCancel={handleCancel}
        title={title}
        imgSrc={img}
      />
      <StyledProductCard margin={margin} onClick={showModal}>
        <div>
          <img src={img} alt="oilImg" />
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <h2>{price}</h2>
        </div>
        <div className="card-footer">
          <div>
            <span onClick={decrement} className="counter">
              -
            </span>
            <span>{state} sht</span>
            <span onClick={increment} className="counter">
              {" "}
              +
            </span>
          </div>
          <Button type="primary" onClick={(e) => e.stopPropagation()}>
            В корзину
          </Button>
        </div>
      </StyledProductCard>
    </>
  );
};

export default ProductCard;
