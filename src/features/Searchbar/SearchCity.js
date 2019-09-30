import React, { Component,Fragment } from 'react'
import { Dropdown } from 'semantic-ui-react';


const options = [
    { key: 'Pune', text: 'Pune', value: 'Pune' },
    { key: 'Mumbai', text: 'Mumbai', value: 'Mumbai' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'Banglore', text: 'Banglore', value: 'Banglore' },
    { key: 'Chennai', text: 'Chennai', value: 'Chennai' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]
  
 class SearchCity extends Component {

    handleChange = (event) =>{
        console.log(event.target.textContent);
    }
    render() {
        return (
            <Fragment>
            <Dropdown placeholder='City' fluid  selection options={options} onChange={this.handleChange}/>
            </Fragment>
        )
    }
}
export default SearchCity;