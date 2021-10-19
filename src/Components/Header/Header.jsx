import React from "react";
import './Header.css';

function Header() {
  return (
    <div>
      <img className="header" src={process.env.PUBLIC_URL + '/Logo-MagicKebab.png'} alt="Logo kebab" />
    </div>
  );
}

export default Header;
