import React from "react";
import "./Cart.css";
import { useHistory } from "react-router-dom";
import CartElement from "../CartElement/CartElement";

export default function Cart() {
  let history = useHistory();
  return (
    <div className="cartContainer">
      <div className="containerPrix">
        <p className="price">Total: 11€00</p> <br />
        <button
          onClick={(e) => history.replace("/Selection-Sauces")}
          className="buttonNext commande"
        >
          Passer la commande
        </button>
      </div>
      <div className="containerPannier">
      <p className="price">Votre commande</p> <br />
        <CartElement></CartElement>
        <CartElement></CartElement>
        <CartElement></CartElement>
      </div>
    </div>
  );
}
