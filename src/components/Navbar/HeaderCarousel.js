import React, { useEffect, useState } from "react";
import { StyledHeaderCarousel } from "./HeaderCarousel.style";
import Down from "../../assets/img/Arrow-down.svg";
import Up from "../../assets/img/Arrow-up.svg";
import Axios from "../../utils/axios";

function HeaderCarousel() {
  const [data, setData] = useState([]);

  const getPrices = async () => {
    try {
      const res = await Axios.get("/products/product_prices/");
      console.log(res.data);
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrices();
  }, []);
  return (
    <StyledHeaderCarousel>
      <div className="carousel_outer">
        <div className="carousel_inner">
          <span>
            {data.map((item) => (
              <div className="card">
                <div className="text_block">
                  <h4>{item?.product}</h4>
                </div>
                <div className="price_block">
                  <div>
                    <p className="price">{item?.price} UZS</p>
                    {item?.percentage < 0 ? (
                      <p className="decreasing">{item?.percentage}%</p>
                    ) : (
                      <p className="increasing">+{item?.percentage}%</p>
                    )}
                  </div>
                  {item?.percentage < 0 ? (
                    <img src={Down} alt="decreasing" />
                  ) : (
                    <img src={Up} alt="increasing" />
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
