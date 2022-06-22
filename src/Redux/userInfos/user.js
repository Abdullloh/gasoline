import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import api from "../../utils/api/api";




export const getUserInfo = createAsyncThunk(
    "userSlice/getUserInfo",
    async function (data,{rejectWithValue,dispatch}){
        try {
            let response = await api.get("/accounts/myaccount/")
            if (response.status === 200 || response.status === 201){
                dispatch(setUserInfo(response.data))
            }
            if(!response.status){
                throw new Error("Internal Server Error")
            }
            return 
        } catch (error) {
            return rejectWithValue(error.message)
        }        
    }
)

export const getUserOrders = createAsyncThunk(
    "userSlice/getUserOrders",
    async function (data,{rejectWithValue,dispatch}){
        try {
            let response = await api.get("/cart/orders")
            if (response.status === 200 || response.status === 201){
                dispatch(setUserOrders(response.data))
            }
            if(!response.status){
                throw new Error("Internal Server Error")
            }
            return 
        } catch (error) {
            return rejectWithValue(error.message)
        }        
    }
)




export const user = createSlice({
    name:"userSlice",
    initialState:{
        userInfo:{
        company_name:null,
        inn:null,
        email:null,
        name:null,
        phone:null,   
        status:null,
        error:null,
       },
       userOrders:{
        data:[],
        status:null,
        error:null,
       }
      
    },
    reducers:{
        setUserInfo:(state,action)=>{
            state.userInfo.company_name = action.payload?.details?.company_name
            state.userInfo.inn = action.payload?.details?.inn
            state.userInfo.email = action.payload?.details?.user?.email
            state.userInfo.name = action.payload?.details?.user?.name
            state.userInfo.phone = action.payload?.details?.user?.phone
        },
        setUserOrders:(state,action)=>{
            state.userOrders.data = action.payload
        }
    },
    extraReducers:{
         [getUserInfo.pending]:(state)=>{
            state.userInfo.status = 'pending'
            state.userInfo.error = null
         },
         [getUserInfo.fulfilled]:(state,action)=>{
            state.userInfo.status = "resolved"
         }, 
         [getUserInfo.rejected]:(state,action)=>{
           state.userInfo.status = "rejected";
           state.userInfo.error = action.payload;
         },
         [getUserOrders.pending]:(state)=>{
            state.userOrders.status = 'pending'
            state.userOrders.error = null
         },
         [getUserOrders.fulfilled]:(state,action)=>{
            state.userOrders.status = "resolved"
         }, 
         [getUserOrders.rejected]:(state,action)=>{
           state.userOrders.status = "rejected";
           state.userOrders.error = action.payload;
         },
    }
})

export const {setUserInfo,setUserOrders}  = user.actions

export default user.reducer
