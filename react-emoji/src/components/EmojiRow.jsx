import React from 'react';
import './EmojiRow.css'

export default function EmojiRow(props) {
    const {item} = props;
    return(
        <li className="emojiRow">{item.symbol} {item.title}</li>
    )
}