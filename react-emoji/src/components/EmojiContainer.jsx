import React from 'react';
import EmojiRow from './EmojiRow';
import emojiList from '../emoji.json';
import './EmojiContainer.css'


export default function EmojiContainer({searchEmoji} ){
    const emojiBlock = emojiList
      .filter(item => item.title.includes(searchEmoji) || item.keywords.includes(searchEmoji))
      .slice(0,15)
      .map((item) => <EmojiRow  item={item} key={item.symbol} /> )
    return(
        <ul className="emojiContainer">
           {emojiBlock} 
        </ul>
    )
}
