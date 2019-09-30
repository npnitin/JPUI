import React, { Component } from 'react'
import { Accordion,Icon } from 'semantic-ui-react';
import FilterBySkill from './FilterBySkill';
import FilterByCompanies from './FilterByCompanies';
import EmployerList from '../EmployerList/EmployerList'
class AccordionRightFilter extends Component {
    state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
    render() {
        const { activeIndex } = this.state
        return (
/*             <Accordion>
            <Accordion.Title style={{fontSize:'18px'}}
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
             Companies
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
             <FilterByCompanies />
            </Accordion.Content>
            </Accordion> */
          
        <EmployerList />
        )

        
    }
}
export default AccordionRightFilter;