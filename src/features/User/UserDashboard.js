import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import Profile from './Profile';
import MyJobs from './MyJobs';
import CreateJobForm from '../Jobs/CreateJob/CreateJobForm';
import JobDetails from './Jobs/JobDetails';
import AddNewInterviewQuestions from './AddNewInterviewQuestions';
import MyInterviewQuestions from './MyInterviewQuestions';
import UpdateUser from './UpdateUser'

export default class UserDashboard extends Component {
    render() {
        return (
            <Grid>
            <Grid.Column width={16}>
                <Route path="/user/profile" component={Profile} />
                <Route exact path="/user/myjobs" component={MyJobs} />
                <Route exact path="/user/myjobs/:id" component={JobDetails} />
                <Route path="/user/createnewjob" component={CreateJobForm} />
                <Route path="/user/createNewInterviewQuestions" component={AddNewInterviewQuestions} />
                <Route path="/user/myInterviewQuestions" component={MyInterviewQuestions} />
                <Route path="/user/update" component={UpdateUser} />
                
            </Grid.Column>   
            
        </Grid>
        )
    }
}
