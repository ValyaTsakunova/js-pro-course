import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
    return(
        <div className="wrapper">
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}

export default App;