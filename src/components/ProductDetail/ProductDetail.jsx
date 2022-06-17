import { Button, Image, Modal } from "antd";
import React from "react";
import { ProductDetailStyle } from "./ProductDetailStyle";

export default function ProductDetail(props) {
  const { isVisible, handleCancel, title, imgSrc } = props;
  console.log(imgSrc);
  return (
    <Modal footer={null} visible={isVisible} onCancel={handleCancel}>
      <ProductDetailStyle>
        <div className="detail-heading">
          <div className="heading-images">
            <Image src={imgSrc[0].image} />
            <div>
              {imgSrc.map((item) => {
                return <img src={item?.image} alt="" />;
              })}
            </div>
          </div>
          <div className="heading-info">
            <h3>Моторное масло GM Dexos-1, Generation-2, 5w30, 3,8л</h3>
            <Button type="primary">В корзину</Button>
          </div>
        </div>
        <div className="detail-body">
          <p>{title}</p>
          <p>
            Описание Новейшее моторное масло MOL Essence 5W-30 изготавливается
            на основе высокоэффективных синтетических базовых масел,
            обеспечивающих тройную противоокислительную защиту, с использованием
            комплексной системы присадок и предназначено для легковых
            автомобилей и автомобилей для коммерческих перевозок. Класс
            вязкости: SAE 5W-30 API SL/CF ACEA A3/B4-12 ILSAC GF-4 VW 502 00/505
            00 GM-LL-B-025 BMW Longlife-01 Плотность при 15°C MSZ EN ISO
            12185:1998 [г/cм3 ] 0,855
          </p>
        </div>
      </ProductDetailStyle>
    </Modal>
  );
}
