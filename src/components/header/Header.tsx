import React from "react";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <header data-testid="header">
      <div className="header-left">
        <p style={{ cursor: "default" }}>CASSIOP</p>
        <input type="text" placeholder="Cassiop" />
        <div className="header-item computer administration">
          <p>Administration</p>
          <i className="fa-solid fa-angle-down" />
        </div>
      </div>
      <div className="header-left">
        <div className="header-item computer gestionnaire">
          <i className="fa-regular fa-file-lines " />
          <p>Gestionnaire de fichiers</p>
          <i className="fa-solid fa-angle-down" />
        </div>
        <div className="header-item computer">
          <i className="fa-regular fa-comment" />
          <p>FR</p>
          <i className="fa-solid fa-angle-down" />
        </div>
        <div className="header-item">
          <i className="fa-solid fa-right-from-bracket" />
          Se déconnecter
          <i className="fa-solid fa-angle-down" />
        </div>
      </div>
      {/* <i style={{width: '100%', height: '100%'}} className="fa-solid fa-book"></i> */}
    </header>
  );
}

export default Header;
