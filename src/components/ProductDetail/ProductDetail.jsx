import { Button, Image, Modal } from "antd";
import React from "react";
import { ProductDetailStyle } from "./ProductDetailStyle";
import { useDispatch } from "react-redux";
import { addToCard } from "../../store/actios/publicActions";
import styled from "styled-components";

export default function ProductDetail(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { isVisible, handleCancel } = props;
  const { title, images, price ,description} = props.data;
  const addCard = (e) => {
    e.stopPropagation();
    dispatch(addToCard({ ...props.data }));
  };
  return (
    <Modal footer={null} visible={isVisible} onCancel={handleCancel} width={1000}>
      <ProductDetailStyle color={"#364A7E"}>
        <div className="detail-heading">
          <div className="heading-images">
            <Image src={images[0]?.image} />
            <div className="imgs_block">
              {images?.map((item) => {
                return <img src={item?.image} alt="product" />;
              })}
            </div>
          </div>
          <div className="heading-info">
            <h3>{title}</h3>
            <h4>Цена: {price} UZS</h4>
            <Button type="primary" onClick={(e) => addCard(e)}>
              В корзину
            </Button>
          </div>
        </div>
        <div className="detail-body">
          <p>{title}</p>
          <p>
              {description}
          </p>
        </div>
      </ProductDetailStyle>
    </Modal>
  );
}



