import React, { Component } from 'react'
import HomeForSearchers from './HomeForSearchers';
import HomeForPosters from './HomeForPosters';
import {Grid,Header,Responsive,Message,Button } from 'semantic-ui-react';
import EmployerListHome from '../EmployerList/EmployerListHome';
import Cards from '../Home/Cards';
import RecentJobs from './RecentJobs';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                
               <div style={{border:'1px '}}  >
                   <br/>
                <Grid>
                    <Grid.Column  mobile={1} tablet={1} computer={2}><h1 style={{color:'#00b5ad'}}>ReferralJobz</h1></Grid.Column>
                    <Grid.Column  mobile={13} tablet={13} computer={13}> <HomeForSearchers /></Grid.Column>
                    </Grid>
                </div><hr/>
                    
                   
                    { <div>
                    <h3 style={{color:'#00b5ad'}}>Recently Added Jobs</h3><br/>
                    <Grid.Column  mobile={1} tablet={1} computer={2}></Grid.Column>
                    <Grid.Column  mobile={13} tablet={13} computer={13}> <RecentJobs /></Grid.Column>
                    
                        </div> }
                  {/*   <h3>How ReferralJobz works?</h3>
                     
                        <p className='heading-text'>Step1: Job posters will post job opening from their organization on ReferralJobz.</p>
                        <p className='heading-text'>Step2: Candidates looking for job will search jobs they are interesred in on ReferralJobz.</p>
                        <p className='heading-text'>Step3: If candidates found matching job, they will apply job and submit the resume on ReferralJobz</p>
                        <p className='heading-text'>Step4: Job poster will receive the resume and they can upload that resume in their internal job portal.</p>
                        <p className='heading-text'>Step5: If application matches, candidate will get further notificaitions.</p>
                        Its <b>win win</b> situation for both job applicant where they will get job and job posters will get their referral benefit.
                         */}
                </div>
        )
    }
}

export default Home;
