import React, { useEffect, useState } from "react";
import { Table, Checkbox, Modal, Row, Col, Button, Form, Input } from "antd";
import { StyledPartners } from "./Partners.style";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";

function Partners() {
  const [data, setData] = useState([]);
  const [editComp, setEditComp] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  // const [partnerData, setPartnerData] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  let adminInfo = JSON.parse(localStorage.getItem("user"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };
  const [partnerList, loading] = useFetchHook("/adminside/partners/", {
    header,
  });
  console.log(partnerList);
  const [formValues, setFormValues] = useState({
    compName: modalData?.user?.name,
    ceo: modalData?.ceos_name,
    nameBank: modalData?.bank_name,
    inn: modalData?.inn,
    mfo: modalData?.mfo,
    addressComp: modalData?.company_address,
    phoneNum: modalData?.user?.phone,
    accountNum: modalData?.bank_account,
  });

  const closeModal = () => {
    setIsVisible(false);
  };
  const openModal = () => {
    setIsVisible(true);
  };
  const handleEditComp = () => {
    setEditComp((prev) => !prev);
  };
  const columns = [
    {
      dataIndex: "ceos_name",
      render: (text, record) => (
        <td className="ant-table-cell" onClick={() => getCompInfo(record.id)}>
          {record.user.name ? record.user.name : "Partner name"}
        </td>
      ),
    },
    {
      dataIndex: "active",
      render: (text, record) => (
        <Checkbox onChange={() => handleAccess(record.id, !text)} checked={text} />
      ),
    },
  ];

  const updatePartner = async (e, id) => {
    e.preventDefault();
    try {
      const res = await Axios.patch(`adminside/partner/${id}`, {
        ceos_name: formValues.ceo,
        bank_name: formValues.nameBank,
        inn: formValues.inn,
        mfo: formValues.mfo,
        company_address: formValues.addressComp,
        bank_account: formValues.accountNum,
        user: {id, phone: formValues.phoneNum, name: formValues.compName },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAccess = async (id, status) => {
    try {
      const res = await Axios.patch(
        `adminside/partner/${id}`,
        { id, active: status},
        { headers: header }
      );
      partnerList?.results.map((item) => {
        if (item.id == id) item.active = !item.active;
            return item;
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompInfo = async (id) => {
    try {
      const res = await Axios.get(`adminside/partner/${id}`, {
        headers: header,
      });
      console.log(res);
      setModalData(res?.data);
      setFormValues({
        compName: res?.data?.user?.name,
        ceo: res?.data?.ceos_name,
        nameBank: res?.data?.bank_name,
        inn: res?.data?.inn,
        mfo: res?.data?.mfo,
        addressComp: res?.data?.company_address,
        phoneNum: res?.data?.user?.phone,
        accountNum: res?.data?.bank_account,
      });
      openModal();
    } catch (error) {
      // console.log(error);
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <StyledPartners>
      <div className="wrapper">
        <header>
          <h1>Партнеры</h1>
        </header>
        <Table
          thead={false}
          columns={columns}
          dataSource={partnerList?.results}
          loading={loading}
        />
        <Modal visible={isVisible} footer={null} onCancel={closeModal}>
          <div className="modal_body">
            <Form layout="vertical">
              {editComp ? (
                <>
                  <div style={{ margin: "10px 0px" }}>
                    <label htmlFor="compName">Полное наименование</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.compName}
                      name="compName"
                      id="compName"
                    />
                  </div>
                  <div>
                    <label htmlFor="ceo">Генеральный директор</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.ceo}
                      name="ceo"
                      id="ceo"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="nameBank">Наименование банка</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.nameBank}
                      name="nameBank"
                      id="nameBank"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="inn">ИНН</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.inn}
                      name="inn"
                      id="inn"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="mfo">МФО</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.mfo}
                      name="mfo"
                      id="mfo"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="addressComp">Адрес компании</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.addressComp}
                      name="addressComp"
                      id="addressComp"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="phoneNum">Номер телефона</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.phoneNum}
                      name="phoneNum"
                      id="phoneNum"
                    />
                  </div>
                  <div>
                    <label htmlFor="accountNum">Расчетный счет</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.accountNum}
                      name="accountNum"
                      id="accountNum"
                    />
                  </div>
                </>
              ) : (
                <>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Полное наименование</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.user?.name}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Генеральный директор</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.ceos_name}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Наименование банка</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.bank_name}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>ИНН</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.inn}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>МФО</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.mfo}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Адрес компании</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.company_address}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Номер телефона</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.user?.phone}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Расчетный счет</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.bank_account}</h5>
                    </Col>
                  </Row>
                </>
              )}

              <div className="modal_footer" style={{ margin: "20px 0px" }}>
                {editComp ? (
                  <Row gutter={[16, 16]}>
                    <Col>
                      <Button onClick={handleEditComp}>Cancel</Button>
                    </Col>
                    <Col>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={(e) => updatePartner(e, modalData?.id)}
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                ) : (
                  <Button type="primary" onClick={handleEditComp}>
                    Изменить
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </StyledPartners>
  );
}

export default Partners;
