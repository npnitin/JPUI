import { ADD_JOB } from "./CreateJobConstants"

export const addJob = (job) =>{

    return{
        type:ADD_JOB,
        payload:job
    }

}