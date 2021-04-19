import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Counter from './components/counter/Counter';
import Form from './components/emoji/Form';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound'

function App (){
    return (
        <>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/clicker" exact>
                <Counter />
            </Route>
            <Route path="/emoji" exact>
                <Form />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
        </>
    );
};

export default App;