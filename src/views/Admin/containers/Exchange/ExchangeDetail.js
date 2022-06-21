import React, { useState, useCallback, useEffect } from "react";
import { Input } from "antd";
import { StyledExchangeDetails } from "./Exchange.style";
import Axios from "../../../../utils/axios";
import axios from "axios";

function ExchangeDetail(props) {
  const [formValues, setFormValues] = useState({
    // id: props.id,
    product: props?.product,
    price: props?.price,
    percentage: props?.percentage,
  });

  let adminInfo = JSON.parse(localStorage.getItem("user"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((state) => ({ ...state, [name]: value }));
  }, []);

  const updateExchanges = async () => {
    let form = {
      product: formValues.product,
      price: formValues.price,
      percentage: formValues.percentage,
    };
    try {
      const res = await Axios.patch(
        `products/product_prices/${props.id}`,
        {
            product: formValues.product,
            price: formValues.price,
            percentage: formValues.percentage,
        },
        { headers: header },

      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //   if (props.submit !== props.submit) {
  //     updateExchanges();
  //   }
  useEffect(() => {
    updateExchanges();
    console.log(formValues);
  }, [props.submit]);
  return (
    <StyledExchangeDetails>
      <h4>Блок-{props?.length}</h4>
      <div className="productName">
        <label htmlFor="product" className="unrespons_label">
          Название
        </label>
        <Input
          onChange={handleInput}
          required
          type="text"
          name="product"
          id="product"
          value={formValues?.product}
        />
        <label htmlFor="product" className="respons_label">
          Название
        </label>
      </div>
      <div className="productPrice">
        <Input
          onChange={handleInput}
          required
          type="text"
          name="price"
          id="price"
          value={formValues?.price}
        />
        <label htmlFor="price">UZS</label>
      </div>
      <div className="productPercentage">
        <Input
          onChange={handleInput}
          type="text"
          name="percentage"
          id="percentage"
          value={formValues?.percentage}
        />
        <label htmlFor="percentage">%</label>
      </div>
    </StyledExchangeDetails>
  );
}

export default ExchangeDetail;
