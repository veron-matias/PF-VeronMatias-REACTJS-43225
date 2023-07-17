import React, { useEffect, useState } from 'react';
import CardProduct from "../../Cards/CardProduct/CardProduct";
import {Link} from "react-router-dom";
import Spinner from "../../Spinner/Spinner"
import "./Products.css";

//FIREBASE
import { db } from "../../../Firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";


const Products = () => {
    const q = query(collection(db, "itemsArcade"))
    
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
        const getItems = async() => {
            const querySnapshot = await getDocs(q);
            const docs=[];
                querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setItems(docs);
        };
        getItems();
        setTimeout(() => {
            setIsLoading(false);
        }, 1250);
    },[]);

return (
<>{isLoading ? ( <div className="Spinner"> <Spinner /> </div>) : (
<div>
    <h1 className="HeroH1">
        - Listado de Nuestros Productos -
    </h1>
    
    <div className='ProductsSection'>
    
            {items.map((item) => {
                return (
                
                <div key={item.id}>
                    <Link to={`../ProductsDetails/${item.id}`}>
                    <CardProduct  props={item}/>
                    </Link>

                </div>
                )
            })}
    </div>
</div>
)} 
{/* cierro if  */}
</>
);
};

export default Products;