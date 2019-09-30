import React, { Component,Fragment } from 'react'
import { Grid,Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomeForPosters extends Component {
    render() {
        return (
            <Fragment>
            <Grid>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={9}>If you have job openings in your organization,you can post current job here and take benefit of your organizations's referral programme.</Grid.Column>
                <Grid.Column width={3}><Button content='Post New Job' primary rounded as={Link} to='/create' /></Grid.Column>
                </Grid>
        </Fragment>
        )
    }
}
export default HomeForPosters;