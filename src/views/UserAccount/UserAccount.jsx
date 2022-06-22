import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/Container.style";
import { UserAccountWrapper } from "./useAccounStyle";
import {useDispatch,useSelector} from "react-redux"
import { getUserOrders, getUserInfo } from "../../Redux/userInfos/user";
import exit from "../../assets/img/exit.svg"

export default function UserAccount() {
  const navigate = useNavigate()
  const [orderSection,setOrderSection] = useState(false)
  const dispatch = useDispatch()
  const userInfo = useSelector(state=>state.user.userInfo)
  const userOrders = useSelector(state=>state.user.userOrders.data) ||[] 

  console.log(userOrders)
  useEffect(()=>{
    let mounting = true;
    if(mounting){
       dispatch(getUserInfo())
    }
    return ()=>{
      mounting = false;
    }
  },[])

  const logout = ()=>{
    localStorage.removeItem("user_info")
    navigate('/sign-in')
  }


  const toOrdersSection = ()=>{
     setOrderSection(true)
     dispatch(getUserOrders())
  }

  const toUserDetail = ()=>{
    setOrderSection(false)
    dispatch(getUserInfo())
 }

  return <StyledContainer>
    <div className="container">
      <UserAccountWrapper>
           <div className="left-side">
              <ul>
                <li onClick = {toUserDetail}>Личные данные</li>
                <li onClick={toOrdersSection}>Заказы</li>
              <h4  onClick={()=> logout()}> <img src={exit} alt="exit"/>  Выйти</h4>
              </ul>
           </div>
           <div className="right-side">
           {
            !orderSection ? <>
            <h2>Личные данные</h2>
              <div className = "flex-item">
              <p className = "item">Ф.И.О</p>  <p className = "item">{userInfo?.name}</p>
              </div> 

              <div className = "flex-item">
             <p className = "item">Номер телефона</p>  <p className = "item">{userInfo?.phone}</p>
              </div> 

              <div className = "flex-item">
              <p className = "item">ИНН</p>   <p className = "item">{userInfo?.inn}</p>
              </div> 

              <div className = "flex-item">
              <p className = "item">Организация</p>  <p className = "item">{userInfo?.company_name}</p>
              </div> 

              <div className = "flex-item">
              <p className = "item">Логин</p>  <p className = "item">{userInfo?.email}</p>
              </div> 
           </>:<>
           <h2>Заказы</h2>
              
           {
                userOrders?.map(item=>{
                  return <div key = {item.id} className = "flex-item">
                  
                  {
                    item?.items?.map(nested=>{
                      return <React.Fragment key = {nested.id}>
                       <p className = "item"><img style = {{width:"100px"}} src = {"http://137.184.114.36:7774"+nested?.product?.cover_image} alt = "images"/></p>
                    </React.Fragment>
                    })
                   }
                  
                  
                    <p className = "item">
                    
                   {
                    item?.items?.map(nested=>{
                      return <React.Fragment key = {nested.id}>
                       {nested?.product?.title}
                      <br />
                      {nested?.quantity} x {nested?.product?.price}
                     <br />
                     Цена:{nested?.product?.price} UZS
                    <br />
                    Количество: {nested?.quantity}шт
                    </React.Fragment>
                    })
                   }
                </p>
              </div>
                })
              }
           </>
           }
           </div>
      </UserAccountWrapper>
    </div>
    </StyledContainer>;
}
