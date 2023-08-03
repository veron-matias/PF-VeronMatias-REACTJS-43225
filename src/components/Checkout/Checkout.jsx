import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, updateDoc, doc, getDoc, query, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/FirebaseConfig"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import "./Checkout.css"


//materilUI alert
import FilledAlerts from "./alert/alert"


const schema = Yup.object().shape(
    {
    
    nombre: Yup.string()
                .required( <span className="spanError"> Este campo es obligatorio </span>)
                .min(3, <span className="spanError"> El nombre es muy corto </span>)
                .max(20, <span className="spanError">  El nombre es demasiado largo </span>),
    direccion: Yup.string()
                .required(<span className="spanError">  Este campo es obligatorio </span>)
                .min(6, <span className="spanError"> La dirección es muy corta</span>)
                .max(30, <span className="spanError">La dirección es demasiado larga</span>),
    email: Yup.string()
                .required(<span className="spanError">Este campo es obligatorio</span>)
                .email(<span className="spanError">Email inválido</span>)
})


const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const crearOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }
        
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        const productos = await getDocs(q)

        const outOfStock= []

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            vaciarCarrito()
                        })  
                        .catch(err => console.log(err))
                })
        } else {
            alert("Hay items sin stock")
        }
    }

    if (orderId) {
        return (
            <div className="ordenOk">
                <h1>Listo!</h1>
                <div className='alert'>
                    <FilledAlerts className='alert' ></FilledAlerts>
                </div>
                <div className="numOrden">
                    <p> <i>Tu orden de compra es:  </i> <strong>{orderId}</strong></p>
                    <Link to="/"><span>Volver al inicio</span></Link> 
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div >
            <div className="divTexto">
            <h2>Checkout:</h2>
            <p>Complete el siguiente formulario con su nombre real, direccion de envio y su email de contacto para generar una orden de compra:</p>
            <hr/>
            </div>
            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={crearOrden}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <div className="divForm">
                            <span className="spanDatos">NOMBRE:</span>
                            <Field type="text" name="nombre" className="cajaDatos"/>                       
                            <ErrorMessage name="nombre" component={"p"}/>
                        </div>
                        <div className="divForm">
                            <span className="spanDatos">DIRECCION</span>
                            <Field type="text" name="direccion" className="cajaDatos"/>                        
                            <ErrorMessage name="direccion" component={"p"}/>
                        </div>

                        <div className="divForm">
                            <span className="spanDatos">EMAIL</span>
                            <Field type="email" name="email" className="cajaDatos"/>
                            <ErrorMessage name="email" component={"p"}/>
                        <button className="">E n v i a r</button>
                        </div>
                    </Form>
                )}

            </Formik>            
        </div>
    )
}

export default Checkout
