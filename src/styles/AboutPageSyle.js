import styled from "styled-components";

export const AboutPageStyle = styled.div`
  width: 45%;
  margin-top:80px;
  p{
    font-weight: 600;
    font-size: 18px;
    word-spacing: 3px;
    line-height: 25px;
  }
  ul {
    padding: 0;
      li {
        font-size: 20px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
      }
  } 
  @media only screen and (max-width:1024px){
    width:80%;
  }
  @media only screen and (max-width:476px){
    width:100%;
    ul {
        li {
            font-weight: 600;
            font-size:12px;
            flex-direction: column;
        }
    }

  }
`;
