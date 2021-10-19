import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";
import { useHistory } from "react-router-dom";


export default function SelectionViande() {
  let history = useHistory();
  return (
    <div>
      <h1 className="Title">Selection de la viande</h1>
      <div className="container">
        <div className="containerCards">
          <SelectableCard
            title="Viande"
            image="Viande"
            type="Viande"
          ></SelectableCard>
          <SelectableCard
            title=" ̷T̷o̷f̷u̷"
            image="Tofu"
            type="Viande"
          ></SelectableCard>
        </div>
      </div>

      <button onClick={(e) => history.replace("/Selection-Garniture")} className="buttonNext">
      Continuer
      </button>
    </div>
  );
}
