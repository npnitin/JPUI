import _ from 'lodash'
import React, { Component,Fragment } from 'react'
import { Search, Grid,Form,Header } from 'semantic-ui-react'
import source from '../../data/cities.json';
import { connect } from 'react-redux';
import { setCity } from '../Home/HomeActions';
const initialState = { isLoading: false, results: [], value: '',city:'',skills:[]}

const mapStateToProps =(state)=>({
  jobs:state.jobs
})

const mapDispatchToProps ={
  setCity
}
class SearchCities extends Component {
  state = initialState

  componentDidMount = () =>{
    this.setState({
      value:this.props.jobs.city
    })
    console.log(this.props.jobs.city);
  }
  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
    this.props.setCity(result.title);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    this.props.setCity(value);
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
      <Fragment>
      <Grid>
        <Grid.Column width={16}>
          <Form>
          <Form.Group widths='equal'>
          <Search placeholder={'Enter city'}
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
            defaultValue={this.props.jobs.city}
          />
          </Form.Group>
          </Form>
        </Grid.Column>
      </Grid>
    </Fragment>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchCities);