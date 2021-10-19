import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";
import { useHistory } from "react-router-dom";
export default function SelectionSauces() {
  let history = useHistory();
  return (
    <div>
      <h1 className="Title">Quelques Sauces ?</h1>
      <div className="container">
        <div className="containerCards sauces">
          <SelectableCard
            title="Blanche"
            image="Sauce-blanche"
            type="Sauce"
          ></SelectableCard>
          <SelectableCard
            title="Harissa"
            image="Sauce-harissa"
            type="Sauce"
          ></SelectableCard>
          <SelectableCard
            title="Andalouse"
            image="Sauce-andalouse"
            type="Sauce"
          ></SelectableCard>
          <SelectableCard
            title="BBQ"
            image="Sauce-bbq"
            type="Sauce"
          ></SelectableCard>
          <SelectableCard
            title="Ketchup"
            image="Sauce-ketchup"
            type="Sauce"
          ></SelectableCard>
          <SelectableCard
            title="Curry"
            image="Sauce-curry"
            type="Sauce"
          ></SelectableCard>
        </div>
      </div>

      <button
        onClick={(e) => history.replace("/Récapitulatif")}
        className="buttonNext"
      >
        Etape suivante
      </button>
    </div>
  );
}
