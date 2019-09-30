import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter,decrementCounter} from './TestActions';
const mapStateToProps =(state)=>({
    localData:state.test.data,
    loading:state.test.loading
})

const mapDispatchToProps ={
    incrementCounter,
    decrementCounter
}

 class TestComponent extends Component {
    handleIncrementCounter = ()=>{
        this.props.incrementCounter(2);
    }
    handleDecrementCounter = () =>{
        this.props.decrementCounter(1);
    }
    render() {
        //destructing props object
        const {localData} = this.props;

        return (
            <div>
                <h1>Test Component</h1>
                <h3>{localData}</h3>
                <Button onClick={this.handleIncrementCounter} positive content='+'></Button>
                <Button onClick={this.handleDecrementCounter} negative content='-'></Button>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TestComponent);