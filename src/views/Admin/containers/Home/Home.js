import React from "react";
import { Button, Row, Col, Table } from "antd";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import ReportCard from "./ReportCards/ReportCard";
import OilImg from "../../../../assets/img/oil-img.svg";
import { StyledHome } from "./Home.style";

function Home() {
  const reports = [
    {
      title: "Прибыль",
      price: "40 000 000 UZS",
      hasIncrease: true,
      amount: "18",
    },
    {
      title: "Заказы",
      price: "451 штук",
      hasIncrease: false,
      amount: "25",
    },
    {
      title: "Выручка",
      price: "30 000 000 UZS",
      hasIncrease: false,
      amount: "35",
    },
    {
      title: "Пользователи",
      price: "4 551 штук",
      hasIncrease: true,
      amount: "25",
    },
    {
      title: "Сколько посетителей смотрели товары",
      price: "187",
      hasIncrease: true,
      amount: "25",
    },
  ];

  const searchColumns = [
    {
      title: "Запросы",
      dataIndex: "productName",
    },
    {
      title: "Время",
      dataIndex: "productTime",
    },
  ];
  const searchData = [
    {
      productName: "Моторное масло для машин",
      productTime: "28 января, 20:22",
    },
    {
      productName: "Моторное масло для машин",
      productTime: "28 января, 20:22",
    },
    {
      productName: "Моторное масло для машин",
      productTime: "28 января, 20:22",
    },
    {
      productName: "Моторное масло для машин",
      productTime: "28 января, 20:22",
    },
    {
      productName: "Моторное масло для машин",
      productTime: "28 января, 20:22",
    },
  ];
  const bestSellerColumns = [
    {
      title: "№",
      dataIndex: "id",
      width: 50,
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Продукт",
      dataIndex: "product",
      render: (text) => (
        <div>
          <img
            className="table_img"
            style={{ width: "27px", height: "27px" }}
            src={text.img}
            alt="product"
          />
          {text.title}
        </div>
      ),
    },
    {
      title: "Цена",
      dataIndex: "price",
    },
    {
      title: "Продано",
      dataIndex: "sales",
    },
    {
      title: "Прибыль",
      dataIndex: "profit",
    },
  ];
  const bestSellerData = [
    {
      id: "1",
      product: {
        img: OilImg,
        title: "Моторное масло",
      },
      price: "99 000 UZS ",
      sales: "200 штук",
      profit: "1 000 000 UZS",
    },
    {
      id: "2",
      product: {
        img: OilImg,
        title: "Моторное масло",
      },
      price: "99 000 UZS ",
      sales: "200 штук",
      profit: "1 000 000 UZS",
    },
    {
      id: "3",
      product: {
        img: OilImg,
        title: "Моторное масло",
      },
      price: "99 000 UZS ",
      sales: "200 штук",
      profit: "1 000 000 UZS",
    },
    {
      id: "4",
      product: {
        img: OilImg,
        title: "Моторное масло",
      },
      price: "99 000 UZS ",
      sales: "200 штук",
      profit: "1 000 000 UZS",
    },
    {
      id: "5",
      product: {
        img: OilImg,
        title: "Моторное масло",
      },
      price: "99 000 UZS ",
      sales: "200 штук",
      profit: "1 000 000 UZS",
    },
  ];

  return (
    <StyledHome>
      <div className="top_block">
        <header>
          <PageTitle title={"Главная страница"} />
          <Button>Sort</Button>
        </header>
        <Row gutter={[16, 16]}>
          {reports?.map((item, index) => (
            <Col
              className="gutter-row"
              key={index}
              sm={{ span: 12 }}
              md={{span: 8}}
              lg={{ span: 6 }}
            >
              <ReportCard
                title={item?.title}
                price={item?.price}
                hasIncrease={item?.hasIncrease}
                amount={item?.amount}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div className="best_seller">
        <PageTitle title="Бестселлеры" />
        <Table
          columns={bestSellerColumns}
          dataSource={bestSellerData}
          pagination={false}
        />
      </div>
      <div className="search_block">
        <PageTitle title="Поиск по названию" />
        <Table
          columns={searchColumns}
          dataSource={searchData}
          pagination={false}
        />
      </div>
    </StyledHome>
  );
}

export default Home;
