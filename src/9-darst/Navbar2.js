import React from "react";
import card1 from "./imges/3qator.png";
import card2 from './imges/3qator2.png';
import card3 from './imges/3qator3.png';


const Navbar2 = () =>{
    return(

        <div className="cardv">
            <div className="cardv2">
                <h1>We provide that service</h1>
                <p>It is a long established fact that a reader <br /> will be distracted by the service.</p>
            </div>
            <div className="cardv3">
               <div className="cardv4">
               <img src={card1} alt="" />
                <h3>Free Delevary</h3>
                <p>It is a long established fact that a reader will be the service.</p>
               </div>
               <div className="cardv4">
               <img src={card2} alt="" />
                <h3>100% Guarnatee</h3>
                <p>It is a long established fact that a reader will be the service.</p>
               </div>
               <div className="cardv4">
               <img src={card3} alt="" />
                <h3>Best Quality</h3>
                <p>It is a long established fact that a reader will be the service.</p>
               </div>
            </div>
        </div>
    )
}
export default Navbar2;