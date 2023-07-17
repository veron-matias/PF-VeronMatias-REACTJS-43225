import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <Link className="" to="/">Ir a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="">

            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre}/>
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>

                        <button 
                            className=""
                            onClick={() => eliminarDelCarrito(prod.id)}
                        >
                            
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h5>Total: ${totalCompra()}</h5>
                <hr/>
                <button onClick={vaciarCarrito} className="">Vaciar carrito</button>
                <Link className="" to="/checkout">Terminar mi compra</Link>
            </div>
        </div>
    )
}

export default Cart