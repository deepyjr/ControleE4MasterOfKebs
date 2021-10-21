import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";
import { KebabContext } from "../Store/KebabContext";
import { useHistory } from "react-router-dom";
export default function Récapitulatif() {
  const { kebabState, kebabDispatch } = React.useContext(KebabContext);
  let history = useHistory();

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
            {kebabState.currentKebab.garnitures.length > 0 ? <h3>+</h3> : null}
            {kebabState.currentKebab.garnitures.length > 0 ? kebabState.currentKebab.garnitures.map((garniture) => {
              return (
                <SelectableCard
                  disable={true}
                  title={garniture}
                  image={garniture}
                ></SelectableCard>
              );
            }) : null}
            {kebabState.currentKebab.sauces.length > 0 ? <h3>+</h3> : null}
            {kebabState.currentKebab.sauces.length > 0 ? kebabState.currentKebab.sauces.map((sauce) => {
              return (
                <SelectableCard
                  disable={true}
                  title={sauce}
                  image={"Sauce-" + sauce}
                ></SelectableCard>
              );
            }) : null}
          </div>
        </div>

        <button onClick={()=>{
          kebabDispatch({type:"addToCart"})
          history.replace("/selection-pain")
          window.location.reload();
      }} className="buttonNext">
          Commander
        </button>
      </div>
    </div>
  );
}
