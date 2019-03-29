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
      <Contacts/>
      <Footer/>
      
     </div>
    );
  }
}

export default App;
