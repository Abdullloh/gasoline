import axios from "axios"
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import API_URL from '../../utils/api/api'



export const postUserInfo = createAsyncThunk(
    "userSlice/postUserInfo",
    async function (data,{rejectWithValue,dispatch}){
        try {
            let response = await axios.post(`${API_URL.API_URL}/accounts/login/`,data.userData)
            
            if (response.status === 200 || response.status === 201){
                localStorage.setItem("user_info", JSON.stringify(response.data));
                // window.location.reload()
            }
            if(!response.status){
                throw new Error("Internal Server Error")
            }
            return 
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error)
        }        
    }
)

export const users = createSlice({
    name:"userSlice",
    initialState:{
        login:null,
        password:null,
        status:null,
        error:null,
        role:localStorage.getItem("user_info") ?? null 
    },
    reducers:{
    },
    extraReducers:{
         [postUserInfo.pending]:(state)=>{
             state.status = 'pending'
             state.error = null
         },
        [postUserInfo.fulfilled]:(state,action)=>{
             state.status = "resolved"
        }, 
        [postUserInfo.rejected]:(state,action)=>{
            state.status = "rejected";
            state.error = action.payload;
        }
    }
})

export const {}  =  users.actions

export default users.reducer