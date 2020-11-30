import React, { Component } from 'react'
import { Menu,Image,Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { doLogout} from '../Login/LoginActions';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
const mapStateToProps =(state)=>({
})
const mapDispatchToProps ={
    doLogout,
}
 class SignInMenu extends Component {
    handleSignOut = () =>{
        this.props.doLogout();
        this.props.history.push('/');
      }
    render() {
        const{user} = this.props;
        return (
            <Menu.Item position="right">
            <Image avatar spaced="right" src={user.profilePhotoUrl} />
            <Dropdown pointing="top left" text={user.name}>
              <Dropdown.Menu>
                <Dropdown.Item text="Create New Job" as={Link} to='/user/createnewjob' icon="plus" />
                <Dropdown.Item text="My Jobs" as={Link} to='/user/myjobs' icon="calendar" />
                <Dropdown.Item text="Add New Interview Questions" as={Link} to='/user/createNewInterviewQuestions' icon="plus" />
                <Dropdown.Item text="My Interview Questions" as={Link} to='/user/myInterviewQuestions' icon="calendar" />
                <Dropdown.Item text="My Profile" as={Link} to='/user/profile' icon="user" />
                <Dropdown.Item text="Settings" icon="settings" />
                <Dropdown.Item text="Sign Out" onClick={this.handleSignOut} icon="power" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignInMenu));