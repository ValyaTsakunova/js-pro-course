import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const dischargeButtonIcon = <FontAwesomeIcon icon={faSync} />;

class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0,
        }
    }

    plus = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1,
        }))
    }

    minus = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1,
        }))
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
                <button className="dischargeButton" onClick={this.discharge}>{dischargeButtonIcon}</button>
                <button className="minusButton" onClick={this.minus}></button>
            </div>
        )
    }
}


export default Counter;