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
    li{
      margin-bottom:10px;
      cursor:pointer;
    }
  }
  .right-side {
    width: 70%;
    background: #F4F7FA;
    overflow-y: scroll;
    height:100%;
    padding:15px;
  }
  .flex-item{
    display:flex;
    width:350px;
    margin-bottom:10px;
    justify-content:space-between;
    align-items:center;
  }
  .item{
    width:45%;
  }
`;
