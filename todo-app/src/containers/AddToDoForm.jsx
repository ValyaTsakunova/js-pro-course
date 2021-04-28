import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToDo } from '../state-management/actions';
import './AddToDoForm.css';

function AddToDoForm({ dispatch }){
    const [inputValue, setInputValue] = useState('');
    const onSubmit = (ev) => {
        ev.preventDefault();
       
        inputValue.length > 0 ? dispatch(addToDo(inputValue)) : setInputValue('');
        setInputValue('');
    }

    const onInputChange = (ev) => {
        setInputValue(ev.target.value);
    }

    return(
        <form onSubmit={onSubmit}  className="form">
            <label>
                Add your task: 
                <input value={inputValue} onChange={onInputChange} className="input"/>
            </label>
            <Button variant="primary" type="submit" >Add</Button>
        </form>
    )
}

export default connect()(AddToDoForm);