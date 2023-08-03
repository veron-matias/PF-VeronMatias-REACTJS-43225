import React from 'react';
import "./Home.css";
import img from "./evo.png";
import Greeting from "../../ItemListContainer/Greeting";
const Home = () => {
return (
    <div className='divHome'>
        <Greeting texto="Hola, bienvenidos a mi tienda Insert-Coin!"/>
        <img src={img} alt="Evo home" />
        <h2>¡Conocé nuestra tienda de juegos Arcade! </h2>
        <p className="centerText">
            En este rincón lleno de nostalgia y diversión, estamos emocionados de recibirlos a todos los apasionados de los videojuegos Arcade. Aquí, encontrarán todo lo que necesitan para crear, mejorar y personalizar su propia experiencia arcade. Somos una tienda dedicada a brindarles los mejores productos y accesorios para sus proyectos y restauraciones, para que puedan revivir la magia de los clásicos y construir nuevas historias de entretenimiento.
            Nuestra amplia gama de productos les ofrece todo lo necesario para la creación de su propia máquina arcade o para la mejora de las ya existentes. Desde botones y pulsadores de alta calidad hasta joysticks precisos y convertidores versátiles, contamos con todo lo que los entusiastas de los juegos retro necesitan para que sus proyectos cobren vida.
            ¿Buscan recrear esa experiencia auténtica de los años dorados de los juegos Arcade? Nuestros productos han sido seleccionados cuidadosamente para garantizar su durabilidad y rendimiento, permitiéndoles disfrutar de horas interminables de juego sin preocupaciones
        </p>
    </div>
    
)}

export default Home;