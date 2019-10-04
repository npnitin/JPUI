import React, { Component } from 'react'
import HomeForSearchers from './HomeForSearchers';
import HomeForPosters from './HomeForPosters';
import {Grid,Header,Responsive } from 'semantic-ui-react';
import EmployerListHome from '../EmployerList/EmployerListHome';

class Home extends Component {
    render() {
        return (
            <div>
                <br/><br/>
               
                <Grid>
                    <Grid.Column  mobile={3} tablet={3} computer={3}><h1 style={{color:'#00b5ad'}}>ReferralJobz</h1></Grid.Column>
                    <Grid.Column  mobile={13} tablet={13} computer={13}><h5>First job referal platform, where people can post current openings in their organization and help others to land good job,and get benefit of the referal programe</h5></Grid.Column>
                    </Grid>
                   
                <Header color='teal' content='For Job Seekers' />
                <HomeForSearchers />
                <br/><br/><br/>
                <Header color='teal' content='For Job Posters' />
                <HomeForPosters />
               {/*  <br/><br/><br/>
                <EmployerListHome /> */}
                </div>
        )
    }
}

export default Home;
