import { logDOM } from "@testing-library/react";
import { Button, Image, message, Modal, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchHook from "../../customhooks/useFetchHook";
import { deleteItem } from "../../store/actios/publicActions";
import Axios from "../../utils/axios";
import { ProductDetailStyle } from "../ProductDetail/ProductDetailStyle";
import BasketDetail from "./BasketDetail";

export default function Basket(props) {
  const [state, setState] = useState();
  const { isVisible, handleCancel, removeItemFromBasket } = props;
  let { cartList } = props;

  console.log(state, "state");
  const [value, setValue] = useState("");

  
  const cartIds = cartList?.map((item) => {
    return {
      id: item?.id,
    };
  });
  const onChange = (e,id) => {
    console.log(cartIds);
    console.log(id);
    let data = cartIds.filter(item=> item.id == id);
    console.log(data);
    data[0].delivery = e.target.value;
  };
  console.log(cartIds);
  console.log(state);

  const getCarts = async () => {
    try {
      const res = await Axios.get("/cart");
      setState(res?.data?.results);
      cartList = res.data.results;
    } catch (error) {}
  };

  const makeOrder = async () => {
    if (cartList?.length > 0) {
      try {
        const res = await Axios.post("/cart/orders", {
          cartitems: [...cartIds],
        });
        if (res?.data?.message === "Item ordered") {
          message.success("Успешно заказанные продукты");
        }
        console.log(res);
      } catch (error) {}
    }
  };

  useEffect(() => {
    getCarts();
  }, [props?.dependency]);
  return (
    <Modal
      width={1000}
      footer={null}
      visible={isVisible}
      onCancel={handleCancel}
    >
      <div
        style={{ overflowY: "scroll", margin: "22px 0", maxHeight: "475px" }}
      >
        {cartList?.map((item) => {
          let cartId = item.id;
          console.log(item);
          const { images, price, title, id, count ,delivery,litre} = item.product;
          return (
            // <BasketDetail quantity={item?.quantity} images={images} title={title}/>

            <ProductDetailStyle color={"#000000"}>
              <div className="detail-heading">
                <div className="heading-images">
                  <Image src={images[0]?.image} />
                  <div>
                    {/* <img src={imgSrc} alt="" /> */}
                    {/* <img src={imgSrc} alt="" /> */}
                    {/* <img src={imgSrc} alt="" /> */}
                  </div>
                </div>
                <div className="heading-info">
                  <h3>{title}</h3>
                  <div>
                  <h2>Цена: {price} UZS</h2>
                  <h4>Количество: {item?.quantity}</h4>
                  <h2>Объем: {litre}л</h2>
                  </div>
                  {/* <div>
                  <span onClick={() => decrement(id)} className="counter">
                    -
                  </span>
                  <span>{count} sht</span>
                  <span onClick={() => count + 1} className="counter">
                    {" "}
                    +
                  </span>
                </div> */}
                  <Button
                    type="primary"
                    onClick={() => removeItemFromBasket(cartId)}
                  >
                    Удалить
                  </Button>
                  <Radio.Group onChange={(e)=>onChange(e,cartId)}>
                    {
                    delivery ? 
                    <Radio value="True">Доставка</Radio>
                    :""
                  }
                    <Radio value="False">Самовывоз</Radio>
                  </Radio.Group>
                </div>
              </div>
            </ProductDetailStyle>
          );
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}
        className="footer-button"
      >
        <Button
          style={{ borderRadius: "10px" }}
          type="primary"
          onClick={makeOrder}
        >
          Заказать
        </Button>
      </div>
    </Modal>
  );
}
