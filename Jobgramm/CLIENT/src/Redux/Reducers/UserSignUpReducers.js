import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    userNew: {
        email:"",
        name:"",
        password:""
      },
    UsersData:[

    ],
    LoginUser:{

    }
}


export const DataReducer = createSlice({
    name: "dt",
    initialState,
    reducers: {
      GetUserData: (state, action) => {
          state.userNew = action.payload
      //   console.log(name,phonenumber,username,parol)
      },
      GetAllUsers: (state,action)=>{
        // console.log(action.payload)
        state.UsersData = action.payload
      },
      GetLoginUser: (state,action)=>{
        state.LoginUser = action.payload

      },
      UpdateUser: (state,action)=>{
        state.UsersData = action.payload


      }
    },
  });
  
  export const { GetUserData,GetAllUsers,GetLoginUser,UpdateUser } = DataReducer.actions;
  export default DataReducer;