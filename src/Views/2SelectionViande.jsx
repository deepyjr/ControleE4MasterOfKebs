import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";

export default function SelectionViande() {
  return (
    <div>
      <h1 className="Title">Selection de la viande</h1>
      <div className="containerCards">
        <SelectableCard title="Viande" image="Viande"></SelectableCard>
        <SelectableCard title=" ̷T̷o̷f̷u̷" image="Tofu"></SelectableCard>
      </div>
      <button onClick={(e) => console.log(e)} className="buttonNext">
        Etape suivante
      </button>
    </div>
  );
}
