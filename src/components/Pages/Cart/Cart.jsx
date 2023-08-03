import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css";

const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="divVacio">
                <h2>Tu carrito está vacío</h2>
                <img src="https://us.123rf.com/450wm/asmati/asmati1704/asmati170401342/75907401-carrinho-de-compras-com-sinal-de-exclus%C3%A3o-vetor-%C3%ADcone-preto-plano-em-c%C3%ADrculo-branco-com-sombra-em.jpg" />
                <hr/>
                <Link className="divLink" to="/">Ir a la pagina principal</Link>
            </div>
        )
    }

    return (
        <div className="divAux">

            <h2>TU COMPRA:</h2>
            {
                cart.map((prod) => (
                    <div className="divAux2" key={prod.id}>
                        <h4>{prod.name}</h4>
                        <img src={prod.img} alt={prod.nombre}/>
                        <p>Precio: ${prod.price}</p>
                        <p>Cantidad: {prod.cantidad}</p>

                        <button className="btn-carrito" onClick={() => eliminarDelCarrito(prod.id)}>
                        Eliminar del carrito 
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <div className="divAux">
                <h2>Total: ${totalCompra().toFixed(2)}</h2>
                
                <button onClick={vaciarCarrito} className="btn-carrito">Vaciar carrito</button>
                <button className="btn-carrito"> 
                    <Link  to="/checkout">Finalizar compra </Link>
                </button>
                
                
            </div>
            
        </div>
    )
}

export default Cart