import React, { Component } from 'react'
import { Grid, Header, Image, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { doRegister,addError } from  './LoginActions';

const mapStateToProps = (state) =>({
  auth:state.auth
})

const mapDispatchToProps ={
  doRegister,
  addError
}
class RegisterForm extends Component {
  state={
    name:'',
    email:'',
    password:'',
    password1:''
  }
  handleOnChange =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit = () =>{
    const{name,email,password,password1}=this.state;
    const user={
      name,email,password
    }
    if(name && email && password && password1){
      if(password !== password1){
        this.props.addError('Both passwords not match');
      }else{
        this.props.doRegister(user);
      }
    }else{
      this.props.addError('All fields are mandatory');
    }
    
    
  }
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh', marginTop: '20%' }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h5' color='teal' textAlign='center'>
            <Image src='assets/logo.png' /> Register if do not have existing account
              </Header>
          <Form className='createJobform'>

            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Enter Your Name'
              name='name'
              onChange={this.handleOnChange} />
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='Enter your email'
              type='email'
              name='email'
              onChange={this.handleOnChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Enter password'
              type='password'
              name='password'
              onChange={this.handleOnChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm password'
              type='password'
              name='password1'
              onChange={this.handleOnChange}
            />

            <Button primary fluid size='large' onClick={this.handleSubmit}>
              Register
                  </Button>

          </Form>

        </Grid.Column>
      </Grid>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);