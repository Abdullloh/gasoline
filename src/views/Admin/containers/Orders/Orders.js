import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Button, Checkbox, Modal, Table, Space, Spin, Row, Col } from "antd";
import { StyledOrders } from "./Orders.style";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";

function Orders() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [reqLoading, setReqLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  let adminInfo = JSON.parse(localStorage.getItem("user_info"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  const handleShow = () => {
    setVisible((prev) => !prev);
  };

  const getOrders = async () => {
    setLoading(true);
    try {
      const res = await Axios.get("/adminside/orders/", { headers: header });
      setData(res?.data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getById = async (id) => {
    setReqLoading(true);
    try {
      const res = await Axios.get(`/adminside/order/${id}`, {
        headers: header,
      });
      setModalData(res.data);
      setReqLoading(false);
      handleShow();
    } catch (error) {
      console.log(error);
      setReqLoading(false);
    }
  };
console.log(modalData, 'modalDat5aaaaaaaaaa');
  const handlePayment = async (id, status) => {
    setLoading(true);
    try {
      const res = await Axios.patch(
        `/adminside/order/${id}`,
        { id, paid: status },
        { headers: header }
      );
      if (res?.status == 200) {
        getOrders();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleDelivered = async (id, status) => {
    setLoading(true);
    try {
      const res = await Axios.patch(
        `/adminside/order/${id}`,
        { id, delivered: status },
        { headers: header }
      );
      if (res?.status == 200) {
        getOrders();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
            <h2>#{record?.id}</h2>
            <p>{moment(record?.created_at).format("DD.MM.YYYY")}</p>
          </div>
          <h4>{record?.customer_name}</h4>
          <h4>Телефон: {record?.customer_phone}</h4>
          <h2>{record?.product?.title}</h2>
          <p>
            {record?.quantity}x{record?.product?.price}
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
          <Checkbox
            size="large"
            checked={record?.paid}
            onClick={() => handlePayment(record.id, !record.paid)}
          >
            Оплачено
          </Checkbox>
          <Checkbox
            size="large"
            checked={record?.delivered}
            onClick={() => handleDelivered(record.id, !record?.delivered)}
          >
            Доставлено
          </Checkbox>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getOrders();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      let searchedData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(searchedData);
    } else {
      setFilteredResults(data);
    }
  };
  return (
    <StyledOrders>
      <Modal
        footer={null}
        visible={visible}
        onCancel={handleShow}
        className="modalInfo"
      >
        <Row style={{'margin': '10px 0px'}}>
          <Col span={12}>
            <h4>Ф.И.О.</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.customer_name}</h4>
          </Col>
        </Row>
        <Row style={{'margin': '10px 0px'}}>
          <Col span={12}>
            <h4>Номер телефона</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.customer_phone}</h4>
          </Col>
        </Row>
        <Row style={{'margin': '10px 0px'}}>
          <Col span={12}>
            <h4>ИНН</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.inn}</h4>
          </Col>
        </Row>
        <Row style={{'margin': '10px 0px'}}>
          <Col span={12}>
            <h4>Наименование организации</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.inn}</h4>
          </Col>
        </Row>
        <Row style={{'margin': '10px 0px'}}>
          <Col span={12}>
            <h4>Email</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.customer_email}</h4>
          </Col>
        </Row>
        <Button onClick={handleShow} type="primary">
          Закрыть
        </Button>
      </Modal>
      <div className="wrapper">
        {reqLoading ? (
          <Spin size="large" />
        ) : (
          <div style={{ width: "100%" }}>
            <header>
              <h4 className="title">Заказы</h4>
              <div className="search_block">
                <div>
                  <input
                    value={searchInput}
                    onChange={(e) => searchItems(e.target.value)}
                  />
                </div>
                <Button type="link">Поиск</Button>
              </div>
            </header>
            <div className="table_block">
              {searchInput.length > 1 ? (
                <Table
                  columns={columns}
                  dataSource={filteredResults}
                  loading={loading}
                ></Table>
              ) : (
                <Table
                  columns={columns}
                  dataSource={data}
                  loading={loading}
                ></Table>
              )}
            </div>
          </div>
        )}
      </div>
    </StyledOrders>
  );
}

export default Orders;
