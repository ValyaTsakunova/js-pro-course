import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './NavBar.css'

function NavBar (){
    return(
        <Nav className="navBar">
            <Link to="/" className="link">Home</Link> 
            <Link to="/clicker" className="link">Clicker</Link>            
            <Link to="/emoji" className="link">Emoji</Link>
        </Nav>
    )
}

export default NavBar;