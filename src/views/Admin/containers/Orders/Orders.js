import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, Table } from "antd";
import { StyledOrders } from "./Orders.style";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";

function Orders() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  let adminInfo = JSON.parse(localStorage.getItem("user"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };
  const [ordersList, loading] = useFetchHook("/adminside/orders/", { header });
console.log(ordersList);
  const columns = [
    {
      dataIndex: "orderName",
      render: (text, record) => (
        <td className="ant-table-cell">
          <div
            style={{
              display: "flex",
              "align-items": "center",
              "justify-content": "space-between",
            }}
          >
            <h2>#{record?.product?.vendor_code}</h2>
            <p>{record?.created_at}</p>
          </div>
          <h4>{record?.customer_name}</h4>
          <h4>Телефон: {record?.customer_phone}</h4>
          <h2>{record?.product?.title}</h2>
          <p>
            {record?.product?.in_stock}x{record?.product?.price}
          </p>
        </td>
      ),
    },
    {
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          <h4>Организация: "{record?.partner_name}"</h4>
          <h4>Номер телефона организации: {record?.partner_phone}</h4>
        </>
      ),
    },
    {
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <div className="order_payment">
          <h2>{record?.price} UZS</h2>
          <Checkbox size="large" checked={record?.hasPaid}>
            Оплачено
          </Checkbox>
          <Checkbox size="large" checked={record?.hasDelivered}>
            Доставлено
          </Checkbox>
        </div>
      ),
    },
  ];

  return (
    <StyledOrders>
      <header>
        <h4 className="title">Заказы</h4>
        <div className="search_block">
          <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Button type="link">Поиск</Button>
        </div>
      </header>
      <div className="table_block">
        <Table
          columns={columns}
          dataSource={ordersList?.results}
          loading={loading}
        ></Table>
      </div>
    </StyledOrders>
  );
}

export default Orders;
