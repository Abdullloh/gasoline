import styled from "styled-components";

export const ProductDetailStyle = styled.div`
  .detail-heading {
    padding: 15px 7px;
    display: flex;
    border-bottom: 1px solid;
    .heading-images {
      width: 50%;
      display: flex;
      .ant-image {
        width: 80%;
        cursor: pointer;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      div {
        width: 20%;
        margin: 8px;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
        }
      }
    }
    .heading-info {
      width: 50%;
      button {
        background: #000000;
        border: 1px solid #000000;
border-radius: 8px;
      }
      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 26px;
      }
      h4 {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 46px;
      }
      button {
        width: 50%;
        margin-top: 30px;
      }
    }
  }
  .detail-body {
    p {
      font-size: 15px;
      font-weight: 300;
    }
  }
`;
