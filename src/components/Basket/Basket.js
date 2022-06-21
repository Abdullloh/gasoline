import { Button, Image, Modal } from "antd";
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
  const { isVisible, handleCancel,removeItemFromBasket } = props;
  let {cartList} = props
  console.log(cartList);
  const cartIds = cartList?.map(item=> {
    return (
      {
        'id':item?.id
      }
      
      )
    }
    )
    console.log(state);

  const getCarts = async()=>{
    try {
      const res = await Axios.get('/cart')
      setState(res?.data?.results)
      cartList = res.data.results
    } catch (error) {
      
    }
  }


  


  const makeOrder = async() => {
      if(state?.length > 0){
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

    useEffect(()=>{
    getCarts()
    },[props?.dependency])
  return (
    <Modal style={{width:'720px'}} footer={null} visible={isVisible} onCancel={handleCancel}>
      <div style={{overflowY:'scroll',margin:'22px 0',maxHeight:'475px'}}>
      {cartList?.map((item) => {
        let cartId = item.id
        const { images, price, title, id, count } = item.product;
        return (
          // <BasketDetail quantity={item?.quantity} images={images} title={title}/>
          
          <ProductDetailStyle>
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
                <h4>Количество: {item?.quantity}</h4>
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
                <Button type="primary" onClick={() => removeItemFromBasket(cartId)}>
                  Удалить
                </Button>
              </div>
            </div>
          </ProductDetailStyle>
        );
      })}
      </div>
      <div style={{display:'flex',justifyContent:'center',margin:'8px 0'}} className="footer-button">
        <Button style={{borderRadius:'10px'}} type="primary" onClick={makeOrder}>Заказать</Button>
      </div>
    </Modal>
  );
}
