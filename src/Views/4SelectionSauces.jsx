import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";

export default function SelectionSauces() {
  return (
    <div>
      <h1 className="Title">Quelques Sauces ?</h1>
      <div className="container">
        <div className="containerCards sauces">
          <SelectableCard
            title="Blanche"
            image="Sauce-blanche"
          ></SelectableCard>
          <SelectableCard
            title="Harissa"
            image="Sauce-harissa"
          ></SelectableCard>
          <SelectableCard
            title="Andalouse"
            image="Sauce-andalouse"
          ></SelectableCard>
          <SelectableCard title="BBQ" image="Sauce-bbq"></SelectableCard>
          <SelectableCard
            title="Ketchup"
            image="Sauce-ketchup"
          ></SelectableCard>
          <SelectableCard title="Curry" image="Sauce-curry"></SelectableCard>
        </div>
      </div>

      <button onClick={(e) => console.log(e)} className="buttonNext">
        Etape suivante
      </button>
    </div>
  );
}
