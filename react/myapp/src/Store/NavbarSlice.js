import { createSlice } from "@reduxjs/toolkit";



const Navgations=createSlice({
    name:"Navgations",
    initialState:{value:false},
    reducers:{
        change:(state,action)=>{
            state.value=!state.value
        }
    }
   
})


export default  Navgations.reducer;
export const {change}=Navgations.actions
