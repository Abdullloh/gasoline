import React from "react";
import { StyledNewsCard } from "./landing.style";

function NewsCard(props) {
    const {item} = props;
  return (
    <StyledNewsCard>
      <div className="card_header">
        <img src={item?.cover_image?.image} alt={item?.title} />
      </div>
      <p className="news_date">{item?.date}</p>
      <h3 className="news_title">{item?.title}</h3>
      {/* <p className="news_subtitle">{item?.short_description}</p> */}
    </StyledNewsCard>
  );
}

export default NewsCard;
