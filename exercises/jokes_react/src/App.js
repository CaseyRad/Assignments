import React, { Component } from 'react';
import Header from "./Header"
import Body from "./Body"
import Jokes from "./Jokes"
import Footer from "./Footer"
import jokeData from "./jokeData" 



class App extends Component {
    render = () => {
    const jokesComponents = jokeData.map(jokes => <Jokes key = {jokes.id} question ={jokes.question} punchLine={jokes.punchLine}/>)

      return (
       
       <div>
         {jokesComponents}
      </div>

      )
      }
}
export default App;
