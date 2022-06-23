import axios from "axios"
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"


export const postUserInfo = createAsyncThunk(
    "userSlice/postUserInfo",
    async function (data,{rejectWithValue,dispatch}){
        try {
            console.log(data.userData)
            let response = await axios.post(`http://137.184.114.36:7774/accounts/${data.url}`,data.userData)
            
            if (response.status === 200 || response.status === 201){
                localStorage.setItem("user_info", JSON.stringify(response.data));
                // window.location.reload()
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