import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Row, Col } from "antd";
import { StyledApplication } from "./Application.style";
import Axios from "../../../../utils/axios";

function Application() {
  const [data, setData] = useState([]);
  const [questionModal, setQuestionModal] = useState(false);
  const [applicationModal, setApplicationModal] = useState(false);
  const [questionData, setQuestionData] = useState({});
  const [applicationData, setApplicationData] = useState({});
  const [loading, setLoading] = useState(false);

  let adminInfo = JSON.parse(localStorage.getItem("user"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  const getRequests = async () => {
    setLoading(true);
    try {
      const res = Axios.get("/adminside/requests/", { headers: header });
      // console.log(res);
      setData(res?.results);
      console.log(res);
      setLoading(false);
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };
  const columns = [
    {
      render: (record) => (
        <td className="ant-table-cell">
          {record?.type == "question" ? "Вопрос" : "Заявка на партнертсво"}
        </td>
      ),
    },
    {
      render: (record) => (
        <td className="ant-table-cell">
          <h5 style={{"cursor": "pointer"}} onClick={() => getQuestionInfo(record?.id)}>открыть</h5>
        </td>
      ),
    },
  ];
  useEffect(() => {
    getRequests()
    console.log(data);
  }, []);

  const handleQuestionModal = () => {
    setQuestionModal((prev) => !prev);
  };
  const handleApplicationModal = () => {
    setApplicationModal((prev) => !prev);
  };
  const getQuestionInfo = async (id) => {
    let filterData = await data.filter((item) => item.id === id)[0];
    if (filterData.type == "question") {
      setQuestionData(filterData);
      handleQuestionModal();
    } else {
      setApplicationData(filterData);
      handleApplicationModal();
    }
  };

  return (
    <StyledApplication>
      <div className="wrapper">
        <header>
          <h1>Заявки и вопросы</h1>
        </header>
        <Table
          thead={false}
          columns={columns}
          dataSource={data}
          //   loading={loading}
        />
      </div>
      <Modal
        visible={questionModal}
        onCancel={handleQuestionModal}
        footer={null}
      >
        <>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Ф.И.О.</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{questionData?.fullName}</h5>
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
              <h5>{questionData?.phoneNum}</h5>
            </Col>
          </Row>
          <div
            className="question_block"
            style={{
              background: "white",
              border: "1px solid black",
              "border-radius": "8px",
              padding: "20px",
              "text-align": "center",
            }}
          >
            <h5>{questionData?.question}</h5>
          </div>
          <div className="modal_footer">
            <Row
              className="modal_row"
              style={{ margin: "15px 0px" }}
              gutter={[24, 0]}
            >
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Button type="primary" onClick={handleQuestionModal}>
                  Закрыть
                </Button>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <h5>{questionData.date}</h5>
              </Col>
            </Row>
          </div>
        </>
      </Modal>
      <Modal
        visible={applicationModal}
        onCancel={handleApplicationModal}
        footer={null}
      >
        <>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Ф.И.О.</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.fullName}</h5>
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
              <h5>{applicationData?.phoneNum}</h5>
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
              <h5>{applicationData?.inn}</h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Наименование организации</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.compName}</h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Дата сделки</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.date}</h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Номер сделки</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.dealNum}</h5>
            </Col>
          </Row>
        </>
        <Button type="primary" onClick={handleApplicationModal}>
          Закрыть
        </Button>
      </Modal>
    </StyledApplication>
  );
}

export default Application;
