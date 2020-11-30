import React, { Component, Fragment } from 'react'
import { Button, Icon, List, Grid, Image } from 'semantic-ui-react'
import { getRecentJobs } from './HomeActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Job from '../Jobs/JobList/Job';

const mapStateToProps = (state) => ({
    jobListing: state.jobs.jobs.data
})
const mapDispatchToProps = {
    getRecentJobs
}

class RecentJobs extends Component {
    componentDidMount() {
        this.props.getRecentJobs()
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
    viewJobDetails = (job) => {

        this.props.history.push('/jobDetails/' + job.id)
    }
    render() {
        const { jobListing } = this.props;
        return (
            <div>
                <Fragment>
                    <List divided relaxed>
                        {jobListing && jobListing.map((job) => (

                            <List.Item>
                                <List.Icon style={{ width: '5%' }}><Image src={`https://logo.clearbit.com/${job.company}.com`} size='medium' circular /></List.Icon>
                                <List.Content>
                                    <List.Header as='a'>{job.jobTitle} in {job.company} for {job.city} location.</List.Header>
                                    <Grid>
                                        <Grid.Column mobile={13} tablet={13} computer={13}>
                                            <br />
                                            <List.Description as='a'><b>Job Description:</b><pre style={{ whiteSpace: 'pre-line' }}>{job.jobDescription}</pre></List.Description>
                                            <br />
                                            <List.Description as='a'><b>Skills: </b>{job.skills.toString()}</List.Description>
                                            <List.Description as='a'><b>Experience: </b>{job.experienceFrom} to {job.experienceTo} years</List.Description>
                                            <List.Description as='a'><b>Salary: </b>{job.salaryFrom} to {job.salaryTo} LPA</List.Description>
                                            <span style={{ float: 'right' }}>Posted By <b>{job.posterName}</b> on <b>{this.fomatdate(new Date(job.postedOn))}</b> </span>
                                        </Grid.Column>
                                        <Grid.Column mobile={3} tablet={3} computer={3}><Button primary floated='right' onClick={() => this.viewJobDetails(job)}>View Details</Button></Grid.Column>
                                    </Grid>
                                </List.Content>

                            </List.Item>

                        ))}
                    </List>

                </Fragment>

            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecentJobs))
