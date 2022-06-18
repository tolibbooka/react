import React, { useEffect, useState } from "react";
import axios from "axios";
import loading from "./load.svg";
import { useParams } from "react-router-dom";
const productDetils = () =>{
    const [load,setLoad] = useState(true);
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() =>{
        if (+id){
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) =>{
                setProduct(res.data)
                setLoad(false)
            })
            .catch((err) =>{
                console.log(err);
                setLoad(false)
            })
        }
    },[])
    return(
        <>
        dfdsfdf
              <div className={ load ? "load activ": "load"}>
                <img src="loading" alt="load" />
             </div>
             <div className="card cardDetil">
                 <div className="img">
                     <img src={product.image} alt="" />
                 </div>
                 <div className="content">
                     <h1>{product.title}</h1>
                     <p>{product. description}</p>
                     <p><b>price:{product.price}$</b></p>
                 </div>
             </div>

        </>
    )

}
export default productDetils;