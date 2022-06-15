import React from "react";
import { Button, Row, Col } from "antd";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import ReportCard from "../../../../components/ReportCards/ReportCard";

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

  return (
    <div>
      <header>
        <PageTitle title={"Главная страница"} />
        <Button>Sort</Button>
      </header>
        <Row gutter={[16, 16]}>
          {reports?.map((item, index) => (
            <Col className="gutter-row" key={index} span={6}>
              <ReportCard
                title={item?.title}
                price={item?.price}
                hasIncrease={item?.hasIncrease}
                amount={item?.amount}
              />
            </Col>
          ))}
        </Row>
      <div className="best_seller">
        <PageTitle title="Бестселлеры" />
      </div>
    </div>
  );
}

export default Home;
