import React from "react";
import "./Header.css";
import img from "../Images/arcade2.jpg";
import img1 from "../Images/pinballs.jpg";
import img2 from "../Images/arcades.jpg";
import img3 from "../Images/sanwabotones.jpg";
import img4 from "../Images/daytona.jpg";

const Header = (props) => {
  // console.log(props);
  return (
    <div className="Header">
      <section>
      <img src={img1} alt="PINBALLS" />
        <img src={img} alt="ARCADES " />
        <img src={img2} alt="ARCADES" />
        <img src={img4} alt="DAYTONA" />
        <img src={img3} alt="BOTONES SANWA" />
    </section>
    <span>INSERT-COIN</span>
    </div>

  );
};

export default Header;
