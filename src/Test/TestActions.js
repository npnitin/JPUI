import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants"

export const incrementCounterAsync =(counter)=>{
    return{
        type:INCREMENT_COUNTER,
        payload:counter
        
    }
}

export const incrementCounter =(counter)=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(incrementCounterAsync(counter));
        },1000)
    }
}

export const decrementCounter =(counter)=>{
    return{
        type:DECREMENT_COUNTER,
        payload:counter
    }
}