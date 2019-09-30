import React, { Component } from 'react'
import { Grid,Message,Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
    auth:state.auth
})
class Profile extends Component {
    render() {
        const{ autheticated } =this.props.auth;
        if(!autheticated){
          this.props.history.push('/');
        }
        return (
            <Grid>
                <Grid.Column width={16}>
                <Message>
                    <Message.Header>Profile<Button content='Update' floated='right'/></Message.Header>
                    <Message.List>
                    <Message.Item>Jhon Doe</Message.Item>
                    <Message.Item>hondoe@gmail.com</Message.Item>
                    <Message.Item>+91 8975972716</Message.Item>
                    </Message.List>
                </Message>

                </Grid.Column>
                </Grid>
        )
    }
}
export default connect(mapStateToProps,{})(Profile);