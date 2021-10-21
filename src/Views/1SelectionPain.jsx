import React from "react";
import "./Process.css";
import SelectableCard from "../Components/Cards/SelectableCard";
import { useHistory } from "react-router-dom";
import { KebabContext } from "../Store/KebabContext";

export default function SelectionPain() {
  const { kebabState } = React.useContext(KebabContext);
  let history = useHistory();
  return (
    <div>
      <h1 className="Title">Selection du pain</h1>
      <div className="container">
        <div className="containerCards">
          <SelectableCard
            title="Kebab"
            image="Kebab"
            type="Pain"
            current={kebabState.currentKebab.pain}
          ></SelectableCard>
          <SelectableCard
            title="Galette"
            image="Galette"
            type="Pain"
            current={kebabState.currentKebab.pain}
          ></SelectableCard>
        </div>
      </div>
      <button
        onClick={(e) => history.replace("/Selection-Viande")}
        className="buttonNext"
      >
        Continuer
      </button>
    </div>
  );
}
