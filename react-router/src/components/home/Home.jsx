import React from 'react';
import image from '../../image/programmer.jpg';
import './Home.css'


function Home () {
    return(
        <div className="wrapper">
            <h1>React Router</h1>
            <img src={image}></img>
        </div>
    )
}

export default Home;