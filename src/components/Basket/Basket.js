import { Button, Image, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../../store/actios/publicActions";
import Axios from "../../utils/axios";
import { ProductDetailStyle } from "../ProductDetail/ProductDetailStyle";
export default function Basket(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState();
  const increment = (count) => {
    setState(count++);
  };
  const { isVisible, handleCancel } = props;
  const navigate = useNavigate()
  const selector = useSelector((state) => state);
  const { cart } = selector.payload;
  console.log(cart);
  const cartIds = cart.map(item=> {
    return (
      {
        id:item.id
      }
      
      )
  }
  )
  console.log(cartIds);
  const removeItemFromBasket = (id) => {
    dispatch(deleteItem(id));
    console.log(id);
  };

  const decrement = (id) => {
    let selecteditem = cart?.filter((item) => item.id == id);
    let data = selecteditem[0].count - 1;
  };
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);
  const makeOrder = async() => {
    if(!user){
      navigate('/sign-in')
    }else {
      if(cart.length > 0){
        try {
          const res = await Axios.post('/cart/orders',{
            cartitems:[...cartIds],
          })
          console.log(res);
        } catch (error) {
          
        }
      }else {
        alert("Mahsulot tanlang")
      }
    }
  }
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
                <Button type="primary" onClick={() => removeItemFromBasket(id)}>
                  Удалить
                </Button>
              </div>
            </div>
          </ProductDetailStyle>
        );
      })}
      <Button type="primary" onClick={makeOrder}>Заказать</Button>
    </Modal>
  );
}
