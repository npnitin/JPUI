import React, { Component, Fragment } from 'react'
import {Segment,Label,Button,Container,Header,Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import{ getJobById,uploadResume,dismissJobAppliedSuceesModal} from './HomeActions';
import { connect } from 'react-redux';
import{withRouter} from 'react-router';

const mapStateToProps=(state)=>({
  jobs:state.jobs,
  auth:state.auth
})
const mapDispatchToProps={
  getJobById,
  uploadResume,
  dismissJobAppliedSuceesModal
}
class Jobdetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fileName: '',
      file: {},
      jobId: '',
      disableApplyButton: true,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.applyJob = this.applyJob.bind(this);
  }
  handleOnChange = (id, e) => {
    this.setState({
      fileName: e.target.files[0].name,
      file: e.target.files[0],
      jobId: id
    });
  }
  uploadResume = (job) => {
    this.props.uploadResume(this.state.file,job.id);
  }
  closeModal = () =>{
    this.props.dismissJobAppliedSuceesModal()
  }
   componentDidMount(){
     this.props.getJobById(this.props.match.params.job)
  }
  applyJob = () =>{
    if(!this.props.auth.autheticated){
      this.props.history.push('/login');
    }else{
      //make api call to apply for job
      alert('application submitted');
    }
  }
    render() {
      if(!this.props.jobs.job.data){
        return <div/>
      }
       const{ jobs } = this.props;
       console.log(this.props);
        return (
           <Fragment>
              <Button floated='right' color='teal' as={Link} to='/'><Icon name='backward'></Icon>Go To Home</Button>
           <Container text style={{ marginTop: '7em' }}>
              <Header as='h1'>{jobs.job.data.jobTitle}</Header>
              <p>Company:{jobs.job.data.company.toString()}</p>
              <p>Skills:{jobs.job.data.city.toString()}</p>
          <p>Skills:{jobs.job.data.skills.toString()}</p>
          <p>Job Description:<pre style={{whiteSpace:'pre-line'}}>{jobs.job.data.jobDescription.toString()}</pre></p>
          <p>Experience:{jobs.job.data.experienceFrom} To {jobs.job.data.experienceTo} Years</p>
          <p>Salary:{jobs.job.data.salaryFrom} To {jobs.job.data.salaryTo} LPA</p>
         

          
          <Button floated='right'  primary content="Apply for this job" onClick={this.applyJob} />
          <br/>
        </Container>
        </Fragment>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Jobdetails))