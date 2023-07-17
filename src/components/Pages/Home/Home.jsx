import React from 'react';
import "./Home.css";
import img from "./evo.png";
import Greeting from "../../ItemListContainer/Greeting";
const Home = () => {
return (
    <div className='divHome'>
        <Greeting texto="Hola, bienvenidos a mi tienda Insert-Coin!"/>
        <img src={img} alt="Evo home" />
    </div>
    
)}

export default Home;