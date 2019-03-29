import React from "react";


const Product = (props) => {
    
    
    return (
        <div className="product-box">
            <div className="text-content">
                <h1>{props.title}</h1>
                <div className="image-box" style={{backgroundImage: `url(${props.img})`}}>
                </div>
                <p>{props.description}</p>
                
            </div>
    
        </div>
    )
}

export default Product;

