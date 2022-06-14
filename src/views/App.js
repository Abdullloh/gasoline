import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import Navbar from "../components/Navbar/Navbar";
import Landing from "./Landing";
import Footer from "../components/Footer/Footer";
import { ROUTES } from "../routes";
import Service from "../components/Servise/Service";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {ROUTES?.map((item) => (
          <Route key={item} path={item?.path} element={item?.component} />
        ))}
        <Route path="" element={<Navigate to="/" />} />
      </Routes>
      <Service />
      <Footer />
    </>
  );
}

export default App;
