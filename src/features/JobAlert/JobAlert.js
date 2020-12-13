import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import SearchCities from '../Home/SearchCities';
import SearchSkills from '../Home/SearchSkills';

class JobAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
       
    }
    handleClose =()=>{
        this.setState({
            open:false
        });
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <Modal
                 closeIcon
                    open={this.state.open}
                    onClose={this.handleClose}
                    size='small'
                >
                    <Header icon='browser' content='Add job alert preferences' />
                    <Modal.Content>
                      
                        <SearchCities/>
                        <SearchSkills/>
                        Send me email when above requirements are matched!!
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='teal' onClick={this.handleClose}>Create Alert</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default withRouter(JobAlert);