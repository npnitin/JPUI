import React, { Component } from 'react';
import { Grid, Header, Image, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { doLogin } from './LoginActions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) =>({
  auth:state.auth
})

const mapDispatchToProps ={
  doLogin,
}
class LoginForm extends Component {
  state={
    email:'',
    password:''
  }

  handleOnChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = () =>{
    const {email,password} = this.state;
    const user ={
      email,password
    }
    this.props.doLogin(user);
  }
  render() {
    const{ autheticated } =this.props.auth;
    console.log(autheticated);
    if(autheticated){
      this.props.history.push('/user/myjobs');
    }
    return (
      <div>
        <Grid textAlign='center' style={{ height: '100vh'}}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h5' color='teal' textAlign='center'>
              <Image src='assets/logo.png' /> Log-in to your account if you already have account
      </Header>
            <Form className='createJobform'>

              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
                name='email' 
                onChange={this.handleOnChange}/>

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                name='password'
                type='password'
                onChange={this.handleOnChange}
              />

              <Button primary fluid size='large' onClick={this.handleSubmit}>
                Login
          </Button>

            </Form>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginForm));
