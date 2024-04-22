import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi.js";
// import userApi from "../../api/userApi.js";


export const postUser=createAsyncThunk('auth/postUser', async(data)=>{
        return await userApi.createUser(data)
})

const authSlice=createSlice({
    name:'auth',
    initialState:{
        dataUser:null,
        isLoading:false,
        error:''
    },
    extraReducers: (builder) => {
        builder
            .addCase(postUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.productData = action.payload
            })
            .addCase(postUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export default authSlice.reducer;