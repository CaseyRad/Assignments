import React from "react"

const Contacts = (props) => {
     console.log(props)
    return (
         <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone:{props.contact.phone}</p>
            <p>email:{props.contact.email}</p>
        </div>
    )
}

export default Contacts;