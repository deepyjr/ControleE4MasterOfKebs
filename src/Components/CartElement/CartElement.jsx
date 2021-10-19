import React from 'react';
import './CartElement.css';
export default function CartElement(props) {
    return (
        <div className="elementContainer">
            <p className="containerKebab">{props.text}</p>
            <p>{props.quantity}</p>
        </div>
    )
}
