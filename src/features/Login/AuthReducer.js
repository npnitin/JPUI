import {LODING,DISABLE_LOADING, DO_LOGIN, DO_LOGOUT, DO_REGISTER,ADD_ERROR } from './LoginConstants';

const initialState={
    loading:false,
    user:{},
    autheticated:false,
    error:'',
    registrationSuceessMessage:''
}

export const AuthReducer = (state=initialState,action)=>{

    switch(action.type){
        case LODING:{
            return{
                ...state,
                loading:true
            }
        }
        case DISABLE_LOADING:{
            return{
                ...state,
                loading:false
            }
        }
        case DO_LOGIN:{
            console.log('payload:'+JSON.stringify(action.payload));
            if(action.payload.id){
                return {
                    ...state,
                    user:action.payload,
                    loading:false,
                    autheticated:true,
                    error:''
                }
            }else{
                return {
                    ...state,
                    user:action.payload,
                    loading:false,
                    autheticated:false
                }
            }
           
        }
        case DO_LOGOUT:{
            return{
                ...state,
                user:action.payload,
                loading:false,
                autheticated:false,
                error:''
            }
        }
        case DO_REGISTER:{
            return{
                ...state,
                user:action.payload,
                loading:false,
                error:'',
                registrationSuceessMessage:'Registration successful and proceed with login'
            }
        }
        case ADD_ERROR:{
            return{
                ...state,
                error:action.payload,
                loading:false
            }
        }
        default:
                return state;
    }
}