import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import AddToDoForm from './containers/AddToDoForm';
import Navigation from './components/Navigation';
import ToDos from './components/ToDos';
import DoneToDos from './components/DoneToDos';
import ActiveToDos from './components/ActiveToDos';
import NotFound from './components/NotFound';
// import store from './state-management';

import './App.css';

function App(){
    // const todos = useSelector((state) => state.todos);
    // const setTodos = () => localStorage.setItem('todos', JSON.stringify(todos))
    // store.subscribe(setTodos);
    return (
        <div className="wrapper">
            <AddToDoForm />
            <Navigation />
            <Switch>
                <Route path="/" exact>
                  <ToDos />   
                </Route>
                <Route path="/allToDo">
                  <ToDos />   
                </Route>
                <Route path="/activeToDo">
                    <ActiveToDos />
                </Route>
                <Route path="/DoneToDo">
                    <DoneToDos />
                </Route>
                <Route >
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
};


export default App;