import React from "react"


const jokeData = () => {
    return (
        <div className="jokes">
        <Jokes 
        question=" this is the first joke"
        punchLine=" this is the first punchline"
        />
        <Jokes 
        question=" this is the second joke"
        punchLine=" this is the second punchline"
        />
        <Jokes
        question=" number tre"
        punchLine=" 333"
        />
        <Jokes
        punchLine= "this one is just the punchline"
        />
        <Jokes 
        question=" this is joke number 5"
        punchLine=" number 5"
        />
  </div>
    )
}

export default jokeData; 