import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Row, Col } from "antd";
import { StyledApplication } from "./Application.style";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";
import axios from "axios";

function Application() {
  const [questionModal, setQuestionModal] = useState(false);
  const [applicationModal, setApplicationModal] = useState(false);
  const [questionData, setQuestionData] = useState({});
  const [applicationData, setApplicationData] = useState({});

  let adminInfo = JSON.parse(localStorage.getItem("user"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  const [requestsList, loading] = useFetchHook("/adminside/requests/", {
    header,
  });
  console.log(requestsList);
  const columns = [
    {
      render: (record) => (
        <>{record?.type == "question" ? "Вопрос" : "Заявка на партнертсво"}</>
      ),
    },
    {
      render: (record) => (
        <>
          <h5
            style={{ cursor: "pointer" }}
            onClick={() => getRequestById(record?.id)}
          >
            открыть
          </h5>
        </>
      ),
    },
  ];

  const getRequestById = async (id) => {
    try {
      const res = await Axios.get(`/adminside/request/${id}`, {
        headers: header,
      });
      console.log(res);
      if (res?.data?.type == "question") {
        setQuestionData(res?.data);
        handleQuestionModal();
        console.log(questionData);
      } else {
        setApplicationData(res?.data);
        handleApplicationModal();
        console.log(applicationData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestionModal = () => {
    setQuestionModal((prev) => !prev);
  };
  const handleApplicationModal = () => {
    setApplicationModal((prev) => !prev);
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
          dataSource={requestsList?.results}
          loading={loading}
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
              <h5>{questionData?.name}</h5>
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
              <h5>{questionData?.phone}</h5>
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
            <h5>{questionData?.text}</h5>
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
                <h5>{questionData.created_at}</h5>
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
              <h5>{applicationData?.name}</h5>
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
              <h5>{applicationData?.phone}</h5>
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
              <h5>{applicationData?.company_name}</h5>
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
              <h5>{applicationData?.created_at}</h5>
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
