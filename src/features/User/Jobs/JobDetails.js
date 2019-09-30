import React, { Component } from 'react';
import { Segment, Item, Grid, Icon, Header,Label,Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state,ownProps) =>{
    const jobPostId = ownProps.match.params.id;
    let jobPost ={};
    if(jobPostId && state.user.jobs.length>0){
        jobPost = state.user.jobs.filter(job=>job.id === jobPostId)[0];
      }
      return {
        jobPost
      }
}
class JobDetails extends Component {
    fomatdate = (date) => {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
    
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
    
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
    render() {
        const{jobPost} =this.props;
        return (
            <div>
                <br/>
                <Header color='teal'>Job Details for:{jobPost.id}</Header>
              
                <Segment.Group>
                    <Segment id={jobPost.id}>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Grid>
                                        <Grid.Column width={13}>
                                            <Item.Header style={{ fontSize: '20px' }}><pre style={{ whiteSpace: 'pre-line' }}>Job Title:{jobPost.jobTitle}</pre></Item.Header>
                                        </Grid.Column>
                                        <Grid.Column width={1} style={{ float: 'right' }}>

                                        </Grid.Column>
                                    </Grid>

                                    <Item.Description>
                                        <span style={{ fontSize: '15px' }}><pre><b>Company:</b>{jobPost.company}</pre></span>
                                        <span style={{ fontSize: '15px' }}><pre><b>City:</b>{jobPost.city}</pre></span>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>

                    <Segment >
                        <span style={{ fontSize: '15px' }}><pre style={{ whiteSpace: 'pre-line' }}><b>Skills:</b>{jobPost.skills.toString()}</pre></span>
                    </Segment>
                    <Segment >
                        <span style={{ fontSize: '15px' }}><b>Job Description:</b><pre style={{ whiteSpace: 'pre-line' }}>{jobPost.jobDescription}</pre></span>
                    </Segment>
                    <Segment>
                        <span>
                           <b>Experience Required(years):</b><br/>
                           Experience From: {jobPost.experienceFrom}-
                           Experience To:{jobPost.experienceTo}<br/>
                           <b>Salary Offered(lakhs):</b> <br/>
                           Salary From:{jobPost.salaryFrom || 'NA'}-
                           Salary To:{jobPost.salaryTo}
                        </span>
                    </Segment>   
                    <Segment>
                    <span style={{ fontSize: '15px' }}><pre style={{ whiteSpace: 'pre-line' }}><b>Posted On:</b>{this.fomatdate(new Date(jobPost.postedOn))}</pre></span>
                        </Segment>      
                </Segment.Group>
                <Button floated='right' color='teal' as={Link} to='/user/myjobs'><Icon name='backward'></Icon>Go To My Jobs</Button>
            </div>
        )
    }
}
export default connect(mapStateToProps,{})(JobDetails);