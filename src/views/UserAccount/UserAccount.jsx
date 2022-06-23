import React,{useEffect,useState} from "react";
import {Form,Formik,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/Container.style";
import { UserAccountWrapper } from "./useAccounStyle";
import {useDispatch,useSelector} from "react-redux"
import { getUserOrders, getUserInfo, editPartnerInfo } from "../../Redux/userInfos/user";
import exit from "../../assets/img/exit.svg"
import AddProduct from "./AddProduct/Addproduct"
import Purchases from "./Purchases/Purchases";
import Addproduct from "./AddProduct/Addproduct";
import EditProduct from "./EditProduct/EditProduct";
import homeIcon from "../../assets/img/home-black.svg"
import chartIcon from "../../assets/img/chart-black.svg"
import userIcon from "../../assets/img/user-black.svg"
import orderIcon from "../../assets/img/orders.svg"



export default function UserAccount() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // belong to customer
  const [orderSection,setOrderSection] = useState(false)
  //belong to partner
  const [edit_partnerInfo,set_edit_partnerInfo] = useState(false)
  const [viewPurchase,setViewPurchase] = useState(false)
  const [viewAddProduct,setViewAddProduct] = useState(false)
  const [viewEditProduct,setViewEditProduct] = useState(false)
  const [edit_id,set_edit_id] = useState("")

  

  
  const userInfo = useSelector(state=>state.user.userInfo)
  const userOrders = useSelector(state=>state.user.userOrders.data) ||[] 
  let role = JSON.parse(localStorage.getItem("user_info"))?.data?.user?.role


//universal
  useEffect(()=>{
    let mounting = true;
    if(mounting){
       dispatch(getUserInfo())
    }
    return ()=>{
      mounting = false;
    }
  },[])
//universal
  const logout = ()=>{
    localStorage.removeItem("user_info")
    navigate('/sign-in')
  }

// universal
const toUserDetail = ()=>{
  setOrderSection(false)
  setViewPurchase(false)
  setViewAddProduct(false)
  setViewEditProduct(false)

  dispatch(getUserInfo())
}

// belong to customer
  const toOrdersSection = ()=>{
     setOrderSection(true)
    setViewPurchase(false)
  setViewAddProduct(false)
  setViewEditProduct(false)

     dispatch(getUserOrders())
  }

//belong to partner
 const handlePartnerInfo = ()=>{
    set_edit_partnerInfo(true)
    setViewPurchase(false)
    setViewAddProduct(false)
  setViewEditProduct(false)


 }

 //belong to partner
 const handleViewPurchase = ()=>{
    set_edit_partnerInfo(true)
    setViewPurchase(true)
    setViewAddProduct(false)
  setViewEditProduct(false)

}


//belong to partner
const handleViewAddProduct = ()=>{
  set_edit_partnerInfo(true)
  setViewPurchase(false)
  setViewAddProduct(true)
  setViewEditProduct(false)

}

const handleViewEditProduct = (id)=>{
  set_edit_id(id)
  set_edit_partnerInfo(true)
  setViewPurchase(false)
  setViewAddProduct(false)
  setViewEditProduct(true)
}

 let initialValues = {
  inn:userInfo?.inn || null,
  email:userInfo?.email || null,
  name:userInfo?.name || null,
  phone:userInfo?.phone || null,   
  bank_account:userInfo?.bank_account || null,
  bank_name:userInfo?.bank_name || null,
  ceos_name:userInfo?.ceos_name || null,
  company_address:userInfo?.company_address || null,
  mfo:userInfo?.mfo || null,
}

const handleSubmit = async (data,{resetForm})=>{
  console.log(data)
  try {
    const originalPromiseResult = await dispatch(editPartnerInfo({content:data,id:userInfo?.id})).unwrap()
    dispatch(getUserInfo())
    set_edit_partnerInfo(false)
    resetForm({})
  } catch (rejectedValueOrSerializedError) {
    console.log("error occured")
  }
  // dispatch() 
  // resetForm({})
}

console.log(userOrders)

  return <StyledContainer>
    <div className="container">
      {
        role === "Customer" ?
        <UserAccountWrapper>
           <div className="left-side">
              <ul>
                <li onClick = {toUserDetail}> <img src={userIcon} alt="user" />  Личные данные</li>
                <li onClick={toOrdersSection}><img src={orderIcon} alt="chart" /> Заказы</li>
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
                  
                       <React.Fragment>
                       <p className = "item">
                        <img style = {{width:"100px"}} src = {"http://137.184.114.36:7774"+item?.product?.cover_image} alt = "images"/>
                      </p>
                    </React.Fragment>
                  
                  
                    <p className = "item">
                    
                      <React.Fragment>
                       {item?.product?.title}
                      <br />
                      {item?.quantity} x {item?.product?.price}
                     <br />
                     Цена:{item?.product?.price} UZS
                    <br />
                    Количество: {item?.quantity}шт
                    </React.Fragment>
                    
                </p>
              </div>
                })
              }
           </>
           }
           </div>
      </UserAccountWrapper>:
      <UserAccountWrapper>
      <div className="left-side">
         <ul>
           <li onClick = {()=>navigate("/")}> <img src={homeIcon} alt="home" />  Главная страница</li>
           <li onClick = {handleViewPurchase}><img src={orderIcon} alt="chart" />Товары</li>
           <li onClick = {()=>set_edit_partnerInfo(false)}><img src={userIcon} alt="user" />   Личные данные</li>
         <h4  onClick={()=> logout()}> <img src={exit} alt="exit"/>  Выйти</h4>
         </ul>
      </div>
      <div className="right-side">
      {
       !edit_partnerInfo ? <>

       <h2>Личные данные о кампании</h2>

       <div className = "flex-item">
        <p className = "item">Полное наименование</p>  <p className = "item">{userInfo?.ceos_name}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">Генеральный директор</p>  <p className = "item">{userInfo?.name}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">Наименование банка</p>  <p className = "item">{userInfo?.bank_name}</p>
         </div> 
         

         <div className = "flex-item">
        <p className = "item">Номер телефона</p>  <p className = "item">{userInfo?.phone}</p>
         </div> 
         

         <div className = "flex-item">
         <p className = "item">ИНН</p>   <p className = "item">{userInfo?.inn}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">МФО</p>   <p className = "item">{userInfo?.mfo}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">Адрес компании</p>  <p className = "item">{userInfo?.company_address}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">Расчетный счет</p>  <p className = "item">{userInfo?.bank_account}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">Логин</p>  <p className = "item">{userInfo?.email}</p>
         </div> 


        <div>
          <button className = "changeAccountBtn" onClick = {handlePartnerInfo}>Изменить</button>
        </div>
        
        

      </>:<>
       {
        viewPurchase && !viewAddProduct && !viewEditProduct ? <Purchases handleViewAddProduct = {handleViewAddProduct} handleViewEditProduct = {handleViewEditProduct}/>:  !viewPurchase && viewAddProduct && !viewEditProduct ? <Addproduct/>:  !viewPurchase && !viewAddProduct && viewEditProduct ? <EditProduct productId = {edit_id}/> :
        <>
         <h2>Изменение данных*</h2>

<Formik
     initialValues = {initialValues}
     validationSchema = {validationSchema}
     onSubmit = {handleSubmit}
     enableReinitialize
>
   {
   formik=>{
     return(
      <Form>
        <div className = "flex-item">
        <label className = "item" htmlFor = "ceos_name">Полное наименование</label> 
        <Field className = "inputField" type="text"  id = "ceos_name"  name = "ceos_name"/> 
        </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "name">Генеральный директор</label>
   <Field className = "inputField" type="text"  id = "name"  name = "name"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "bank_name">Наименование банка</label>
   <Field className = "inputField" type="text"  id = "bank_name"  name = "bank_name"/> 
   </div> 
   

   <div className = "flex-item">
  <label className = "item" htmlFor = "phone">Номер телефона</label> 
  <Field className = "inputField" type="number"  id = "phone"  name = "phone"/> 
   </div> 
   

   <div className = "flex-item">
   <label className = "item" htmlFor = "inn">ИНН</label>   
   <Field className = "inputField" type="string"  id = "inn"  name = "inn"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor ="mfo">МФО</label>
   <Field className = "inputField" type="string"  id = "mfo"  name = "mfo"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "company_address">Адрес компании</label>
   <Field className = "inputField" type="string"  id = "company_address"  name = "company_address"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "bank_account">Расчетный счет</label>
   <Field className = "inputField" type="string"  id = "bank_account"  name = "bank_account"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "email">Логин</label> 
   <Field className = "inputField" type="email"  id = "email"  name = "email"/> 
   </div>

   <div>
    <button disabled={formik.isSubmitting || !formik.isValid } type = "submit" className = "changeAccountBtn">Сохранить</button>
  </div>

      </Form>
      )} 
  }   
</Formik>  

        </>
       }
      </>
      }
      </div>
 </UserAccountWrapper>
      }
    </div>
    </StyledContainer>;
}


let validationSchema = Yup.object({
  inn:Yup.string().required("*malumot kiriting"),
  email:Yup.string().required("*malumot kiriting"),
  name:Yup.string().required("*malumot kiriting"),
  phone:Yup.number().required("*malumot kiriting"),   
  bank_account:Yup.string().required("*malumot kiriting"),
  bank_name:Yup.string().required("*malumot kiriting"),
  ceos_name:Yup.string().required("*malumot kiriting"),
  company_address:Yup.string().required("*malumot kiriting"),
  mfo:Yup.string().required("*malumot kiriting"),
})