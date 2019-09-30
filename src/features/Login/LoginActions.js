import {DO_LOGIN,DO_LOGOUT,DO_REGISTER,LODING, DISABLE_LOADING, ADD_ERROR} from './LoginConstants';
import {API_BASE_URL} from '../../util/Constants';
import axios from "axios";

export const doLogin = (user) => dispatch=>{
    dispatch(setItemsLoading());
    axios({
        method: 'post',
        url: API_BASE_URL+'/api/jobportal/user/login',
        data:user,
        config: { headers: {'Content-Type': 'application/json' }}
        })
    .then(response => dispatch({
        type:DO_LOGIN,
        payload:response.data
    })).catch(err => dispatch({
        type:ADD_ERROR,
        payload:err.response.data.errorMessage
    }))
}

export const doRegister = (user) =>dispatch =>{
    dispatch(setItemsLoading());
    axios({
        method: 'post',
        url: API_BASE_URL+'/api/jobportal/user/register',
        data:user,
        config: { headers: {'Content-Type': 'application/json' }}
        })
    .then(response => dispatch({
        type:DO_REGISTER,
        payload:response.data
    })).catch(err => dispatch({
        type:ADD_ERROR,
        payload:err.response.data.errorMessage
    }))
}

export const getJobsbyEmail = (email) =>{
    
}
export const setItemsLoading = () =>{
    return{
        type:LODING
    }
}

export const doLogout = () =>{
    return{
        type:DO_LOGOUT
    }
}
export const addError = (error) =>{
    return{
        type:ADD_ERROR,
        payload:error
    }
}