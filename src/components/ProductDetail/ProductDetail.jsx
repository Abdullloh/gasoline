import { Button, Image, Modal } from "antd";
import React, { useRef } from "react";
import { ProductDetailStyle } from "./ProductDetailStyle";

export default function ProductDetail(props) {
  const { isVisible, handleCancel, title, imgSrc } = props;

  return (
    <Modal footer={null} visible={isVisible} onCancel={handleCancel}>
      <ProductDetailStyle>
        <div className="detail-heading">
          <div className="heading-images">
            <Image src={imgSrc} />
            <div>
              <img src={imgSrc} alt="" />
              <img src={imgSrc} alt="" />
              <img src={imgSrc} alt="" />
            </div>
          </div>
          <div className="heading-info">
            <h3>Моторное масло GM Dexos-1, Generation-2, 5w30, 3,8л</h3>
            <Button type="primary">В корзину</Button>
          </div>
        </div>
        <p>{title}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ProductDetailStyle>
    </Modal>
  );
}
