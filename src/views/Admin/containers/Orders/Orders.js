import React, { useState, useRef, useEffect } from "react";
import { Button, Checkbox, Table } from "antd";
import { StyledOrders } from "./Orders.style";

function Orders() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

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
            <h2>#{record?.orderNum}</h2>
            <p>{record?.orderDate}</p>
          </div>
          <h4>{record?.orderPerson}</h4>
          <h4>Телефон: {record?.orderPhoneNum}</h4>
          <h2>{record?.orderName}</h2>
          <p>
            {record?.quantity}x{record?.productPrice}
          </p>
        </td>
      ),
    },
    {
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          <h4>Организация: “Название”</h4>
          <h4>Номер телефона организации: {record?.orderPhoneNum}</h4>
        </>
      ),
    },
    {
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <div className="order_payment">
          <h2>{record?.payment} UZS</h2>
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
  useEffect(() => {
    setData([
      {
        id: 123,
        orderNum: 2,
        orderDate: "18.09.2022",
        orderPerson: "Джамшид Намозов",
        orderPhoneNum: "+998 99 999 99 99",
        orderName: "Моторное масло",
        productPrice: "300000",
        hasPaid: true,
        payment: "60 000.00",
        hasDelivered: false,
        quantity: 3,
      },
      {
        id: 23,
        orderNum: 45,
        orderDate: "28.02.2022",
        orderPerson: "Джамшид",
        orderPhoneNum: "+998 99 999 99 99",
        orderName: "Моторное масло",
        productPrice: "300000",
        paid: false,
        payment: "150 000.00",
        delivered: true,
        quantity: 5,
      },
      {
        id: 3,
        orderNum: 85,
        orderDate: "28.02.2022",
        orderPerson: "Джамшид",
        orderPhoneNum: "+998 99 999 99 99",
        orderName: "Моторное масло",
        productPrice: "300000",
        paid: false,
        payment: "150 000.00",
        delivered: true,
        quantity: 5,
      },
      {
        id: 4,
        orderNum: 65,
        orderDate: "28.02.2022",
        orderPerson: "Джамшид",
        orderPhoneNum: "+998 99 999 99 99",
        orderName: "Моторное масло",
        productPrice: "300000",
        paid: false,
        payment: "150 000.00",
        delivered: true,
        quantity: 5,
      },
    ]);
  }, []);
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
          dataSource={data}
          pagination={{ defaultPageSize: 4 }}
        ></Table>
      </div>
    </StyledOrders>
  );
}

export default Orders;
