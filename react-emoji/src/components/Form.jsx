import React from 'react';
import {useState} from 'react';
import EmojiContainer from './EmojiContainer';
import './Form.css'

export default function Form(){
    const [searchEmoji, setSearchEmoji] = useState('');
    const search = (event) => {
        setSearchEmoji(event.target.value)
    }
    return(
        <>
        <input placeholder="Type here.." onChange={search} className="searchInput"></input>
        <EmojiContainer searchEmoji={searchEmoji}/>
        </>
    )
}

