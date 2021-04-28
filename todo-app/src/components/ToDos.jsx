import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import ToDoTask from './ToDoTask';
import './ToDos.css'

function ToDos(){
    const todos = useSelector((state) => state.todos);
    localStorage.setItem('todos', JSON.stringify(todos));
    return (
        <ListGroup>
            {todos.map(todo => <ToDoTask key={todo.id} {...todo}></ToDoTask>)}
        </ListGroup>
    )
}

export default ToDos;