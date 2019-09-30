import React, { Component } from 'react';
import { Grid ,Container,Dimmer,Loader,Header} from 'semantic-ui-react';
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
        return (
            <Container>
                 {loading===true ? <Dimmer active>
                    <Loader />
                </Dimmer>:''}
                <Header as='h3' textAlign='center' color='teal'>You can apply to job without login, but in order to add new job,you need to login</Header>
                <Header as='h5' textAlign='center' color='red' style={{marginBottom:'-10%'}}>{error}</Header>
                <Grid columns={2}>
                    <Grid.Column width={8}>
                        <RegisterForm />
                    </Grid.Column>
                   
                    <Grid.Column width={8}>
                        <LoginForm />
                    </Grid.Column>
                </Grid>
               
            </Container>
        )
    }
}
export default connect(mapStateToProps,{})(AuthHome);