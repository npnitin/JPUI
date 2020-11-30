import React, { Component, Fragment } from 'react'
import {Segment,Label,Button,Container,Header,Icon,Dimmer,Loader,Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import{ getJobById,uploadResume,dismissJobAppliedSuceesModal,applyJob} from './HomeActions';
import { connect } from 'react-redux';
import{withRouter} from 'react-router';

const mapStateToProps=(state)=>({
  jobs:state.jobs,
  auth:state.auth
})
const mapDispatchToProps={
  getJobById,
  uploadResume,
  dismissJobAppliedSuceesModal,
  applyJob
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
  closeModal = () =>{
    this.props.dismissJobAppliedSuceesModal()
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
      this.props.applyJob(this.props.jobs.job.data.id,this.props.auth.user.id);
    }
  }
    render() {
      const{ jobAppliedSucessModal} = this.props.jobs;
      if(!this.props.jobs.job.data){
        return <div/>
      }
       const{ jobs } = this.props;
       const {loading} = this.props.jobs;

        return (
           <Fragment>
              {loading===true ? <Dimmer active>
                    <Loader />
                </Dimmer>:''}
              <Button floated='right' color='teal' as={Link} to='/'><Icon name='backward'></Icon>Go To Home</Button>
           <Container text style={{ marginTop: '7em' }}>
              <Header as='h1'>{jobs.job.data.jobTitle}</Header>
              <p>Company:{jobs.job.data.company.toString()}</p>
              <p>Skills:{jobs.job.data.city.toString()}</p>
          <p>Skills:{jobs.job.data.skills.toString()}</p>
          <span>Job Description:<pre style={{whiteSpace:'pre-line'}}>{jobs.job.data.jobDescription.toString()}</pre></span><br/>
          <p>Experience:{jobs.job.data.experienceFrom} To {jobs.job.data.experienceTo} Years</p>
          <p>Salary:{jobs.job.data.salaryFrom} To {jobs.job.data.salaryTo} LPA</p>
         
         

          
          <Button floated='right'  primary content="Apply for this job" onClick={this.applyJob} />
          <br/>
        </Container>
        
        <Modal
          open={jobAppliedSucessModal}
          size="small">
          <Modal.Content>
            <p>
              You have succesfully applied for the job: <b>{jobs.job.data.jobTitle}</b> at {jobs.job.data.company.toString()}
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.closeModal}>
              <Icon name='close' /> Close
            </Button>
          </Modal.Actions>
        </Modal>
        </Fragment>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Jobdetails))