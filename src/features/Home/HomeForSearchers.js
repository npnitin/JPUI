import React, { Component,Fragment } from 'react'
import { Grid,Button,Header } from 'semantic-ui-react';
import SearchCities from './SearchCities';
import SearchSkills from './SearchSkills';
import { getJobs,getRecentJobs } from './HomeActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state) =>({
    jobs:state.jobs
})

const mapDispatchToProps ={
    getJobs,
    getRecentJobs
}
class HomeForSearchers extends Component {
state={
    skillError:'',
    cityError:''
}
    searchJobs =()=>{
        const { skill } = this.props.jobs;
        const { city } = this.props.jobs;
        if(skill && skill!==undefined){
            if(city){
                this.props.getJobs(this.props.jobs.skill,this.props.jobs.city,this.props.jobs.company,this.props.jobs.exp,this.props.jobs.salary);
                this.props.history.push('/dashboard')
            }else{
                this.setState({
                    cityError:'This Field City is mandatory'
                })
            }

        }else{
            this.setState({
                skillError:'This Field Skill is mandatory'
            })
        }
    }
    getMostRecentJobs =()=>{
        this.props.getRecentJobs();
        this.props.history.push('/dashboard')
    }
    
    render() {
        return (
            <Fragment>
                <Grid>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={5}><SearchSkills/></Grid.Column>
                    <Grid.Column width={5}><SearchCities /></Grid.Column>
                    <Grid.Column width={2}><Button content='Search' primary rounded  onClick={this.searchJobs} /></Grid.Column>
                    </Grid>
                    <br/>
                <Grid style={{marginTop:'-4%'}}>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={5}><Header as='h6' color='red'>{this.state.skillError}</Header></Grid.Column>
                    <Grid.Column width={5}> <Header as='h6' color='red'>{this.state.cityError}</Header></Grid.Column>
                    </Grid>
                    <br/>
                <Grid>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={10}> Have look at <a onClick={this.getMostRecentJobs}> Recently added jobs</a></Grid.Column>
                    </Grid>
            </Fragment>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomeForSearchers))