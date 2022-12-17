import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    UserApplyData:[

    ],
    UserApplyForCompany:[

    ], 
    ShowingData:[

    ],
    ShowingDataWithButton:[

    ]

}


export const UserApplyDataReducer = createSlice({
    name: "apply",
    initialState,
    reducers: {
      GetAllApply: (state,action)=>{
        state.UserApplyData = action.payload
      },
      GetOnlyCompanyApply: (state,action)=>{
        state.UserApplyForCompany = action.payload
      },
      GetShowingData: (state,action)=>{
        // console.log(action.payload)
        state.ShowingData = action.payload

      },
      GetShowingDataWithButton: (state,action)=>{
        // console.log(action.payload)
        state.ShowingDataWithButton = action.payload

      },

    //   GetLoginUser: (state,action)=>{
    //     state.LoginUser = action.payload

    //   }
    },
  });
  
  export const { GetAllApply,GetOnlyCompanyApply,GetShowingData,GetShowingDataWithButton } = UserApplyDataReducer.actions;
  export default UserApplyDataReducer;