import React, { Component,Fragment } from 'react'
import { Checkbox,Form } from 'semantic-ui-react';
import experiences from '../../data/exp.json';
import { setExp,getJobs } from '../Home/HomeActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
    jobs:state.jobs
})

const mapDispatchToProps ={
    setExp,
    getJobs
}
class FilterByExperience extends Component {
    state = {
        value:{}
    }
    handleChange = (e,{value}) =>{
        this.setState({ 
            value:value 
        })
        this.props.setExp(value);
        this.props.getJobs(this.props.jobs.skill,this.props.jobs.city,this.props.company,value,this.props.jobs.salary);
    } 
    render() {
        const {exp} = this.props.jobs;
        let experienceList = experiences.map((experience)=>(
            <Form.Field>
              <Checkbox
                radio
                label={experience}
                name='checkboxRadioGroup'
                value={experience}
                checked={exp === experience}
                onChange={this.handleChange}
              />
            </Form.Field>
        ))
        return (
            <Fragment>
                <Form>
                    {experienceList}
            </Form>
            </Fragment>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FilterByExperience);