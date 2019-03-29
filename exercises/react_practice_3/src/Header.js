import React from "react"

 function Header (props) {
    console.log(props)
     return (
        <div>
            <h3>{props.name}</h3>
        <input type="checkbox"/>
        <p>Placeholder text</p>
        <input type="checkbox"/>
        <p>Placeholder text</p>
        <input type="checkbox"/>
        <p>Placeholder text</p>
        <input type="checkbox"/>
        <p>Placeholder text</p>
        <button onClick={props.handleButton}>Change Name</button>
      </div>
     )
 } 

 export default Header;