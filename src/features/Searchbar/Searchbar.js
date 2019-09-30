import React, { Component } from 'react'
import { Menu ,Button, Grid } from 'semantic-ui-react';
import SearchSkills from '../Home/SearchSkills';
import SearchCities from '../Home/SearchCities';

class Searchbar extends Component {
    render() {
        return (
                <Menu>
                    <Grid>
                <Menu.Item style={{width:'60%'}} className='borderless'><SearchSkills /></Menu.Item>
                <Menu.Item style={{width:'30%'}} className='borderless'><SearchCities /></Menu.Item>
                <Menu.Item style={{width:'10%'}} className='borderless'> <Button color='linkedin'>Search</Button></Menu.Item>
                </Grid>
                </Menu>    
        )
    }
}
export default Searchbar;
