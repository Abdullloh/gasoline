import styled from "styled-components";

export const UserAccountWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 493px;
  padding: 50px 0;
  .left-side {
    width: 30%;
    background: #F4F7FA;
    margin-right: 20px;
    ul {
        list-style: none;
        padding: 50px 25px;
         
    }
    h4 {
        color: red ;
        cursor: pointer;
    }
  }
  .right-side {
    width: 70%;
    background: #F4F7FA;
  }
`;
