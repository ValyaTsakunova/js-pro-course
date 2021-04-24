import React, { useState} from 'react';
import { Card, Modal, Button} from 'react-bootstrap';
import './CardItem.css';

function CardItem (props){
    const {post, user} = props;
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
           <Card className="cardItem">
               <Card.Title className="cardTitle">{post.title}</Card.Title>
               <Card.Text className="cardText">{post.body}</Card.Text>
               <Card.Footer className="cardFooter">
                    Author:
                    <p><a className="author" onClick={handleShow}>
                        {user.name}
                    </a></p>
                </Card.Footer>
           </Card>
           
            <Modal className="contactsOfUser" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><p>{user.name}</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Address: {user.address.street}, {user.address.suite}, {user.address.city} </p>
                    <p>Email: <a href="mailto:{user.email}">{user.email}</a> </p>
                    <p>Phone: <a href="tel:{user.phone}">{user.phone}</a> </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        
        </>
    )
}

export default CardItem;