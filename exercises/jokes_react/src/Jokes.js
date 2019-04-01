import React from "react"

const Jokes = (props) => {
    
    return (
    <div>
        <h1>Question:{props.question}</h1>
        <h1>Punchline:{props.punchLine}</h1>
        <h1></h1>

    </div>
        )
    }

export default Jokes;