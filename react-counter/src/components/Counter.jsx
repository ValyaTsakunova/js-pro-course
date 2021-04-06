import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faSync} />;

class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0,
        }
    }

    plus = () => {
        this.setState({
            value: this.state.value + 1,
        })
    }

    minus = () => {
        this.setState({
            value: this.state.value - 1,
        })
    }

    discharge = () => {
        this.setState({
            value: 0,
        })
    }

    render(){
        return (
            <div className="counter">
                <div className="result">
                    {this.state.value}
                </div>
                <button className="plusButton" onClick={this.plus}></button>
                <button className="dischargeButton" onClick={this.discharge}>{element}</button>
                <button className="minusButton" onClick={this.minus}></button>
            </div>
        )
    }
}


export default Counter;