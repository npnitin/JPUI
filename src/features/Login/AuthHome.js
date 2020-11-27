import React, { Component } from 'react';
import { Grid ,Container,Dimmer,Loader,Header,Divider} from 'semantic-ui-react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
    auth:state.auth
})

 class AuthHome extends Component {
    render() {
        const {loading} = this.props.auth;
        const{ error } =this.props.auth;
        const{ registrationSuceessMessage } =this.props.auth;
        return (
            <Container>
                 {loading===true ? <Dimmer active>
                    <Loader />
                </Dimmer>:''}
               
                <Header as='h5' textAlign='center' color='red'>{error}</Header>
                <Header as='h5' textAlign='center' color='green'>{registrationSuceessMessage}</Header>
                <Grid columns={2}>
                    <Grid.Column width={8}>
                        <RegisterForm />
                    </Grid.Column>
                  
                    <Grid.Column width={8}>
                    <br/>
                        <LoginForm />
                    </Grid.Column>
                </Grid>
                <Divider vertical>OR</Divider>
            </Container>
        )
    }
}
export default connect(mapStateToProps,{})(AuthHome);