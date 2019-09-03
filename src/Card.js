import React from 'react';
import STORE from './store';

function Card (title, content) {
    return (
        <div>
            <h3>{STORE.title}</h3>
            <p>{STORE.content}</p>
        </div>
    );
}

export default Card;