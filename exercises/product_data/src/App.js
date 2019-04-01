import React, { Component } from 'react'
import ProductsData from "./productsData"
import {BrowserRouter} from "react-route-dom"
import Product from "./Product"
import TodoItem from "./TodoItem"
import TodoData from "./TodoData"
import './App.css'


class App extends Component {
  constructor (){
    super()
    this.state = {
      answer: "Yes"
      age: 13

    }
    render() {
    return (
      <div>
        <h1>Is state important to know?</h1>
        <ChildComponent answer={this.state.answer}/>
        <div/> 
    )
    }
}

export default App;
