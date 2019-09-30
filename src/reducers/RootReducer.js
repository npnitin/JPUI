import { combineReducers } from "redux";
import TestRedcuer from "../Test/TestReducer";
import { HomeReducer } from "../features/Home/HomeReducer";
import { AuthReducer } from "../features/Login/AuthReducer";
import { UserReducer } from "../features/User/UserReducer";

export const RootReducer = combineReducers({
    test:TestRedcuer,
    jobs:HomeReducer,
    auth:AuthReducer,
    user:UserReducer
})