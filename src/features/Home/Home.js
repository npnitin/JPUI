import React, { Component } from 'react'
import HomeForSearchers from './HomeForSearchers';
import HomeForPosters from './HomeForPosters';
import {Grid,Header } from 'semantic-ui-react';

class Home extends Component {
    render() {
        return (
            <div>
                <br/><br/>
                <Grid>
                    <Grid.Column width={3}><h1 style={{color:'#2185d0',marginTop:'-5%'}}>NaukriRefer</h1></Grid.Column>
                    <Grid.Column width={13}><h5>First job referal platform, where people can post current openings in their organization and help others to land good job,and get benefit of the referal programe</h5></Grid.Column>
                    </Grid>
                   
                <Header color='teal' content='For Job Seekers' />
                <HomeForSearchers />
                <br/><br/><br/>
                <Header color='teal' content='For Job Posters' />
                <HomeForPosters />
                </div>
        )
    }
}

export default Home;
