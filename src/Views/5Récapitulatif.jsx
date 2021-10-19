import React from "react";
import SelectableCard from "../Components/Cards/SelectableCard";

export default function Récapitulatif() {
    const [body, setBody] = React.useState();
    const [menu, setMenu] = React.useState({
        pain:"Pain",
        viande:"Viande",
        garniture:["Salade","Tomate"],
        sauce:["blanche","andalouse"]
    });
    const [getValues, setGetValues] = React.useState(true);

    React.useEffect(()=>{
        const buildBody =() => {

            const garniture = menu.garniture.map((value, index) =>{
                console.log(value)
                return (<SelectableCard title={value} image={value}></SelectableCard>)
            })
            const sauces = menu.sauce.map((value, index) =>{
                return (<SelectableCard title={value} image={"Sauce-"+value}></SelectableCard>)
            })

            
        }
        if(getValues){
            buildBody();
            setGetValues(false);
        }
    },[body,getValues])
  return (
    <div>
      <div>
        <h1 className="Title">Récapitulatif</h1>
        <div className="containerCards">
          {body}
        </div>
        <button onClick={(e) => console.log(e)} className="buttonNext">
          Etape suivante
        </button>
      </div>
    </div>
  );
}
