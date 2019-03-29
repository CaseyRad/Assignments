import React from "react"

class DiceBox extends Component {
constructor() {
    super()
    this.state = {
        one: 1,
        two: 1,
        three: 1,
        four: 1,
        five: 1,
    }
}
roll = () => {
    this.setState(ps => {
        let newState = {...ps}
        for (let key in newState){
            newState[key] = Math.floor(Math.random() * 6 + 1)
        }
        return {
            one: Math.floor(Math.random() * 6 + 1),
            two: Math.floor(Math.random() * 6 + 1),
            three: Math.floor(Math.random() * 6 + 1),
            four: Math.floor(Math.random() * 6 + 1),
            five: Math.floor(Math.random() * 6 + 1),
        }
    })
}
    render () {
        return (
            <div>
                <span>number one: {this.state.one}</span>
                <span>number two: {this.state.two}</span>
                <span>number three: {this.state.three}</span>
                <span>number four: {this.state.four}</span>
                <span>number five: {this.state.five}</span>
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        );
    }
}

export default DiceBox;