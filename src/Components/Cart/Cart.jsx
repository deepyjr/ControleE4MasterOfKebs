import React from "react";
import "./Cart.css";
import { useHistory } from "react-router-dom";
import CartElement from "../CartElement/CartElement";
import { KebabContext } from "../../Store/KebabContext";

export default function Cart() {
  const { kebabState, kebabDispatch } = React.useContext(KebabContext);
  let history = useHistory();
  const [body, setBody] = React.useState();
  const [getValues, setGetValues] = React.useState(true);

  React.useEffect(() => {
    const buildCart = () => {
      setBody(
        kebabState.kebabCart.map((value, key) => {
          let sauces = "";
          let garniture = "";
          for (key in value.sauces) {
            if (key > 0) {
              sauces = sauces + " - " + value.sauces[key];
            } else {
              sauces = value.sauces[key];
            }
          }
          for (key in value.garnitures) {
            if (key > 0) {
              garniture = garniture + " - " + value.garnitures[key];
            } else {
              garniture = value.garnitures[key];
            }
          }
          const title =
            value.pain + ", " + value.viande + ", " + garniture + ", " + sauces;
          return <CartElement text={title} quantity={"1"}></CartElement>;
        })
      );
    };
    if (getValues) {
      buildCart();
      setGetValues(false);
    }
  }, [getValues]);
  return (
    <div className="cartContainer">
      <div className="containerPrix">
        <p className="price">Total: 11€00</p> <br />
        <button
          onClick={(e) => history.replace("/Commande-validée")}
          className="buttonNext commande"
        >
          Passer la commande
        </button>
      </div>
      <div className="containerPannier">
        <p className="price">Votre commande</p> <br />
        {body}
      </div>
    </div>
  );
}
