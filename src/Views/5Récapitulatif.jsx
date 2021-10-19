import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";
import {KebabContext} from "../Store/KebabContext"

export default function Récapitulatif() {
  const { kebabState } = React.useContext(KebabContext)

  return (
    <div>
      <div>
        <h1 className="Title">Récapitulatif</h1>
        <div className="containerCards">
          <h3>Pain : </h3>
          <SelectableCard title={kebabState.pain} image={kebabState.pain}></SelectableCard>
          <h3>Viande : </h3>
          <SelectableCard title={kebabState.viande} image={kebabState.viande}></SelectableCard>
          <h3>Garnitures</h3>
          {kebabState.currentKebab.garnitures.map((garniture => {
            return <SelectableCard title={garniture} image={garniture}></SelectableCard>
          }))}
          <h3>Sauces</h3>
          {kebabState.currentKebab.sauces.map((sauce => {
            return <SelectableCard title={sauce} image={"Sauce-" + sauce}></SelectableCard>
          }))}
        </div>
        <button onClick={(e) => console.log(e)} className="buttonNext">
          Etape suivante
        </button>
      </div>
    </div>
  );
}
