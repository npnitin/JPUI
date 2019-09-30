import React, { Component } from 'react';
import _ from 'lodash'
import { Form, Grid, Dropdown, TextArea, Header, Button, Input, Search, Icon, Modal, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import source from '../../../data/companies.json';
import cities from '../../../data/dropdownCities';
import { addJob,dismissJobCreatedSuccessModal } from '../../Home/HomeActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  jobs:state.jobs,
  auth:state.auth
})
const mapDispatchToProps = {
  addJob,
  dismissJobCreatedSuccessModal
}
const initialState = { isLoading: false, results: [], company: '', jobPost: {} }
class CreateJobForm extends Component {
  state = {
    isLoading: false,
    results: [],
    value: '',
    jobPost: {},

    jobTitle: '',
    company: '',
    city: '',
    address: '',
    jobDescription: '',
    skills: [],
    experienceFrom: '',
    experienceTo: '',
    salaryFrom: '',
    salaryTo: '',
    posterName: '',
    posterEmail: '',
    isError: false,

    launchSuccessModal: false

  };

  handleResultSelect = (e, { result }) => {
    this.setState(
      {
        value: result.title,
        company: result.title
      })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value, company: value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 10)
  }

  handleOnCityChange = (e, data) => {
    this.setState({
      city: data.value
    })
  }

  handleOnExpFromChange = (e, data) => {
    this.setState({
      experienceFrom: data.value
    })
  }

  handleOnExpToChange = (e, data) => {
    this.setState({
      experienceTo: data.value
    })
  }

  handleOnSalaryFromChange = (e, data) => {
    this.setState({
      salaryFrom: data.value
    })
  }

  handleOnSalaryToChange = (e, data) => {
    this.setState({
      salaryTo: data.value
    })
  }
  handleNameChange = (e) => {
    this.setState({
      posterName: e.target.value
    })
  }
  handleEmailChange = (e) => {
    this.setState({
      posterEmail: e.target.value
    })
  }
  handleJobTitleChange = (e) => {
    this.setState({
      jobTitle: e.target.value
    })
  }

  handleJobDescChange = (e) => {
    this.setState({
      jobDescription: e.target.value
    })
  }
  handleSkillsChange = (e) => {
    this.setState({
      skills: e.target.value.split(",")
    })
  }

  handleSubmit = () => {
    const { jobTitle, company, city, address, jobDescription, skills, experienceFrom, experienceTo, salaryFrom, salaryTo, posterName, posterEmail } = this.state;
    const jobPost = {
      jobTitle, company, city, address, jobDescription, skills, experienceFrom, experienceTo, salaryFrom, salaryTo, posterName, posterEmail
    }
    if (this.validateInput()) {
      this.props.addJob(jobPost);
    } else {
      this.setState({
        isError: true
      })
    }

  }
  validateInput = () => {
    const { jobTitle, company, city, address, jobDescription, skills, experienceFrom, experienceTo, salaryFrom, salaryTo, posterName, posterEmail } = this.state;
    if (jobTitle && company && city && jobDescription && skills && experienceFrom && experienceTo && salaryFrom && salaryTo && posterName && posterEmail) {
      return true;
    }
    return false;
  }
  closeModal = ()=>{
    this.props.dismissJobCreatedSuccessModal();
  }
  render() {
    const { isLoading, value, results } = this.state;
    const{ jobCreatedSucessModal } = this.props.jobs;
    const{ autheticated } =this.props.auth;
    if(!autheticated){
      this.props.history.push('/login');
    }
    return (
      <Grid>
        <Grid.Column width={16}>
          <Form className='createJobform'>
            <Header color='teal' content='Job Details' />
            {this.state.isError && <Header color='red' content='All Fields are mandatory' />}
            <Form.Group>
              <Input
                style={{ width: '100%' }}
                placeholder='Job Title e.g. Senior Java Developer'
                onChange={this.handleJobTitleChange}
              />
            </Form.Group>
            <Form.Group>
              <TextArea
                placeholder='Job Description e.g Roles and responsibilities'
                onChange={this.handleJobDescChange}
                rows={10}
              />
            </Form.Group>
            <Form.Group>
              <TextArea
                style={{ width: '100%' }}
                placeholder='Add comma seprated Skills e.g Java,AngularJs,Aws'
                onChange={this.handleSkillsChange}
                rows={5}
              />

            </Form.Group>
          
              <Grid>
                <Grid.Column width={8}>
                  <Search placeholder={'Enter Company'}
                     loading={isLoading}
                     fluid
                     onResultSelect={this.handleResultSelect}
                     onSearchChange={_.debounce(this.handleSearchChange, 500, {
                       leading: true,
                     })}
                     results={results}
                     value={value}
                     {...this.props}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Dropdown
                    placeholder='Enter City'
                    fluid
                    selection
                    options={cities}
                    onChange={this.handleOnCityChange}
                  />
                </Grid.Column>
              </Grid>
            
            
              <Grid>
                <Grid.Column width={8}>
                  <Input
                    type='numbers'
                    placeholder='Experience From in years'
                    onChange={this.handleOnExpFromChange}
                    fluid
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    placeholder='Experience To in years'
                    onChange={this.handleOnExpToChange}
                    fluid
                  />
                </Grid.Column>
              </Grid>
           
           <Grid>
             <Grid.Column width={8}>
              <Input
                placeholder='Salary From in lakhs'
                onChange={this.handleOnSalaryFromChange}
                fluid
              />
              </Grid.Column>
              <Grid.Column width={8}>
              <Input
                placeholder='Salary To in lakhs'
                onChange={this.handleOnSalaryToChange}
                fluid
              />
              </Grid.Column>
              </Grid>
           
            <Header color='teal' content='Job Poster Details' />
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                label='Name'
                placeholder='Name'
                onChange={this.handleNameChange}
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                label='Applications will be sent to this email address'
                placeholder='Email'
                onChange={this.handleEmailChange}
              />
            </Form.Group>
            <Button primary style={{ marginLeft: '30%' }} onClick={this.handleSubmit}>Submit Job</Button>
            <Button as={Link} to='/'>Cancel</Button>
          </Form>
        </Grid.Column>


        <Modal
          open={jobCreatedSucessModal}
          size="small">
          <Modal.Content>
            <p>
              You have succesfully created new job.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.closeModal}>
              <Icon name='close' /> Close
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateJobForm);