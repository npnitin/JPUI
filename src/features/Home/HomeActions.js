import {
     GET_JOBS,ITEMS_LOADING,SET_CITY,
     SET_SKILL, ADD_JOB,DESABLE_LOADING,
     LAUNCH_JOB_APPLIED_SUCCESS_MODAL,
     DISMISS_JOB_APPLIED_SUCCESS_MODAL, 
     LAUNCH_JOB_CREATED_SUCCESS_MODAL,
     DISMISS_JOB_CREATED_SUCCESS_MODAL,
     SET_COMPANY, 
     SET_SAL,
     SET_EXP,
     CLEAR_FILTERS,
     GET_RECENT_JOBS,
    GET_JOB_BY_ID}
      from "./HomeConstants"
import {API_BASE_URL} from '../../util/Constants';
import axios from "axios";

export const getJobs = (skill,city,company,exp,salary) => dispatch =>{
    dispatch(setItemsLoading());
    axios({
        method: 'post',
        url: API_BASE_URL+'/api/jobportal/jobpost/search?city='+city+'&skill='+skill+'&company='+company+'&exp='+exp+'&sal='+salary,
        config: { headers: {'Content-Type': 'application/json' }}
        })
    .then(response => dispatch({
        type:GET_JOBS,
        payload:response
    })).catch(err => dispatch({
        type:DESABLE_LOADING
    }))
}
export const getRecentJobs = () =>dispatch =>{
    dispatch(setItemsLoading());
    axios({
        method: 'GET',
        url: API_BASE_URL+'/api/jobportal/jobpost/recent?size=10',
        config: { headers: {'Content-Type': 'application/json' }}
        })
    .then(response => dispatch({
        type:GET_RECENT_JOBS,
        payload:response
    })).catch(err => dispatch({
        type:DESABLE_LOADING
    }))
}
export const getJobById = (id) =>dispatch=>{
    dispatch(setItemsLoading());
    axios({
        method:'GET',
        url: API_BASE_URL+'/api/jobportal/jobpost?id='+id,
        config: { headers: {'Content-Type': 'application/json' }}
    })
    .then(response => dispatch({
        type:GET_JOB_BY_ID,
        payload:response
    })).catch(err => dispatch({
        type:DESABLE_LOADING
    }))
}
export const setItemsLoading = () =>{
    return{
        type:ITEMS_LOADING
    }
}

export const setCity = (city) =>{
    return {
        type:SET_CITY,
        payload:city
    }
}
export const setCompany = (company) =>{
    return{
        type:SET_COMPANY,
        payload:company
    }
}
export const setSal = (sal) =>{
    return{
        type:SET_SAL,
        payload:sal
    }
}
export const setExp = (exp) =>{
    return{
        type:SET_EXP,
        payload:exp
    }
}
export const setSkill = (skill) =>{
    return{
        type:SET_SKILL,
        payload:skill
    }
}

export const addJob = (job) => dispatch =>{
    dispatch(setItemsLoading());
    axios({
        method: 'post',
        url: API_BASE_URL+'/api/jobportal/jobpost',
        data: job,
        config: { headers: {'Content-Type': 'application/json' }}
        })
    .then(response => dispatch({
        type:LAUNCH_JOB_CREATED_SUCCESS_MODAL
    }))
}
export const applyJob = (jobId,userId) =>dispatch=>{
    dispatch(setItemsLoading());
    axios({
        method:'GET',
        url: API_BASE_URL+'/api/jobportal/jobpost/applyforjob?jobId='+jobId+'&userId='+userId,
        config: { headers: {'Content-Type': 'application/json' }}
    })
    .then(response => dispatch({
        type:LAUNCH_JOB_APPLIED_SUCCESS_MODAL
    }))
}
export const uploadResume = (file,jobId) =>dispatch=>{
    dispatch(setItemsLoading());
    const data = new FormData()
    data.append('selectedFile', file, file.name)
    axios({
      method: 'post',
      url: API_BASE_URL+'/api/jobportal/jobpost/uploadFile?jobId=' + jobId,
      data: data
    })
      .then(res=>dispatch({
        type:LAUNCH_JOB_APPLIED_SUCCESS_MODAL
    }))
}

export const dismissJobAppliedSuceesModal =()=>{
    return{
        type:DISMISS_JOB_APPLIED_SUCCESS_MODAL
    }
}

export const dismissJobCreatedSuccessModal = () =>{
    return{
        type:DISMISS_JOB_CREATED_SUCCESS_MODAL
    }
}
export const clearFilters =()=>{
    return{
        type:CLEAR_FILTERS
    }
}