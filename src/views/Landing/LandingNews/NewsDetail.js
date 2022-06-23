import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { StyledContainer } from "../../../styles/Container.style";
import Axios from "../../../utils/axios";
import { StyledDetails } from "./landing.style";

function NewsDetail() {
  const [data, setData] = useState({});
  const { newsId } = useParams();

  const getNew = async () => {
    try {
      const res = await Axios.get(`/blog/${newsId}`);
      console.log(res.data);
      setData(res?.data)
    } catch (error) {}
  };

  console.log(data, 'detail dataaaaa');
  useEffect(() => {
    getNew();
  }, []);
  return <StyledDetails>
    <StyledContainer>
        <div className="container">
            <div className="main">
                <Link to="/news">
                    <Button type='primary' ghost size="large">Назад</Button>
                </Link>
                <h1 className="title">
                    {data?.title}
                </h1>
                <p className="date">{data?.date}</p>
                <h4 className='description'>{data?.short_description}</h4>
                <img className='main_img' src={data?.cover_image?.image} alt="news" />
            </div>
        </div>
    </StyledContainer>
  </StyledDetails>;
}

export default NewsDetail;
