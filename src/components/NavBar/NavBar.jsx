import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
import Shop from "../Shop/Shop";

const NavBar = () => {
    return (
    <nav className="Navigation">
        <ul className="List-ul">
        <Link className="Link" to ="/">
                <h1 style={{ color: "white" }}>Insert-Coin</h1>
            </Link>
            {/* <Link className="Link" to ="/">
                HOME
            </Link>
            <Link className="Link" to ="Products">
                PRODUCTOS
            </Link>
            <Link className="Link" to ="/Contact">
                CONTACTO
            </Link> */}

            <Link className="Link" to ="Products">
                PRODUCTOS
            </Link>
            <Link className="Link" to ="/category/joystick">
                JOYSTICKS
            </Link>
            <Link className="Link" to ="/category/fightstick">
                FIGHTSTICK
            </Link>
            <Link className="Link" to ="/category/button">
                BOTONES
            </Link>
            <Link className="Link" to ="/category/pcb">
                PCB-Brooks
            </Link>
            <Link className="Link" to ="/category/converter">
                CONVERTER
            </Link>
            <li>
            <Shop  
            
            />
            </li>
        </ul>
    </nav>
        );
};

export default NavBar;
