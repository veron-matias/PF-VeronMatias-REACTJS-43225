import React, { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {
const [isBotonAgregarDisabled, setBotonAgregarDisabled] = useState(false);

const handleSumar = () => {
    if (cantidad < max) {
    setCantidad(cantidad + 1);
    }
};

const handleRestar = () => {
    if (cantidad > 1) {
    setCantidad(cantidad - 1);
    }
};

const handleAgregarClick = () => {
    handleAgregar();
    setBotonAgregarDisabled(true); 
};

return (
    <div>
    <div className='divContador'>
        <p>Seleccionar cantidad:</p>
        <div className='sumaresta'>
        <button onClick={handleRestar} className={cantidad === 1 ? "" : ""} disabled={cantidad === 1}>
            <span>-</span> 
        </button>
        <span>{cantidad}</span>
        <button onClick={handleSumar} className={cantidad === max ? "" : ""} disabled={cantidad === max}>
            <span className='sumaresta'>+</span>
        </button>
        </div>
    </div>
    <div>
        <button className="botones" onClick={handleAgregarClick} disabled={isBotonAgregarDisabled}>
        <span>Agregar al Carrito</span>
        </button>
    </div>
    </div>
);
};

export default ItemCount;