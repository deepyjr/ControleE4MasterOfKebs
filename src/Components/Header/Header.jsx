import React from "react";
import './Header.css';
import { useHistory } from "react-router-dom";
import { KebabContext } from "../../Store/KebabContext";

function Header() {
  let history = useHistory();
  const { kebabState, kebabDispatch } = React.useContext(KebabContext);
  return (
    <div>
       <button
        onClick={(e) => {
            kebabDispatch({type:"resetCurrent"})
            history.replace("/Selection-Pain")
            window.location.reload();
    }}
        className="buttonNext commande resetCommande"
      >Reset commande en cours</button>
      <img onClick={(e) => history.replace("/Selection-Pain")} className="header" src={process.env.PUBLIC_URL + '/Logo-MagicKebab.png'} alt="Logo kebab" />
    </div>
  );
}

export default Header;
