import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";
import { useHistory } from "react-router-dom";

export default function SelectionGarniture() {
  let history = useHistory();
  return (
    <div>
      <h1 className="Title">Salade, Tomates, Oignons ?</h1>
      <div className="container">
        <div className="containerCards">
          <SelectableCard
            title="Salade"
            image="Salade"
            type="Garniture"
          ></SelectableCard>
          <SelectableCard
            title="Tomates"
            image="Tomates"
            type="Garniture"
          ></SelectableCard>
          <SelectableCard
            title="Oignons"
            image="Oignons"
            type="Garniture"
          ></SelectableCard>
        </div>
      </div>
        <button onClick={(e) => history.replace("/Selection-Sauces")} className="buttonNext">
          Continuer
        </button>
    </div>
  );
}
