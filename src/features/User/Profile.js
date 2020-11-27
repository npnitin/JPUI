import React, { Component } from 'react'
import { Grid, Message, Button, Card,Image,Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    auth: state.auth
})
class Profile extends Component {
    render() {
        /* const{ autheticated } =this.props.auth;
        if(!autheticated){
          this.props.history.push('/');
        } */
        return (
            <Grid>
                <Grid.Column width={5}>
                    
                    <Card>
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.props.auth.user.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.auth.user.createdAt}</span>
      </Card.Meta>
      <Card.Description>
      {this.props.auth.user.email}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
   
    </Card.Content>
  </Card>
  
                </Grid.Column>
                <Grid.Column width={5}>

                     
                <Card>
    
    <Card.Content>
      <Card.Header>Name:Nitin Pawar</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.auth.user.createdAt}</span>
      </Card.Meta>
      <Card.Description>
      Primary Skills:Java, Reacts,Angularjs,ASW,Oracle, Postgress,Testng,Mysql,Microservices
      <hr/>
      Current Location:Pune
      <hr/>
      DOB:27.04/1992
      <hr/>
      Company:Altimetrik
      <hr/>
      Email:achievers.nitin@gmail.com
      <hr/>
      PHone:+91 8975972716
      <hr/>
      Github Link:
      <hr/>
      Stackoverflow link:

      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    
    </Card.Content>
  </Card>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Button color='teal'>Post New Job</Button><hr/>
                    <Button color='teal'>View Jobs Posted By Me</Button><hr/>
                    <Button color='teal'>Update my Profile</Button><hr/>
                    <Button color='teal'>Add New Interview Questions</Button><hr/>
                    <Button color='teal'>Visit My Interview Questions</Button><hr/>
                    <Button color='teal'icon='upload' title='upload resume'/>
                    <Button color='teal'icon='download' title='download resume'/>
                    </Grid.Column>

            </Grid>
        )
    }
}
export default connect(mapStateToProps, {})(Profile);