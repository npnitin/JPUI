import React, { Component,Fragment } from 'react'
import Job from './Job';
import {connect} from 'react-redux';
import { getJobs } from '../../Home/HomeActions';

const mapStateToProps = (state) =>({
    jobListing:state.jobs.jobs.data,
    jobs:state.jobs
})
const mapDispatchToProps ={
    getJobs,
}
class JobList extends Component {
    componentDidMount(){
       // this.props.getJobs(this.props.jobs.skill,this.props.jobs.city,this.props.company,this.props.exp,this.props.salary);
    }
    render() {
        const {jobListing}=this.props;
        return (
            <Fragment>
                {jobListing && jobListing.map((job)=>(
                    <Job key={job.id} job={job} />
                ))}
            </Fragment>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(JobList);