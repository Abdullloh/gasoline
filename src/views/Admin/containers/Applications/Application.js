import React, {useState, useEffect} from "react";
import {Table} from 'antd'
import { StyledApplication } from "./Application.style";

function Application() {
    const [data, setData] = useState([])

    
    useEffect(() => {
       setData([
        {
            id: 1,
            fullName: "Test",
            compName: "Test",
            compNum: "+998 99 999 99 99",
            inn: "1234556778",
            dealDate: "09.03.2022",
            dealNum: "автоматически",
            question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque dolore vero modi nulla provident vitae, mollitia voluptatibus libero maiores."
        },
        {
            id: 2,
            fullName: "Test",
            compName: "Test",
            compNum: "+998 99 999 99 99",
            inn: "1234556778",
            dealDate: "09.03.2022",
            dealNum: "автоматически",
            question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque dolore vero modi nulla provident vitae, mollitia voluptatibus libero maiores."
        },
        {
            id: 3,
            fullName: "Test",
            compName: "Test",
            compNum: "+998 99 999 99 99",
            inn: "1234556778",
            dealDate: "09.03.2022",
            dealNum: "автоматически",
            question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque dolore vero modi nulla provident vitae, mollitia voluptatibus libero maiores."
        },
       ])
    }, []);
  return (
    <StyledApplication>
      <div className="wrapper">
        <header>
          <h1>Заявки и вопросы</h1>
        </header>

      </div>
    </StyledApplication>
  );
}

export default Application;
