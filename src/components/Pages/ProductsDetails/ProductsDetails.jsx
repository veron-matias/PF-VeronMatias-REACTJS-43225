import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../Cards/CardProduct/CardProduct";
import Typography from '@mui/material/Typography';
import Spinner from "../../Spinner/Spinner";
import "./ProductDetails.css";
import ItemCount from "../../ItemCount/ItemCount";

//firebase (google)
import { db } from "../../../Firebase/FirebaseConfig";
import { collection, query, where, documentId, getDocs } from "firebase/firestore";
import { CartContext, useCartContext} from "../../../Context/CartContext";


const ProductsDetails  = () => {
    const [item, setItem] = useState([]);
    let { id } = useParams();  
    const [isLoading, setIsLoading] = useState(true);  
    const { agregarAlCarrito } = useCartContext();


    useEffect( () => {
        const getItem = async() => {
            const q = query(collection(db, "itemsArcade"), where (documentId(), "==", id))
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id});
            });
            setItem(docs);
            setTimeout(() => {
                setIsLoading(false);
            }, 1250);
        };
        getItem();
    },[id]);
// console.log (item);
return (
    <>{isLoading ? ( <div className="Spinner"> <Spinner /> </div>) : (
    <div>
        <h1 className="HeroH1"> Detalles del Producto:</h1>
            <div className="ProductsSectionDetails divProducto">
            {item.map((item, index) => {
                return ( 
                <div className="ProductsSectionDetails divProducto"  key={index}>
                    <CardProduct props={item} key={item.id} />
                    <Typography component={"span"} variant="body2" color="white">
                    <div className="descripcionProducto">
                        <span className="tituloSpan">DESCRIPCION:</span>
                        <p>{item.description}</p>
                        {/* <button onClick={()} >Comprar</button> */}
                        {/* <ItemCount
                            initial={1}
                            stock={10}
                            onAdd={(quantity) =>
                            console.log("cantidad agregada ", quantity)
                        }
                        /> */}
                        <ItemCount
                            initial={1}
                            stock={10}
                            onAdd={(quantity) => {
                                agregarAlCarrito({ ...item[0], cantidad: quantity });
                                console.log("Producto agregado al carrito:", { ...item[0], cantidad: quantity });
                            }}
                            />
                    </div>
                    </Typography>   
                </div>
                ) //cierra return
            })}
            </div>
    </div>
    )}
    </>
    );
    };
export default ProductsDetails;