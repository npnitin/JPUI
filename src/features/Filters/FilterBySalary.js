import React, { Component } from 'react'
import { Checkbox ,Form} from 'semantic-ui-react';
import salaries from '../../data/salaries.json';
import { setSal,getJobs } from '../Home/HomeActions';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>({
  jobs:state.jobs
})

const mapDispatchToProps ={
  setSal,
  getJobs
}
 class FilterBySalary extends Component {

    state = {
      value:{}
    }
  handleChange = (e, {value} ) => {
    this.setState({ 
      value:value 
    })
    this.props.setSal(value);
    this.props.getJobs(this.props.jobs.skill,this.props.jobs.city,this.props.jobs.company,this.props.jobs.exp,value);
  }

    render() {
      const {salary} = this.props.jobs;
      let salariesList = salaries.map((salaryItr)=>(
        <Form.Field>
          <Checkbox
            radio
            label={salaryItr}
            name='checkboxRadioGroup'
            value={salaryItr}
            checked={salary === salaryItr}
            onChange={this.handleChange}
          />
        </Form.Field>
      ))
        return (
        <Form>
        {salariesList}
      </Form>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FilterBySalary);