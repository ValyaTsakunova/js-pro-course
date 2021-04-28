import React, {useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './NotFound.css'

function NotFound(){
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true)
        }, 3000)
    }, [])
    return redirect ? <Redirect to="/"/> : <h1 className="message"> The page could not be found</h1>
}

export default NotFound;