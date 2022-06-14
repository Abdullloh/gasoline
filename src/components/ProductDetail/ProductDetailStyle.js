import styled from "styled-components";

export const ProductDetailStyle = styled.div`
  .detail-heading {
    display: flex;
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
        img {
          width: 100%;
        }
      }
    }
    .heading-info {
      width: 50%;
      button {
        width: 50%;
        margin-top: 30px;
      }
    }
  }
`;
