import React from "react";
import Product from "./Product";


const Body = () => {
   
    return (
        <div className= "container">
            <Product title="Cupcakes" price="$3.00" description="Sweet Treats"
            img="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80/"/>
            <Product title="Donuts" price="$5.00"description="Dessert" img="https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=heather-ford-493953-unsplash.jpg"/>
            <Product title="Cookies" price="$2.00"description="Dessert" img="https://images.unsplash.com/photo-1485745655111-3272a37e76a5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=erol-ahmed-198786-unsplash.jpg"/>
            <Product title="French Toast" price="$4.00"description="Dessert" img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=joseph-gonzalez-192345-unsplash.jpg"/>

        </div>
    )
}
export default Body;

