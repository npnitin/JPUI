import React, { Component } from 'react';
import { Button, Segment, Item, Icon, Grid, Label, Header,Modal,Dimmer,Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { uploadResume,dismissJobAppliedSuceesModal,applyJob,setJob } from '../../Home/HomeActions';
import{withRouter} from 'react-router';

const mapStateToProps =(state)=>({
  jobs:state.jobs,
  auth:state.auth
})

const mapDispatchToProps ={
  uploadResume,
  dismissJobAppliedSuceesModal,
  applyJob,
  setJob
}
class Job extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fileName: '',
      file: {},
      jobId: '',
      disableApplyButton: true,
      job:{}
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
  fomatdate = (date) => {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  closeModal = () =>{
    this.props.dismissJobAppliedSuceesModal();
  }
  applyJob = (job) =>{
    if(!this.props.auth.autheticated){
      this.props.history.push('/login');
    }else{
      this.props.setJob(job);
      this.props.applyJob(job.id,this.props.auth.user.id);
    }
  }

  render() {
    const{ jobAppliedSucessModal} = this.props.jobs;
   const { job } = this.props;
 
   
   let img = 'https://logo.clearbit.com/'+job.company+'.com';
   let defaultImage ='https://logo.clearbit.com/company.com';
    return (
      <Segment.Group>
       
        <Segment id={job.id}>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={img} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} />
              <Item.Content>
                <Grid>
                  <Grid.Column width={13}>
                    <Item.Header style={{ fontSize: '20px' }}><pre style={{whiteSpace:'pre-line'}}>{job.jobTitle}</pre></Item.Header>
                  </Grid.Column>
                  <Grid.Column width={1} style={{ float: 'right' }}>

                  </Grid.Column>
                </Grid>

                <Item.Description>
                  <span style={{ fontSize: '15px' }}><pre>{job.company},{job.city}</pre></span>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>

        <Segment >
          <span style={{ fontSize: '15px' }}><pre style={{whiteSpace:'pre-line'}}><b>Skills:</b>{job.skills.toString()}</pre></span>
        </Segment>
        <Segment >
          <span style={{ fontSize: '15px' }}><b>Job Description:</b><pre style={{whiteSpace:'pre-line'}}>{job.jobDescription}</pre></span>
        </Segment>
        <Segment>
          <span>
            <Icon name="user icon" /> {job.experienceFrom} - {job.experienceTo} (years)
                            <Icon name="rupee sign icon" /> {job.salaryFrom || 'NA'} - {job.salaryTo} (lakhs)
                            <span style={{ float: 'right' }}>Posted By <b>{job.posterName}</b> on <b>{this.fomatdate(new Date(job.postedOn))}</b> </span>
          </span>
        </Segment>
        <Segment style={{height:'5vw'}}>
        
          <Button floated='right' primary content="Apply for this job"  onClick={() => this.applyJob(job)} />
        </Segment>

        <Modal
          open={jobAppliedSucessModal}
          size="small">
          <Modal.Content>
            <p>
            You have succesfully applied for the job <b>{this.props.jobs.job.jobTitle}</b> at {this.props.jobs.job.company}
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.closeModal}>
              <Icon name='close' /> Close
            </Button>
          </Modal.Actions>
        </Modal>
      </Segment.Group>
    )
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Job));