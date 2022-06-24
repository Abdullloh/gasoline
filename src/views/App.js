import React from "react";
import ScrollToTop from "../ScrollToTop";
import Admin from "./Admin/Admin";
import MainLanding from "./Landing/MainLanding";
import './App.css';
import Home from "./Admin/containers/Home/Home";

function App() {
  let user_info = JSON.parse(localStorage.getItem('user_info'))
console.log(user_info);
  console.log(user_info);

  return (
    <>
    <ScrollToTop/>
    {user_info?.user?.role === 'Manager' ? <Admin/> : <MainLanding />}
    </>
  )
}

export default App;
