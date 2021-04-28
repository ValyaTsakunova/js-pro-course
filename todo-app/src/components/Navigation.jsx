import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <Navbar className="bg-light justify-content-around">
            <Nav.Item >
                <Link to="/allToDo" className="link">All</Link> 
            </Nav.Item>
            <Nav.Item>
                <Link to="/activeToDo" className="link">Active</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/doneToDo" className="link">Done</Link>
            </Nav.Item>
            
        </Navbar>
        
    )
}

export default Navigation;
