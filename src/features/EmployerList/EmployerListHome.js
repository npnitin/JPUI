import React, { Component } from 'react';
import { List, Image,Header } from 'semantic-ui-react';

export default class EmployerListHome extends Component {
    render() {
        return (
            <div>
                <Header as='h5' color='teal'>Top Employers</Header>
                <List horizontal>
                <List.Item>
        <Image avatar src='https://logo.clearbit.com/wipro.com' />
        <List.Content>
            <List.Header>Wipro</List.Header>
        </List.Content>
        </List.Item>
        <List.Item>
        <Image avatar src='https://logo.clearbit.com/tcs.com' />
        <List.Content>
            <List.Header>TCS</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/amazon.com' />
        <List.Content>
            <List.Header>Amazon</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/persistent.com' />
        <List.Content>
            <List.Header>Persistent</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/ibm.com' />
        <List.Content>
            <List.Header>IBM</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/capgemini.com' />
        <List.Content>
            <List.Header>Capgemini</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/citibank.com' />
        <List.Content>
            <List.Header>Citi Bank</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/ubs.com' />
        <List.Content>
            <List.Header>UBS</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/hcl.com' />
        <List.Content>
            <List.Header>HCL</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/atos.net' />
        <List.Content>
            <List.Header>Atos</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/xoriant.com' />
        <List.Content>
            <List.Header>Xoriant</List.Header>
        </List.Content>
        </List.Item>

        <List.Item>
        <Image avatar src='https://logo.clearbit.com/barclays.com' />
        <List.Content>
            <List.Header>Barclays</List.Header>
        </List.Content>
        </List.Item>
                </List>
            </div>
        )
    }
}
