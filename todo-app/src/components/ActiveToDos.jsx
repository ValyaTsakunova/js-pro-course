import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import ToDoTask from './ToDoTask';


function ActiveToDos(){
    const todos = useSelector((state) => state.todos);
    localStorage.setItem('todos', JSON.stringify(todos));
    return (
        <ListGroup>
            {todos.length > 0 ?
                todos.filter(todo => todo.status == false).map(todo => <ToDoTask key={todo.id} {...todo}></ToDoTask>) :
                <p className="message"> There are no todos for today</p> }
        </ListGroup>
    )
}


export default ActiveToDos;