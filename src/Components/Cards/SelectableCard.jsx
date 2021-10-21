import React from "react";
import "./SelectableCard.css";
import { KebabContext } from "../../Store/KebabContext";

export default function SelectableCard(props) {
  const { kebabState, kebabDispatch } = React.useContext(KebabContext);
  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    switch (props.type) {
      case "Pain":
        kebabDispatch({ type: "ajouterPain", payload: props.title });
        break;
      case "Viande":
        kebabDispatch({ type: "ajouterViande", payload: props.title });
        break;
      case "Garniture":
        !selected
          ? kebabDispatch({ type: "ajouterGarnitures", payload: props.title })
          : kebabDispatch({
              type: "supprimerGarnitures",
              payload: props.title,
            });
        setSelected(!selected);
        break;
      case "Sauce":
        if (selected || kebabState.currentKebab.sauces.length < 2) {
          !selected
            ? kebabDispatch({ type: "ajouterSauces", payload: props.title })
            : kebabDispatch({ type: "supprimerSauces", payload: props.title });
          setSelected(!selected);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={
        props.current === props.title || selected
          ? "selectable-card-container-selected"
          : "selectable-card-container"
      }
      onClick={
        props.disable === null || props.disable === undefined
          ? handleClick
          : null
      }
    >
      {props.current === props.title || selected ? (
        <img
          src={process.env.PUBLIC_URL + "/Check.png"}
          className="checkImage"
        ></img>
      ) : (
        <div className="divVide"></div>
      )}
      <img
        src={process.env.PUBLIC_URL + "/" + props.image + ".png"}
        className="cardImage"
      ></img>
      <h6>{props.title}</h6>
    </div>
  );
}
