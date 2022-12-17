import { configureStore } from "@reduxjs/toolkit";
import { DataReducer } from './Reducers/UserSignUpReducers';
import {JobDataReducer} from './Reducers/UserAddJobReducers';
import {UserApplyDataReducer} from './Reducers/UserApplyReducers';
export const store = configureStore({
    reducer:{
        dt:DataReducer.reducer,
        jb:JobDataReducer.reducer,
        apply:UserApplyDataReducer.reducer
    }
})

export default store