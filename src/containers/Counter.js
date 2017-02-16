import React, {Component, PropTypes} from 'react';

class Counter extends Component{
    static propTypes={
        count: PropTypes.number,
        increment: PropTypes.func
    }

    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
                <a onClick={this.handleIncrement} href="#">increment</a>
            </div>
        )
    }
    handleIncrement=(ev)=>{
        ev.preventDefault();
        this.props.increment();
        console.log('incrementing')
    }
}

export default Counter
