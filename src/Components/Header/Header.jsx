import React from "react";
import './Header.css';
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  return (
    <div>
      <img onClick={(e) => history.replace("/Selection-Pain")} className="header" src={process.env.PUBLIC_URL + '/Logo-MagicKebab.png'} alt="Logo kebab" />
    </div>
  );
}

export default Header;
