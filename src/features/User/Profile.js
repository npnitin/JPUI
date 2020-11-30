import React, { Component } from 'react'
import { Grid, Message, Button, Card, Image, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { uploadResume } from '../User/UserActions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
})

const mapDispatchToProps = {
  uploadResume
}
class Profile extends Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }


  handleOnChange = (e) => {
    console.log('heelo');
    console.log(e.target.files[0].name);
    console.log(e.target.files[0]);
    console.log(this.props.user.id);
    this.props.uploadResume(e.target.files[0], this.props.user.id);
  }
  render() {
    const { autheticated } = this.props.auth;
    if (!autheticated) {
      console.log(this.props);
      this.props.history.push('/');

    }
    return (
      <Grid>
        <Grid.Column width={5}>

          <Card>
            <Image circular src={this.props.auth.user.profilePhotoUrl} wrapped ui={false} />
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
        <Grid.Column width={10}>


          <Card style={{ width: '100%' }}>

            <Card.Content >
              <Card.Header>Name:Nitin Pawar<Button as={Link} to='/user/update' color='teal' style={{ float: 'right' }} className="ui circular icon button"><i aria-hidden="true" class="settings icon"></i></Button></Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.auth.user.createdAt}</span>
              </Card.Meta>
              <Card.Description>
                Primary Skills:Java, Reacts,Angularjs,ASW,Oracle, Postgress,Testng,Mysql,Microservices
      <hr />
      Current Location:Pune
      <hr />
      DOB:27.04/1992
      <hr />
      Company:Altimetrik
      <hr />
      Email:achievers.nitin@gmail.com
      <hr />
      PHone:+91 8975972716
      <hr />
      Github Link:
      <hr />
      Stackoverflow link:
      <hr />
      Resume Link:<a href={this.props.auth.user.resumeUrl} target="_blank">Download resume</a>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>

            </Card.Content>
          </Card>
          <Button.Group>
            <Button color='teal' as={Link} to='/user/createnewjob'>Post New Job</Button><hr />
            <Button color='teal' as={Link} to='/user/myjobs'>View Jobs Posted By Me</Button><hr />
            <Button color='teal' as={Link} to='/user/createnewjob'>View My Job Applications</Button><hr />
            <Button color='teal' as="label" icon='upload' htmlFor="file" title='upload resume'>Upload Resume</Button>
            <input type="file" id="file" style={{ display: "none" }} onChange={this.handleOnChange} />
          </Button.Group>

        </Grid.Column>


      </Grid>
    )
  }
}
export default connect(mapStateToProps, {})(Profile);