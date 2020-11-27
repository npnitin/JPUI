import React, { Component, Fragment } from 'react'
import { Form, TextArea, Button, List, Divider, Header, Segment } from 'semantic-ui-react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
class AddNewInterviewQuestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: '',
            time: '',
            dateTime: '',
            datesRange: '',
            company: '',
            location: '',
            designation: '',
            date: '',
            question: '',
            questionsCount: 1,
            questions: [],

        };
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    addQuestion = () => {
        if (this.state.question) {
            this.setState({
                questions: [...this.state.questions, this.state.question],
                question: ''
            })
        }

    }
    removeQuestion = (index) => {
        this.setState({
            questions: this.state.questions.filter((_, i) => i !== index)
        })
    }

    handleQuestionChange = (event) => {
        this.setState({ question: event.target.value });
    }
    render() {
        return (
            <div>
                <Segment>
                    <React.Fragment>
                        
                        
                        <Form>
                        <Segment>
                        <Header as='h3'>Interview Details</Header>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Company Name' placeholder='Company Name' />
                                <Form.Input fluid label='Location' placeholder='Location' />


                            </Form.Group>
                            <Form.Group >
                                <Form.Input fluid label='Job Title' placeholder='Job Title' width={14} />
                                <Form.Input fluid label='Interview Date' placeholder='Interview Date'>
                                    <DateInput animation='none'
                                        name="date"
                                        placeholder="Date"
                                        value={this.state.date}
                                        iconPosition="left"
                                        onChange={this.handleChange}
                                    />
                                </Form.Input>

                            </Form.Group>
                            </Segment>
                            <Divider hidden></Divider>
                           
                            <Segment>
                            <Header as='h3'>Add Interview Questions</Header>
                            <TextArea placeholder={'Question:' + (this.state.questions.length + 1)} value={this.state.question} style={{ minHeight: 100 }} onChange={this.handleQuestionChange} />
                            
                            <br /><br />
                            <Button floated='right' content='Add New Question' onClick={() => { this.addQuestion() }}></Button>
                            <br /><br />
                            </Segment>
                            <Divider hidden></Divider>
                           
                            {this.state.questions.length>0 ? <Segment>
                            <Header as='h3'>Interview Questions Added so far</Header>
                            {this.state.questions.map((question, index) => (
                                <List divided verticalAlign='middle'>
                                    <List.Item>
                                        <List.Content >

                                        </List.Content>

                                        <List.Content>{index + 1}.{question}</List.Content>

                                        <Button size='small' circular color='google plus' icon='delete' floated='right' onClick={() => { this.removeQuestion(index) }}></Button>
                                    </List.Item>
                                </List>
                            ))}
                            </Segment>:''}
                        </Form>
                    </React.Fragment>
                    <Button primary floated='right'>Submit Form</Button>
                    <Button floated='right'>Cancel</Button><br/><br/>
                </Segment>
            </div>
        )
    }
}
export default AddNewInterviewQuestions;