import React, {Component} from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
       // this.handleCount = this.handleCount.bind(this)
    }
    handleCount=() => {
        this.setState({count :this.state.count +1})
        }
    
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleCount}>use counter</button>
            </div>
        );
    }
}

export default Counter;