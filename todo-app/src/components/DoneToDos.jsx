import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import ToDoTask from './ToDoTask';


function DoneToDos(){
    const todos = useSelector((state) => state.todos);
    localStorage.setItem('todos', JSON.stringify(todos));
    return (
        <ListGroup>
            {todos.length > 0 ?
                todos.filter(todo => todo.status == true).map(todo => <ToDoTask key={todo.id} {...todo}></ToDoTask>) :
                <p className="message"> You have not done anything yet </p> }        
        </ListGroup>
    )
}

export default DoneToDos;

