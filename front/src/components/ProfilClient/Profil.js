import React, { Component } from "react";
import "./Profil.css";

import ProfilNav from "./ProfilNav";
import ProfilHead from "./ProfilHead";
import MenuNav from "./MenuNav";
class Profil extends Component {
  render() {
    return (
      <div className="profil">
        <ProfilHead />
        <ProfilNav />
        <MenuNav />
      </div>
    );
  }
}
export default Profil;
