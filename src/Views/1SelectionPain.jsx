import React from "react";
import "./Process.css";
import SelectableCard from "../Components/Cards/SelectableCard";

export default function SelectionPain() {
    
  return (
    <div>
      <h1 className="Title">Selection du pain</h1>
      <div className="containerCards">
        <SelectableCard title="Pain" image="Pain" type="Pain"></SelectableCard>
        <SelectableCard title="Galette" image="Galette" type="Pain"></SelectableCard>
      </div>
      <button onClick={(e)=>console.log(e)} className="buttonNext">Etape suivante</button>
    </div>
  );
}
