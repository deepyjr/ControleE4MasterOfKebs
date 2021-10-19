import React from "react";
import "./Process.css";
import SelectableCard from "../Components/Cards/SelectableCard";

export default function SelectionPain() {
  return (
    <div>
      <h1 className="Title">Selection du pain</h1>
      <div className="containerCards">
        <SelectableCard title="Pain" image="Pain"></SelectableCard>
        <SelectableCard title="Galette" image="Galette"></SelectableCard>
      </div>
    </div>
  );
}
