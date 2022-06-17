import { Button, Image, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../store/actios/publicActions";
import { ProductDetailStyle } from "../ProductDetail/ProductDetailStyle";
export default function Basket(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState();
  const increment = (count) => {
    setState(count++);
  };
  const { isVisible, handleCancel } = props;
  const selector = useSelector((state) => state);
  const { cart } = selector.payload;
  console.log(cart);
  const removeItemFromBasket = (id) => {
    dispatch(deleteItem(id));
    console.log(id);
  };

  const decrement = (id) => {
    let selecteditem = cart?.filter((item) => item.id == id);
    let data = selecteditem[0].count - 1;
  };
  return (
    <Modal footer={null} visible={isVisible} onCancel={handleCancel}>
      {cart?.map((item) => {
        const { images, price, title, id, count } = item;
        return (
          <ProductDetailStyle>
            <div className="detail-heading">
              <div className="heading-images">
                <Image src={images[0].image} />
                <div>
                  {/* <img src={imgSrc} alt="" /> */}
                  {/* <img src={imgSrc} alt="" /> */}
                  {/* <img src={imgSrc} alt="" /> */}
                </div>
              </div>
              <div className="heading-info">
                <h3>{title}</h3>
                <div>
                  <span onClick={() => decrement(id)} className="counter">
                    -
                  </span>
                  <span>{count} sht</span>
                  <span onClick={() => count + 1} className="counter">
                    {" "}
                    +
                  </span>
                </div>
                <Button type="primary" onClick={() => removeItemFromBasket(id)}>
                  Удалить
                </Button>
              </div>
            </div>
          </ProductDetailStyle>
        );
      })}
      <Button type="primary">Заказать</Button>
    </Modal>
  );
}
