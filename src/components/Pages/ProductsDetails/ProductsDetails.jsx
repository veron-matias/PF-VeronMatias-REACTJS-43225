import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardProduct from "../../Cards/CardProduct/CardProduct";
import Typography from '@mui/material/Typography';
import Spinner from "../../Spinner/Spinner";
import "./ProductDetails.css";
import ItemCount from "../../ItemCount/ItemCount";

//firebase (google)
import { db } from "../../../Firebase/FirebaseConfig";
import { collection, query, where, documentId, getDocs, doc } from "firebase/firestore";
import { CartContext} from "../../../Context/CartContext";



const ProductsDetails  = () => {
    const [item, setItem] = useState(null);
    let { id } = useParams();  
    const [isLoading, setIsLoading] = useState(true);  
    const { agregarAlCarrito, inCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);
    const [stock, setStock] = useState(0);
    const [nameProd, setNameProd] = useState(0);
    const [priceProd, setPriceProd] = useState(0);
    const [imgProd, setImgProd] = useState(0);

    const handleAgregar = () => {
        if (cantidad > 0 && cantidad <= stock) {
            const newItem = {
                id: id,
                name: nameProd,
                price: priceProd,
                cantidad: cantidad,
                img: imgProd,

            };
            agregarAlCarrito(newItem);
            // console.log(newItem);
        } else {
            // console.log("Cantidad inválida. Verifica el stock disponible.");
        }
    }



    useEffect( () => {
        const getItem = async() => {
            const q = query(collection(db, "itemsArcade"), where (documentId(), "==", id))
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id});
            });

            if (docs.length > 0) {
                const itemData = docs[0];
                setItem(itemData);
                setStock(itemData.stock);
                setNameProd(itemData);
                setNameProd(itemData.name);
                setPriceProd(itemData);
                setPriceProd(itemData.price);
                setImgProd(itemData);
                setImgProd(itemData.img);
            }

            setItem(docs);
            setTimeout(() => {
                setIsLoading(false);
            }, 1250);
        };
        getItem();
    },[id]);


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
                        {/* {console.log (item.name)}  */}
                        <p>{item.description}</p>
                        
                        <ItemCount 
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
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