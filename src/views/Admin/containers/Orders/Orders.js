import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, Modal, Table, Space, Spin, Row, Col } from "antd";
import { StyledOrders } from "./Orders.style";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";

function Orders() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [reqLoading, setReqLoading] = useState(false);
  let adminInfo = JSON.parse(localStorage.getItem("user"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };
  const [ordersList, loading] = useFetchHook("/adminside/orders/", { header });
  console.log(ordersList);

  const handleShow = () => {
    setVisible((prev) => !prev);
  };

  const getById = async (id) => {
    setReqLoading(true);
    try {
      const res = await Axios.get(`/adminside/order/${id}`, {
        headers: header,
      });
      console.log(res);
      setModalData(res.data);
      setReqLoading(false);
      handleShow();
    } catch (error) {
      console.log(error);
      setReqLoading(false);
    }
  };
  const columns = [
    {
      dataIndex: "orderName",
      render: (text, record) => (
        <td
          className="ant-table-cell"
          onClick={() => getById(record?.id)}
          style={{ cursor: "pointer" }}
        >
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
          <Checkbox size="large" checked={record?.paid}>
            Оплачено
          </Checkbox>
          <Checkbox size="large" checked={record?.delivered}>
            Доставлено
          </Checkbox>
        </div>
      ),
    },
  ];

  return (
    <StyledOrders>
      <Modal footer={null} visible={visible} onCancel={handleShow} className="modalInfo" >
        <Row>
          <Col span={12}>
          <h4>Ф.И.О.</h4>
          </Col>
          <Col span={12}>
          <h4>{modalData?.customer_name}</h4>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <h4>Номер телефона</h4>
          </Col>
          <Col span={12}>
          <h4>{modalData?.customer_phone}</h4>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <h4>ИНН</h4>
          </Col>
          <Col span={12}>
          <h4>{modalData?.inn}</h4>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <h4>Наименование организации</h4>
          </Col>
          <Col span={12}>
          <h4>{modalData?.inn}</h4>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <h4>Email</h4>
          </Col>
          <Col span={12}>
          <h4>{modalData?.email}</h4>
          </Col>
        </Row>
        <Button onClick={handleShow} type='primary'>Закрыть</Button>
      </Modal>
      {reqLoading ? (
          <Spin size="large" />
      ) : (
        <div>
          <header>
            <h4 className="title">Заказы</h4>
            <div className="search_block">
              <div>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
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
        </div>
      )}
    </StyledOrders>
  );
}

export default Orders;
