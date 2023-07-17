import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../Cards/CardProduct/CardProduct";
import Typography from '@mui/material/Typography';
import Spinner from "../../Spinner/Spinner";
import "./category.css";
import {Link} from "react-router-dom";
import { db } from "../../../Firebase/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetail  = () => {
    const [item, setItem] = useState([]);
    let { category } = useParams();  
    const [isLoading, setIsLoading] = useState(true);  
    
    useEffect( () => {
        const getItem = async() => {
            const q = query(collection(db, "itemsArcade"), where ("category", "==", category))
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id});
            });
            setItem(docs);
        };
        getItem();
        setTimeout(() => {
            setIsLoading(false);
        }, 1250);
    },[category]);

return (
<>{isLoading ? ( <div className="Spinner"> <Spinner /> </div>) : (
    <div>
        <h1 className="HeroH1">- PRODUCTO - </h1>
            <div className="" >
            {item.map((item, index) => {
                return ( 
                <div className="ProductsSectionDetails divProducto" key={index}>
                    <Link to={`../ProductsDetails/${item.id}`}>
                        <CardProduct props={item} key={item.id} />
                    </Link>
                    <Typography component={"span"} variant="body2" color="white">
                    <div className="descripcionProducto">
                        <span className="tituloSpan">Descripción:</span>
                        <p>{item.description}</p>
                        <div key={item.id}>
                            </div>
                    </div>
                    </Typography>    
                </div>
                )
            })}
            </div>
    </div>   
)};
</>
);
};
export default ItemDetail;