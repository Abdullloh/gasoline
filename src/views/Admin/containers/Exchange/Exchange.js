import React, { useState, useEffect, useCallback } from "react";
import { Modal, Input, Button } from "antd";
import { GoPlus } from "react-icons/go";
import { StyledExchange } from "./Exchange.style";
import Axios from "../../../../utils/axios";
import ExchangeDetail from "./ExchangeDetail";

function Exchange() {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [formValues, setFormValues] = useState({
    product: "",
    price: "",
    percentage: 0,
  });

  const getPrices = async () => {
    setLoading(true);
    try {
      const res = await Axios.get("/products/product_prices/");
      //   console.log(res);
      setData(res?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((state) => ({ ...state, [name]: value }));
  }, []);
  console.log(data);
  const handleShow = () => {
    setIsVisible((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { product, price, percentage } = formValues;
    try {
      const res = await Axios.post("/products/product_prices/", {
        product,
        price,
        percentage,
      });
      if (res?.status == 200) {
        getPrices();
        handleShow();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrices();
  }, [updated]);
  useEffect(() => {
    getPrices();
  }, []);

  return (
    <StyledExchange>
      <Modal visible={isVisible} footer={null} onCancel={handleShow}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="product">Название</label>
          <Input
            required
            onChange={handleInputChange}
            id="product"
            name="product"
            value={formValues.product}
          />
          <label htmlFor="price">Цена</label>
          <Input
            required
            onChange={handleInputChange}
            id="price"
            name="price"
            value={formValues.price}
          />
          <label htmlFor="percentage">Процент</label>
          <Input
            onChange={handleInputChange}
            id="percentage"
            name="percentage"
            value={formValues.percentage}
          />
          <Button type="primary" htmlType="submite" className="sbm_btn">
            Разместить
          </Button>
        </form>
      </Modal>
      <header>
        <h1>Бегущая дорожка</h1>
      </header>
      <div className="wrapper">
        {data?.map((item, index) => (
          <ExchangeDetail
            submit={updated}
            id={item?.id}
            key={index}
            length={index + 1}
            product={item?.product}
            price={item?.price}
            percentage={item?.percentage}
          />
        ))}
        <div className="add_price" onClick={handleShow}>
          <GoPlus color="black" size={36} />
        </div>
        <Button
          size="large"
          type="primary"
          onClick={() => setUpdated((prev) => !prev)}
        >
          Сохранить
        </Button>
      </div>
    </StyledExchange>
  );
}

export default Exchange;
