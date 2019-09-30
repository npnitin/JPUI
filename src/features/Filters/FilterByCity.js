import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

class FilterByCity extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          <Checkbox
            radio
            label=' Pune'
            name='checkboxRadioGroup'
            value='Pune'
            checked={this.state.value === 'Pune'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Banglore'
            name='checkboxRadioGroup'
            value='Banglore'
            checked={this.state.value === 'Banglore'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}
export default FilterByCity;