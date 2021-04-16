import React, {useState, useEffect, useCallback} from 'react';
import { Button, Spinner } from 'react-bootstrap';
import CardsContainer from './components/CardsContainer';
import './App.css'

function App (){
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(5);
    
    useEffect(() => {
        const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json());
        const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json());
        Promise.all([usersPromise, postsPromise]).then(([users, posts]) => {
            setUsers(users);
            setPosts(posts)
        })
    }, [])

    const onClick = useCallback(() => {
        setLimit(limit => limit + 5)
    }, [])
    
    return  (
        <div className="wrapper">
            {!users.length && !posts.length ?
            <div>
                <Spinner animation="grow" variant="primary" className="spinner" />
                <Spinner animation="grow" variant="secondary" className="spinner"/>
                <Spinner animation="grow" variant="success" className="spinner"/>
                <Spinner animation="grow" variant="danger" className="spinner"/>
                <Spinner animation="grow" variant="warning" className="spinner"/>
                <Spinner animation="grow" variant="info" className="spinner"/>
                <Spinner animation="grow" variant="dark" className="spinner"/>
            </div> : 
            <>
                <CardsContainer limitOfCards={limit} users={users} posts={posts}/>
                <Button variant="success" onClick={onClick}>Show more</Button>
            </> }  
        </div>
        );
};

export default App;
