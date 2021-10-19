import React from "react";
import "./Process.css";
import SelectableCard from "../Components/Cards/SelectableCard";
import { useHistory } from "react-router-dom";

export default function SelectionPain() {
  let history = useHistory();
  return (
    <div>
      <h1 className="Title">Selection du pain</h1>
      <div className="container">
        <div className="containerCards">
          <SelectableCard
            title="Pain"
            image="Kebab"
            type="Pain"
          ></SelectableCard>
          <SelectableCard
            title="Galette"
            image="Galette"
            type="Pain"
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
