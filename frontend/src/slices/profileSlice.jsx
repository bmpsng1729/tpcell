import {createSlice} from "@reduxjs/toolkit"
 const initialState={
   user:null,

 };
 const profileSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
       setUser:(state,action)=>{
          state.user=action.payload;
        //   localStorage.setItem("token",JSON.stringify(action.payload));
       },
      
    },
 });

export const{setUser}=profileSlice.actions;
export default profileSlice.reducer;