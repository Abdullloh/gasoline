import React, { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Landing from "./Landing";
import Footer from "../../components/Footer/Footer";
import { ROUTES } from "../../routes/index";
import Axios from "../../utils/axios";
import Korzinka from "../../assets/img/korzinka.svg";
import { StyledMainLanding } from "./MainLanding.style";
import { StyledContainer } from "../../styles/Container.style";

function MainLanding() {
  const [cartList, setCartList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getCarts = async () => {
    try {
      const res = await Axios.get("/cart");
      setCartList(res?.data?.results);
    } catch (error) {}
  };

  const removeItemFromBasket = async (id) => {
    try {
      const res = await Axios.delete(`/cart/cartitem/${id}`);
      console.log(res);
      if (res.status === 200) {
        getCarts();
      }
    } catch (error) {}
  };

  const openModal = async () => {
    getCarts();
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledMainLanding>
          <Navbar
            isVisible={showModal}
            cartList={cartList}
            removeItemFromBasket={removeItemFromBasket}
            handleCancel={handleCancel}
          />
          <Routes>
            {ROUTES?.map((item) => (
              <Route key={item} path={item?.path} element={item?.component} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <div className="fixed_korzinka" onClick={openModal}>
            <img src={Korzinka} alt="Korzinka" />
          </div>
          <Footer />
    </StyledMainLanding>
  );
}

export default MainLanding;
