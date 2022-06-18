import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/Container.style";
import { UserAccountWrapper } from "./useAccounStyle";

export default function UserAccount() {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear()
    window.location.reload()
    navigate('/')
  }
  return <StyledContainer>
    <div className="container">
      <UserAccountWrapper>
           <div className="left-side">
              <ul>
                <li>Личные данные</li>
                <li>Заказы</li>
              <h4 onClick={()=> logout()}>Выйти</h4>
              </ul>
           </div>
           <div className="right-side">
            <h2>Личные данные</h2>
              <div>
              Ф.И.О
              </div> 
           </div>
      </UserAccountWrapper>
    </div>
    </StyledContainer>;
}
