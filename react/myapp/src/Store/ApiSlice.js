import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


import axios from "axios";

 export const Get = createAsyncThunk(
    'ApiSlice/Get',
    async (_, thunkAPI) => {
      const {rejectWithValue}=thunkAPI
      try {
        const response = await axios.get('http://localhost:3006/data');
        return response.data
      } catch (err) {
        
        return rejectWithValue(err.response.data)
      }
    }
  )
  



//   to post  data
export const postData = createAsyncThunk('ApiSlice/postData' , async(args,thunkAPI)=>{
    try{
        const reponse=await axios.post('http://localhost:3006/data',args );
         return reponse.data
    }
    catch(e){
        console.log(e.message);
    }
})
  
const ApiSlice= createSlice({
    name:'ApiSlice',
    initialState:{books:[]},
    reducers:{},
    extraReducers:{
    [Get.pending]:(state,action)=>{
      console.log(action);
    },
    [Get.fulfilled]:(state,action)=>{
      
       state.books=action.payload
    }
    ,
    [postData.pending]:(state,action)=>{
        console.log(action);
    },
    [postData.fulfilled]:(state,action)=>{
        state.books.push(action.payload)
      },
      [postData.rejected]:(state,action)=>{
        
         state.books=action.payload
      }
      ,
     
   
    }
})

export default ApiSlice.reducer
