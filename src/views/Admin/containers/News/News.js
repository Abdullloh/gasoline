import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import EditIcon from "../../../../assets/img/edit-alt.svg";
import { StyledNews } from "./News.style";
import Axios from "../../../../utils/axios";

function News() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const res = await Axios.get("/blog/");
      console.log(res);
      if (res.status == 200) {
        setNews(res?.data?.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNew = async (id) => {
    let filtereData = news.filter((item) => item.id !== id);
    try {
      const res = await Axios.delete(`/blog/${id}`);
      setNews(filtereData);
    } catch (error) {}
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <StyledNews>
      <header>
        <h1>Новости</h1>
        <Link to="/add-news">
          <Button type="primary" size="large">
            <AiOutlinePlus color="white" />
            Добавить новость
          </Button>
        </Link>
      </header>
      <div className="main">
        {news.length ? (
          news.map((item, index) => (
            <div className="news" key={index}>
              <div>
                <img
                  className="news_img"
                  src={item?.cover_image?.image}
                  alt="news"
                />
              </div>
              <div>
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.short_description}</p>
              </div>
              <div className="news_handle">
                <p className="news_date">23.06.22</p>
                <FiEdit color="#364a7e" size="20" />
                <AiOutlineDelete
                  color="red"
                  size="20"
                  onClick={() => deleteNew(item.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="no_data">
            <h2>No data</h2>
          </div>
        )}
      </div>
    </StyledNews>
  );
}

export default News;
