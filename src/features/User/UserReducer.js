import { GET_JOBS_BY_EMAIL } from "./UserConstants"

const initialState={
    jobs:[]
}
export const UserReducer =(state=initialState,action)=>{
    switch(action.type){
        case GET_JOBS_BY_EMAIL:{
            return{
                ...state,
                jobs:action.payload
            }
        }
        default:
            return state;
    }

}