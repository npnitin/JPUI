import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";

const initialState = {
    data : 42,
    loading :false
}

const TestRedcuer = (state=initialState,action) =>{
    switch(action.type){
        case INCREMENT_COUNTER:
            return{...state,data:state.data+action.payload}
        case DECREMENT_COUNTER:
                return{...state,data:state.data-action.payload}
        default:
            return state;
    }
}

export default TestRedcuer;