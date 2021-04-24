import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import './Counter.css'

const dischargeButtonIcon = <FontAwesomeIcon icon={faSync} />;

function Counter () {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number => number + 1)
    }
    const decrement = () => {
        setNumber(number => number - 1)
    }
    const discharge = () => {
        setNumber(0)
    }
        return (
            <div className="counter">
                <div className="result">
                    {number}
                </div>
                <button className="plusButton" onClick={increment}></button>
                <button className="dischargeButton" onClick={discharge}>{dischargeButtonIcon}</button>
                <button className="minusButton" onClick={decrement}></button>
            </div>
        )
}

export default Counter;