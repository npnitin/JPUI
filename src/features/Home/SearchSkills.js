import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Form } from 'semantic-ui-react'
import source from '../../data/skills.json';
import { connect } from 'react-redux';
import { setSkill } from './HomeActions';

const initialState = { isLoading: false, results: [], value: '' }

const mapDispatchToProps ={
  setSkill
}
const mapStateToProps = (state) =>({
  jobs:state.jobs
})
class SearchSkills extends Component {
  state = initialState

  componentDidMount = () =>{
    this.setState({
      value:this.props.jobs.skill
    })
  }
  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
    this.props.setSkill(result.title);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    this.props.setSkill(value);
    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 10)
  }

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Grid>
        <Grid.Column width={16}>
          <Form>
        <Form.Group widths='equal'>
          <Search placeholder='Skill you are looking for?'
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
          </Form.Group>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchSkills);