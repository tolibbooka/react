import React from "react";
import Katta from "../9-darst/imges/2qator.png";
import Amazon from "../9-darst/imges/Amazon.png";
import Alibaba from "../9-darst/imges/Alibaba.png";
import Oxiri from "../9-darst/imges/2qatoroxiri.png";


const Toto3 = () =>{
    return(

        <div className="toto1">
            <div className="toto2">
                <h1>Learn about us</h1>
                <p>It’s short title here</p>
                <img src={Katta} alt="" />
            </div>
            <div className="toto3">
                <p>Lorem Ipsum has been the industry's standard dummy text ever to since the 1500s, type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                <button className='btn'>More about us</button>
                <img src={Amazon} alt="" />
                <img src={Alibaba} alt="" />
                <img src={Oxiri} alt="" />
            </div>
        </div>
    )

}
export default Toto3;