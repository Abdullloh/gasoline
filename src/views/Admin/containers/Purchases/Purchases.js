import React, { useState, useEffect } from "react";
import { Button, Checkbox, Table } from "antd";
import { FiPlus } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineDelete } from "react-icons/ai";
import { StyledPurchases } from "./Purchases.style";
import OilImg from "../../../../assets/img/oil-img.svg";
import { Link } from "react-router-dom";
import Axios from "../../../../utils/axios";

function Purchases() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const datas = [
    {
      id: 2,
      productName: "Моторное масло",
      inStock: true,
      productPrice: 40000,
      productImg: OilImg,
    },
    {
      id: 4,
      productName: "Моторное ",
      inStock: true,
      productPrice: 40000,
      productImg: OilImg,
    },
    {
      id: 5,
      productName: "Моторное ",
      inStock: true,
      productPrice: 40000,
      productImg: OilImg,
    },
  ];

  const columns = [
    {
      dataIndex: "productName",
      render: (text, record) => (
        <td className="ant-table-cell">
          <div className="img_column">
            <img
              className="product_img"
              src={record?.productImg}
              alt={record?.productName}
            />
            <div>
              <h3 className="product_name">{text}</h3>
              <Checkbox checked={record?.inStock} size="small">
                В наличии
              </Checkbox>
            </div>
          </div>
        </td>
      ),
    },
    {
      dataIndex: "productPrice",
      render: (text) => (
        <td className="ant-table-cell">
          <h3 className="product_price">{text}</h3>
        </td>
      ),
    },
    {
      dataIndex: "id",
      render: (text, record) => (
        <td className="ant-table-cell">
          <div className="edit_column">
            <div onClick={() => handleDelete(record.id)}>
              <AiOutlineDelete className="edit_column" color="red" size="20" />
            </div>
          </div>
        </td>
      ),
    },
  ];
  const handleDelete = (id) => {
    let filteredData = data.filter((i) => i.id !== id);
    console.log(filteredData);
    setData(filteredData);
  };

  let adminInfo = JSON.parse(localStorage.getItem("user"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  let questionData = {
    name: "Qo'chqor",
    phone: "+998994567898",
    inn: "123456789",
    company_name: "UzGazOil",
    email: "test@gmail.com",
    text: "Make a contract",
    type: "question",
    reviewed: false,
  }

  const getPurchases = async () => {
    setLoading(true);
    try {
      const res = Axios.post("/adminside/request_create/", questionData, { headers: header });
      // console.log(res);
      setData(res?.results);
      setLoading(false);
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    // getPurchases();
  }, []);
  return (
    <StyledPurchases>
      <header>
        <h2 className="title" onClick={getPurchases}>Товары</h2>
        <Link to="/add-product">
          <Button type="primary" size="large  ">
            <FiPlus color="#fff" size="16" />
            Добавить новый товар
          </Button>
        </Link>
        <div className="search_block">
          <input
            type="text"
            placeholder="Название товара,артикул,уникальный код"
          />
          <AiOutlineSearch color="#000" size="24" />
        </div>
      </header>
      <div className="wrapper">
        <Table dataSource={data} columns={columns} loading={loading} />
      </div>
    </StyledPurchases>
  );
}

export default Purchases;
