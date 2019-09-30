import React, { Component,Fragment } from 'react'
import { Grid,Button,Dimmer,Loader,Icon } from 'semantic-ui-react';
import JobList from '../JobList/JobList';
import AccordionLeftFilter from '../../Filters/AccordionLeftFilter';
import AccordionRightFilter from '../../Filters/AccordionRightFilter';
import SearchSkills from '../../Home/SearchSkills';
import SearchCities from '../../Home/SearchCities';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs,clearFilters, getRecentJobs } from '../../Home/HomeActions';

const mapStateToProps = (state) =>({
    jobs:state.jobs
})

const mapDispatchToProps ={
    getJobs,
    clearFilters,
    getRecentJobs
}

class Dashboard extends Component {
    state={
        display:'none'
    }
    searchJobs =()=>{
        this.props.getJobs(this.props.jobs.skill,this.props.jobs.city,this.props.jobs.company,this.props.jobs.exp,this.props.jobs.salary);
        this.setState({
            display:'block'
        })
    }
    clearFilters = () =>{
        this.props.clearFilters();
        this.props.getRecentJobs()
    }
    render() {
        const { loading } =this.props.jobs;
        return (
            <Fragment>
                {loading===true ? <Dimmer active>
                    <Loader />
                </Dimmer>:''}
            <Grid>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={5}><SearchSkills/></Grid.Column>
                    <Grid.Column width={5}><SearchCities /></Grid.Column>
                    <Grid.Column width={2}><Button content='Search' primary rounded as={Link} to='/dashboard' onClick={this.searchJobs}/></Grid.Column>
                    <Grid.Column width={3}><Button primary rounded onClick={this.clearFilters}>Clear Filters <Icon name='trash'/></Button></Grid.Column>
                    </Grid>
            <hr color='#D0CCCB'/><br/>
            <Grid>
                <Grid.Column width={3}><AccordionLeftFilter /></Grid.Column>
                <Grid.Column width={10}><JobList /></Grid.Column>
                <Grid.Column width={3}><AccordionRightFilter /></Grid.Column>
                </Grid>
                </Fragment>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)