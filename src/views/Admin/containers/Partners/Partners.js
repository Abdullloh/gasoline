import React, { useEffect, useState } from "react";
import { Table, Checkbox, Modal, Row, Col, Button, Form, Input } from "antd";
import { StyledPartners } from "./Partners.style";

function Partners() {
  const [data, setData] = useState([]);
  const [editComp, setEditComp] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formValues, setFormValues] = useState({
    compName: "",
    ceo: "",
    nameBank: "",
    inn: "",
    mfo: "",
    addressComp: "",
    phoneNum: "",
    accountNum: "",
  });

  const closeModal = () => {
    setIsVisible(false);
    setModalData(null);
  };
  const openModal = () => {
    setIsVisible(true);
  };
  const handleEditComp = () => {
    setEditComp((prev) => !prev);
  };
  const columns = [
    {
      dataIndex: "compName",
      render: (text, record) => (
        <td className="ant-table-cell" onClick={() => getCompInfo(record.id)}>
          {text}
        </td>
      ),
    },
    {
      dataIndex: "hasAccess",
      render: (text, record) => (
        <Checkbox onChange={() => handleAccess(record.id)} checked={text} />
      ),
    },
  ];
  useEffect(() => {
    setData([
      {
        id: "1",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "2",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "3",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "4",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "5",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "6",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "7",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "8",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
    ]);
    setLoading(false);
  }, []);

  const handleAccess = (id) => {
    setData(
      data.map((item) => {
        if (item.id == id) item.hasAccess = !item.hasAccess;
        return item;
      })
    );
  };

  const getCompInfo = (id) => {
    data.map((item) => {
      if (item.id == id) {
        setModalData(item);
      }
    });

    openModal();
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: value,
    });
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
          dataSource={data}
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
                      <h5>OOO test test</h5>
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
                      <h5>Test test tes</h5>
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
                      <h5>test test</h5>
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
                      <h5>1234556778</h5>
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
                      <h5>123456789</h5>
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
                      <h5>test test</h5>
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
                      <h5>+998 99 999 99 99</h5>
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
                      <h5>220022002200220022002200</h5>
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
                        <Button type="primary" htmlType="submit" onClick={console.log(formValues)}>
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
