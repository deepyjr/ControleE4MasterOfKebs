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
          for (key in value.kebab.sauces) {
            if (key > 0) {
              sauces = sauces + " - " + value.kebab.sauces[key];
            } else {
              sauces = value.kebab.sauces[key];
            }
          }
          for (key in value.kebab.garnitures) {
            if (key > 0) {
              garniture = garniture + " - " + value.kebab.garnitures[key];
            } else {
              garniture = value.kebab.garnitures[key];
            }
          }
          const title =
            value.kebab.pain +
            ", " +
            value.kebab.viande +
            (garniture !== "" ? ", " + garniture : "") +
            (sauces !== "" ? ", " + sauces : "");
          return (
            <CartElement
              text={title}
              quantity={value.quantity}
              id={value.id}
            ></CartElement>
          );
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
      <div className="containerTopItems">
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

      <button
        onClick={(e) => {
          kebabDispatch({ type: "resetAll" });
          history.replace("/selection-pain");
          window.location.reload();
        }}
        className="buttonNext commande reset"
      >
        Reset le panier
      </button>
    </div>
  );
}
