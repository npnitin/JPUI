import React, { Component } from 'react'
import { Grid,Menu,Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps=(state)=>({
    auth:state.auth
})
class UserDashboardNav extends Component {
   
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={16}>
                    {/* <Menu vertical>
                        <Header icon="user" attached inverted color="grey" content={user.name} />
                            <Menu.Item as={NavLink} to='/user/profile' >Profile</Menu.Item>
                            <Menu.Item as={NavLink} to='/user/myjobs'>My Created Jobs</Menu.Item>
                            <Menu.Item as={NavLink} to='/user/createnewjob'>Add New Job</Menu.Item>
                    </Menu> */}
                    </Grid.Column>
                    </Grid>
            </div>
        )
    }
}
export default connect(mapStateToProps,{})(UserDashboardNav);