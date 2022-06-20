import React from "react";
import ScrollToTop from "../ScrollToTop";
import Admin from "./Admin/Admin";
import MainLanding from "./Landing/MainLanding";

function App() {
  let data = JSON.parse(localStorage.getItem('user'))
  console.log(data);

  return (
    <>
    <ScrollToTop/>
    {data?.admin?.role === 'Manager' ? <Admin/> : <MainLanding />}
    </>
  )
}

export default App;
