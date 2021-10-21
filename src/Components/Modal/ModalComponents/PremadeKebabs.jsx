import React from "react";
import SelectableCard from "../../../Components/Cards/SelectableCard";
import { useHistory } from "react-router-dom";
import { KebabContext } from "../../../Store/KebabContext";
export default function PremadeKebabs(props) {
  const { kebabDispatch } = React.useContext(KebabContext);
  let kebabToDisplay = props.kebab;
  let history = useHistory();

  return (
    <div>
      <div>
        <h1 className="Title" style={{ textAlign: "center" }}>
          Récapitulatif
        </h1>
        <div className="container">
          <div className="containerCards">
            <SelectableCard
              disable={true}
              title={kebabToDisplay.pain}
              image={kebabToDisplay.pain}
            ></SelectableCard>
            <h3>+</h3>
            <SelectableCard
              disable={true}
              title={kebabToDisplay.viande}
              image={kebabToDisplay.viande}
            ></SelectableCard>
            {kebabToDisplay.garnitures.length > 0 ? <h3>+</h3> : null}
            {kebabToDisplay.garnitures.length > 0
              ? kebabToDisplay.garnitures.map((garniture) => {
                  return (
                    <SelectableCard
                      disable={true}
                      title={garniture}
                      image={garniture}
                    ></SelectableCard>
                  );
                })
              : null}
            {kebabToDisplay.sauces.length > 0 ? <h3>+</h3> : null}
            {kebabToDisplay.sauces.length > 0
              ? kebabToDisplay.sauces.map((sauce) => {
                  return (
                    <SelectableCard
                      disable={true}
                      title={sauce}
                      image={"Sauce-" + sauce}
                    ></SelectableCard>
                  );
                })
              : null}
          </div>
        </div>
        <button
          onClick={() => {
            kebabDispatch({
              type: "addPremadeToCart",
              payload: kebabToDisplay,
            });
            history.replace("/selection-pain");
            window.location.reload();
          }}
          className="buttonNext"
          style={{ width: "100%" }}
        >
          Commander
        </button>
      </div>
    </div>
  );
}
