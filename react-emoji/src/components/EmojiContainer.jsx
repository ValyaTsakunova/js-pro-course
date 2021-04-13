import React from 'react';
import EmojiRow from './EmojiRow';
import emoji from '../emoji.json';
import './EmojiContainer.css'

const emojiList = emoji;

export default function EmojiContainer(props){
    const {searchEmoji} = props;
    const emojiBlock = emojiList.filter((item => {
        if(item.title.includes(searchEmoji) || item.keywords.includes(searchEmoji)){
            return item
        }
    })).slice(0,15).map((item) => <EmojiRow  item={item} key={item.symbol} /> )
    return(
        <ul className="emojiContainer">
           {emojiBlock} 
        </ul>
    )
}