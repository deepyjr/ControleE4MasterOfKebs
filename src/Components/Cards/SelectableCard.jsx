import React from "react";
import "./SelectableCard.css";
import { KebabContext } from "../../Store/KebabContext";

export default function SelectableCard(props) {
  const { kebabDispatch } = React.useContext(KebabContext);
  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setSelected(!selected);
    switch (props.type) {
      case "Pain":
        kebabDispatch({ type: "ajouterPain", payload: props.title });
        break;
      case "Viande":
        kebabDispatch({ type: "ajouterViande", payload: props.title });
        break;
      case "Garniture":
        kebabDispatch({ type: "ajouterGarnitures", payload: props.title });
        break;
      case "Sauce":
        kebabDispatch({ type: "ajouterSauces", payload: props.title });
        break;
    }
  };

  return (
    <div className="selectable-card-container" onClick={props.disable === null || props.disable === undefined  ? handleClick : null}>
      {selected ? (
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
