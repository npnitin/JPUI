import React, {Component} from 'react';
import { Menu,Container,Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInMenu from '../Login/SignInMenu';
import { doLogout} from '../Login/LoginActions';
const mapStateToProps = (state) =>({
  auth:state.auth
})

const mapDispatchToProps ={
  doLogout,
}
class Navbar extends Component {
  render() {
    const{autheticated} = this.props.auth;
    const{user} = this.props.auth;
    return (
        <div>
             <Menu inverted fixed="top">
                    <Container>
                      <Menu.Item header as={Link} to="/" >ReferralJobz
                        <img src="assets/logo.png" alt="logo" />
                      </Menu.Item>
                      <Menu.Item>Find Salaries</Menu.Item>
                      <Menu.Item>Company Reviews</Menu.Item>
                      <Menu.Item>Interview Questions</Menu.Item>
                      <Menu.Item>Interview Questions</Menu.Item>
                      <Menu.Item position="right">
                        <Button  basic inverted as={Link} to='/user/createnewjob'>Add Job</Button>
                        {
                        autheticated?
                        <SignInMenu user={user}/>:
                        <Button  basic inverted as={Link} to="/login">Login/Register</Button>
                        }
                      </Menu.Item>

                    </Container>
                  </Menu>
        </div>
    );
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
