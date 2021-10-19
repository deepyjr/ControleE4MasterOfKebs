import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";

export default function SelectionGarniture() {
  return (
    <div>
      <h1 className="Title">Salade, Tomates, Oignons ?</h1>
      <div className="containerCards">
        <SelectableCard title="Salade" image="Salade"></SelectableCard>
        <SelectableCard title="Tomates" image="Tomate"></SelectableCard>
        <SelectableCard title="Oignons" image="Oignon"></SelectableCard>
      </div>
      <button onClick={(e) => console.log(e)} className="buttonNext">
        Etape suivante
      </button>
    </div>
  );
}
