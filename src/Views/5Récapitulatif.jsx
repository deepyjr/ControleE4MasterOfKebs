import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";
import { KebabContext } from "../Store/KebabContext";

export default function Récapitulatif() {
  const { kebabState } = React.useContext(KebabContext);

  return (
    <div>
      <div>
        <h1 className="Title">Récapitulatif</h1>
        <div className="container">
          <div className="containerCards">
            <SelectableCard
              disable={true}
              title={kebabState.currentKebab.pain}
              image={kebabState.currentKebab.pain}
            ></SelectableCard>
            <h3>+</h3>
            <SelectableCard
              disable={true}
              title={kebabState.currentKebab.viande}
              image={kebabState.currentKebab.viande}
            ></SelectableCard>
            <h3>+</h3>
            {kebabState.currentKebab.garnitures.map((garniture) => {
              return (
                <SelectableCard
                  disable={true}
                  title={garniture}
                  image={garniture}
                ></SelectableCard>
              );
            })}
            <h3>+</h3>
            {kebabState.currentKebab.sauces.map((sauce) => {
              return (
                <SelectableCard
                  disable={true}
                  title={sauce}
                  image={"Sauce-" + sauce}
                ></SelectableCard>
              );
            })}
          </div>
        </div>

        <button onClick={(e) => console.log(e)} className="buttonNext">
          Commander
        </button>
      </div>
    </div>
  );
}
