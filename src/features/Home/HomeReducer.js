import { 
    GET_JOBS,ITEMS_LOADING, SET_CITY,SET_COMPANY,
     SET_SKILL,ADD_JOB,DESABLE_LOADING,
     LAUNCH_JOB_APPLIED_SUCCESS_MODAL, 
     DISMISS_JOB_APPLIED_SUCCESS_MODAL,
     LAUNCH_JOB_CREATED_SUCCESS_MODAL,
     DISMISS_JOB_CREATED_SUCCESS_MODAL,
    SET_SAL,CLEAR_FILTERS,
    SET_EXP,GET_RECENT_JOBS, GET_JOB_BY_ID} from "./HomeConstants"

const initialState={
    jobs:[],
    job:{},
    loading:false,
    skill:'',
    city:'',
    company:'',
    exp:'',
    salary:'',
    jobAppliedSucessModal:false,
    jobCreatedSucessModal:false
}

export const HomeReducer = (state=initialState,action) =>{
    switch(action.type){
            case GET_JOBS:
            return{
                ...state,
                jobs:action.payload,
                loading:false
            }
            case ITEMS_LOADING:
                return{
                    ...state,
                    loading:true
                }
            case DESABLE_LOADING:
                return{
                    ...state,
                    loading:false
                }
            case SET_CITY:
                return{
                    ...state,
                    city:action.payload
                }
            case SET_COMPANY:{
                    return{
                        ...state,
                        company:action.payload
                    }
                }
            case SET_SAL:{
                    return{
                        ...state,
                        salary:action.payload
                    }
                }
            case SET_EXP:{
                return{
                    ...state,
                    exp:action.payload
                }
            } 
            case SET_SKILL:{
                return{
                    ...state,
                    skill:action.payload
                }
            }
            case ADD_JOB:{
                return{
                    ...state
                }
            }
            case LAUNCH_JOB_APPLIED_SUCCESS_MODAL:{
                return{
                    ...state,
                    loading:false,
                    jobAppliedSucessModal:true
                }
            }
            case DISMISS_JOB_APPLIED_SUCCESS_MODAL:{
                return{
                    ...state,
                    jobAppliedSucessModal:false
                }
            }
            case LAUNCH_JOB_CREATED_SUCCESS_MODAL:{
                return{
                    ...state,
                    loading:false,
                    jobCreatedSucessModal:true
                    
                }
            }
            case DISMISS_JOB_CREATED_SUCCESS_MODAL:{
                return{
                    ...state,
                    jobCreatedSucessModal:false
                }
            }
            case CLEAR_FILTERS:{
                return{
                    ...state,
                    company:'',
                    exp:'',
                    salary:'',
                }
            }
            case GET_RECENT_JOBS:{
            return{
                ...state,
                jobs:action.payload,
                loading:false
            }
        }
        case GET_JOB_BY_ID:{
            return{
                ...state,
                job:action.payload,
                loading:false
            }
        }
        default:
            return state;
    }
}