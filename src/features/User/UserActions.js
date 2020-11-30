import { GET_JOBS_BY_EMAIL,DISABLE_LOADING, LOADING} from './UserConstants';
import { LAUNCH_JOB_APPLIED_SUCCESS_MODAL } from '../Home/HomeConstants';
import axios from "axios";
import {API_BASE_URL} from '../../util/Constants';

export const getJobsByEmail = (email) => dispatch=>{
    axios({
        method: 'GET',
        url: API_BASE_URL+'/api/jobportal/jobpost/byEmail?email='+email,
        config: { headers: {'Content-Type': 'application/json' }}
        })
    .then(response => dispatch({
        type:GET_JOBS_BY_EMAIL,
        payload:response.data
    })).catch(err => dispatch({
        type:DISABLE_LOADING
    }))
}

export const uploadResume = (file,userId) => dispatch=>{
    dispatch(setLoading());
    const data = new FormData()
    data.append('selectedFile', file, file.name)
    axios({
      method: 'post',
      url: API_BASE_URL+'/api/jobportal/docs/resume?userId=' + userId,
      data: data
    })
      .then(res=>dispatch({
        type:LAUNCH_JOB_APPLIED_SUCCESS_MODAL
    }))
}
export const setLoading = () => dispatch=>{
    dispatch({
        type:LOADING,
    })
}