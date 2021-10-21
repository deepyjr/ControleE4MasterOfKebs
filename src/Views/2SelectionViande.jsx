import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";
import { useHistory } from "react-router-dom";
import { KebabContext } from "../Store/KebabContext";

export default function SelectionViande() {
  let history = useHistory();
  const { kebabState } = React.useContext(KebabContext);
  return (
    <div>
      <h1 className="Title">Selection de la viande</h1>
      <div className="container">
        <div className="containerCards">
          <SelectableCard
            title="Viande"
            image="Viande"
            type="Viande"
            current={kebabState.currentKebab.viande}
          ></SelectableCard>
          <SelectableCard
            title="Tofu"
            image="Tofu"
            type="Viande"
            current={kebabState.currentKebab.viande}
          ></SelectableCard>
        </div>
      </div>

      <button
        onClick={(e) => history.replace("/Selection-Garniture")}
        className="buttonNext"
      >
        Continuer
      </button>
    </div>
  );
}
