import React, { Component,Fragment } from 'react';
import { Checkbox,Form } from 'semantic-ui-react';
import { setCompany,getJobs } from '../Home/HomeActions';
import { connect } from 'react-redux'
import companies from '../../data/companies.json';


const mapStateToProps =(state)=>({
    jobs:state.jobs
})

const mapDispatchToProps ={
    setCompany,
    getJobs
}

class FilterByCompanies extends Component {
    state = {
        value:{}
    }
    handleChange = (e, { value }) => {
        this.setState({
            value:value
        })
        this.props.setCompany(value);
        this.props.getJobs(this.props.jobs.skill,this.props.jobs.city,value,this.props.jobs.exp,this.props.jobs.salary);
    }
    render() {
        const {company} = this.props.jobs;
        let companiesList = companies.map((companyItr)=>(
            <Form.Field>
              <Checkbox
                radio
                label={companyItr}
                name='checkboxRadioGroup'
                value={companyItr}
                checked={company === companyItr}
                onChange={this.handleChange}
              />
            </Form.Field>
        )) 
        return (
            <Fragment>
                <Form>
                {companiesList}
                </Form>
            </Fragment>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FilterByCompanies);