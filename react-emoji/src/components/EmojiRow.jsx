import React from 'react';
import './EmojiRow.css'

export default function EmojiRow({item}) {
    const codePointHex = item.symbol.codePointAt(0).toString(16);
    const imageSrc = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return(
        <li className="emojiRow">
            <img className="imageOFEmoji" src={imageSrc} alt={item.symbol} /> 
            {item.title}
        </li>
    )
}