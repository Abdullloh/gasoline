import React, { useState } from "react";
import { Col, Button } from "antd";
import { useDispatch } from "react-redux";
import { StyledProductCard } from "./ProductCardStyle";
import ProductDetail from "../ProductDetail/ProductDetail";
import { addToCard } from "../../store/actios/publicActions";

const ProductCard = ({ data, margin}) => {
  console.log(data);
  const { images = [], title = "", price = "" } = data;
  const [state, setState] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };

  const addCard = (e) => {
    e.stopPropagation();
    dispatch(addToCard({ ...data, count: state }));
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
  console.log(images);
  return (
    <>
      <ProductDetail
        isVisible={isModalVisible}
        handleCancel={handleCancel}
        title={title}
        imgSrc={images}
      />
      <StyledProductCard margin={margin} onClick={showModal}>
        <div className="card-header">
          <img src={images[0]?.image} alt="oilImg" />
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
          <Button type="primary" onClick={(e) => addCard(e)}>
            В корзину
          </Button>
        </div>
      </StyledProductCard>
    </>
  );
};

export default ProductCard;
