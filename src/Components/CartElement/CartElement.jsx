import React from "react";
import "./CartElement.css";
import { KebabContext } from "../../Store/KebabContext";

export default function CartElement(props) {
  const { kebabState, kebabDispatch } = React.useContext(KebabContext);

  return (
    <div style={{ display: "flex" }}>
      <div className="buttonContainer">
        <button
          className="buttonChangeQuantity"
          onClick={() => {
            kebabDispatch({ type: "addQuantity", payload: props.id });
            window.location.reload();
          }}
        >
          +
        </button>
        <button
          className="buttonChangeQuantity"
          onClick={() => {
            if (props.quantity !== 1) {
              kebabDispatch({ type: "lowerQuantity", payload: props.id });
              window.location.reload();
            } else if (
              kebabState.kebabCart.length > 1 &&
              props.quantity === 1
            ) {
              kebabDispatch({ type: "removeKebabFromCart", payload: props.id });
              window.location.reload();
            } else {
              kebabDispatch({ type: "resetAll" });
              window.location.reload();
            }
          }}
        >
          -
        </button>
      </div>
      <div className="elementContainer">
        <p className="containerKebab">{props.text}</p>
        <p>{props.quantity}</p>
      </div>
    </div>
  );
}
