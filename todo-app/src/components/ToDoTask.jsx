import React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../state-management/actions';
import { doneToDo } from '../state-management/actions';
import { undoToDo } from '../state-management/actions';
import './ToDoTask.css'

function ToDoTask({id, text, status}){
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(deleteToDo(id))
    }

    const doneTask = () => {
        dispatch(doneToDo(id))
    }

    const undoTask = () => {
        dispatch(undoToDo(id))
    }

    return(
            <ListGroupItem>
                <p className="task">{text}</p>
                <div className="buttons">
                    {status == true ?
                    <Button variant="warning" onClick={undoTask}>Undo</Button> : 
                    <Button variant="success" onClick={doneTask}>Done</Button>}
                    <Button variant="danger" onClick={deleteTask}>Delete</Button>
                </div>
            </ListGroupItem>
    )
}

export default ToDoTask;