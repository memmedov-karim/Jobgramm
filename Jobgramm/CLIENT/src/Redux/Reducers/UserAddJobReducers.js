import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    userNew: {
        email:"",
        name:"",
        password:""
      },
    JobsData:[

    ],
    LoginUser:{

    }
}


export const JobDataReducer = createSlice({
    name: "jb",
    initialState,
    reducers: {
    //   GetUserData: (state, action) => {
    //       state.userNew = action.payload
    //   //   console.log(name,phonenumber,username,parol)
    //   },
      GetAllJobs: (state,action)=>{
        state.JobsData = action.payload
      },
      UpdateJobs: (state,action)=>{
        console.log(action.payload)
        state.JobsData = action.payload
      }
    //   GetLoginUser: (state,action)=>{
    //     state.LoginUser = action.payload

    //   }
    },
  });
  
  export const { GetAllJobs,UpdateJobs } = JobDataReducer.actions;
  export default JobDataReducer;