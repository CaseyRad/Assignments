import React, { Component } from 'react'
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import Contacts from "./Contacts"
// import TodoItem from "./TodoItem"
import "./Style.css"


class App extends Component {
constructor(){
  super()
  this.state = {
    name: "Jason",
    age: 27,
    hair: "Brown"
  }
}
doSomething = () => {
 this.setState(prevState => {
   if (prevState.name === "Jason"){
     return {name: "Casey"}
   } 
 })
}
  render() {


    return (
      <div className="appWrapper">
      <Header {...this.state} handleButton={this.doSomething}/>
      <Body/>
      
      <div className="contacts"> 
      <Contacts 
      contact = {{
      name: "Nikki Sixx", 
      imgUrl:"https://i.pinimg.com/originals/38/80/0c/38800c2ddf5d416f06cec82d3a4f6a84.jpg", 
      phone:"(555) 555-5555", 
      email:"Nikki_Sixx@outlook.com"
      }}/>

      <Contacts 
      contact = {{
        name: "Joe Walsh", 
        imgUrl:"https://i.pinimg.com/originals/a1/97/d9/a197d979c352874e21a8641dd2d6debb.jpg", 
        phone:"(555) 555-5555", 
        email:"Joe_Walsh@outlook.com"
        }}/>

      <Contacts 
      contact = {{
        name: "Zakk Wylde", 
        imgUrl:"https://i.pinimg.com/originals/63/b2/24/63b224bcc23be60053105e63faa28196.jpg", 
        phone:"(555) 555-5555", 
        email:"Zakk_Wylde@outlook.com"
        }}/>
  
    </div>    

      <Footer/>
      
     </div>
    );
  }
}

export default App;
