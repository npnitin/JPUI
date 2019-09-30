import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import FilterByCompanies from './FilterByCompanies'
import FilterBySalary from './FilterBySalary'
import FilterByExperience from './FilterByExperience'

 class AccordionLeftFilter extends Component {
  state = { activeIndexes: [0,1,2,3] }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndexes } = this.state;
    const newIndex = activeIndexes;

    const currentIndexPosition = activeIndexes.indexOf(index);
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1);
    } else {
      newIndex.push(index);
    }

    this.setState({ activeIndexes: newIndex });
  }

  render() {
    const { activeIndexes } = this.state

    return (
      <Accordion>
        <Accordion.Title style={{fontSize:'18px'}}
          active={activeIndexes.includes(0)}
          index={0}
          onClick={this.handleClick}>
          <Icon name='dropdown' />
              Salary(lakhs)
        </Accordion.Title>
        <Accordion.Content active={activeIndexes.includes(0)}>
          <FilterBySalary />
        </Accordion.Content>

       {/*  <Accordion.Title style={{fontSize:'18px'}}
          active={activeIndexes.includes(2)}
          index={2}
          onClick={this.handleClick}>
          <Icon name='dropdown' />
          Companies
        </Accordion.Title>
        <Accordion.Content active={activeIndexes.includes(2)}>
         <FilterByCompanies />
        </Accordion.Content> */}


        <Accordion.Title style={{fontSize:'18px'}}
          active={activeIndexes.includes(2)}
          index={2}
          onClick={this.handleClick}>
          <Icon name='dropdown' />
          Experience(years)
        </Accordion.Title>
        <Accordion.Content active={activeIndexes.includes(2)}>
         <FilterByExperience />
        </Accordion.Content>
      </Accordion>

      

      
    )
  }
}

export default AccordionLeftFilter;