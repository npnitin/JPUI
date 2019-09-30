import React, { Component,Fragment } from 'react'
import { Table,Icon,Button, GridColumn } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobsByEmail } from './UserActions';

const mapStateToProps = (state) =>({
  jobs:state.user.jobs,
  user:state.auth.user,
  auth:state.auth
})
const mapDispatchToProps ={
getJobsByEmail
}
class MyJobs extends Component {

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
  componentDidMount(){
    this.props.getJobsByEmail(this.props.user.email);
  }
  handleViewDetails = (id) =>{
    this.props.history.push('/user/myjobs/'+id);
  }
    render() {
      const{ autheticated } =this.props.auth;
      if(!autheticated){
        this.props.history.push('/');
      }
      const { jobs } = this.props;
        return (
          <Fragment>
            <Table celled>
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell>Sr.No</Table.HeaderCell>
        <Table.HeaderCell>Job Title</Table.HeaderCell>
        <Table.HeaderCell>Company</Table.HeaderCell>
        <Table.HeaderCell>Created at</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {jobs.map((job,index)=>(
             <Table.Row warning>
             <Table.Cell>{index+1}</Table.Cell>
             <Table.Cell>{job.jobTitle}</Table.Cell>
             <Table.Cell> {job.company}</Table.Cell>
             <Table.Cell>{this.fomatdate(new Date(job.postedOn))}</Table.Cell>
             <Table.Cell> <GridColumn><Button color='teal' onClick={() => this.handleViewDetails(job.id)}>View Details</Button></GridColumn></Table.Cell>
           </Table.Row>
        ))}
      
    </Table.Body>
  </Table>
  <Button as={Link} to='/user/createnewjob' content='Add New Job' primary floated='right'/>
  </Fragment>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyJobs);
