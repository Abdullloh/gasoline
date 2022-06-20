import React, { useEffect, useState } from "react";
import { StyledHeaderCarousel } from "./HeaderCarousel.style";
import Down from "../../assets/img/Arrow-down.svg";
import Up from "../../assets/img/Arrow-up.svg";

function HeaderCarousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        title: "Моторное маcло",
        price: 4520,
        hasincrease: true,
        amount: "50",
      },
      {
        title: "Трансмиссион-ные масла",
        price: 6230.98,
        hasincrease: false,
        amount: "20",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: true,
        amount: "20",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: false,
        amount: "70",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: true,
        amount: "20",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: true,
        amount: "20",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: false,
        amount: "40",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: false,
        amount: "70",
      },
      {
        title: "Моторное маcло",
        price: 4520,
        hasincrease: true,
        amount: "50",
      },
      {
        title: "Трансмиссион-ные масла",
        price: 6230.98,
        hasincrease: false,
        amount: "20",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: true,
        amount: "20",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: false,
        amount: "70",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: true,
        amount: "20",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: true,
        amount: "20",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: false,
        amount: "40",
      },
      {
        title: "Компрессорные маcла",
        price: 6230.98,
        hasincrease: false,
        amount: "70",
      },
    ]);
  }, []);
  return (
    <StyledHeaderCarousel>
      <div className="carousel_outer">
        <div className="carousel_inner">
          <span>
            {data.map((item) => (
              <div className="card">
                <div className="text_block">
                  <h4>{item?.title}</h4>
                </div>
                <div className="price_block">
                  <div>
                    <p className="price">{item.price} UZS</p>
                    {item?.hasincrease ? (
                      <p className="increasing">+{item.amount}%</p>
                    ) : (
                      <p className="decreasing">-{item.amount}%</p>
                    )}
                  </div>
                  {item?.hasincrease ? (
                    <img src={Up} alt="increasing" />
                  ) : (
                    <img src={Down} alt="decreasing" />
                  )}
                </div>
              </div>
            ))}
          </span>
        </div>
      </div>
    </StyledHeaderCarousel>
  );
}

export default HeaderCarousel;
