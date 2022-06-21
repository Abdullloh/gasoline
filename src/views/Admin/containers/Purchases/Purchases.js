import React, { useState, useEffect } from "react";
import { Button, Checkbox, Popconfirm, Table } from "antd";
import { FiPlus } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineDelete } from "react-icons/ai";
import { StyledPurchases } from "./Purchases.style";
import OilImg from "../../../../assets/img/oil-img.svg";
import { Link } from "react-router-dom";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";

function Purchases() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let adminInfo = JSON.parse(localStorage.getItem("user"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await Axios.get("/adminside/products/", {headers: header});
      setData(res.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
   
  const handleProductSale = async (id, status) => {
    setLoading(true);
    try {
      const res = await Axios.patch(
        `/adminside/products/${id}`,
        { available: status },
        { headers: header }
      );
      if (res?.status == 200) {
        getProducts();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


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
            {record?.images[0]?.image ? (
              <img
                className="product_img"
                src={record?.images[0].image}
                alt="Product"
              />
            ) : (
              <img className="product_img" src={OilImg} alt="Product" />
            )}
            <div>
              <h3 className="product_name">{text}</h3>
              <Checkbox checked={record?.available} size="small" onClick={() => handleProductSale(record?.id, !record?.available)}>
                В наличи
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
            <div>
              <Popconfirm
                title="Are you sure？"
                okText="Yes"
                cancelText="No"
                onConfirm={() => handleDelete(record.id)}
              >
                <AiOutlineDelete
                  className="edit_column"
                  color="red"
                  size="20"
                />
              </Popconfirm>
            </div>
          </div>
        </td>
      ),
    },
  ];
  const handleDelete = async (id) => {
    try {
      const res = await Axios.delete(`/products/product/${id}`);
      console.log(res);
      if (res.status == 204) {
        let filterData = data.filter((item) => item.id !== id);
        setData(filterData);
      }
    } catch (error) {
      console.log(error);
    }
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
  };


  useEffect(() => {
    getProducts();
  }, [])

  return (
    <StyledPurchases>
      <header>
        <h2 className="title">Товары</h2>
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
