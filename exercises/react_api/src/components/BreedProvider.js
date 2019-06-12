import React, { Component } from 'react'
import axios from 'axios'


export const BreedContext = React.createContext()

class BreedProvider extends Component {
    constructor(){
        super()
        this.state = {
            breeds: []
        }
    }

    
    getBreeds = () => {
        axios.get("https://api.thedogapi.com/v1/breeds/", {headers: {"x-api-key": process.env.REACT_APP_API_KEY }}).then(response => {
                this.setState({
                    breeds: response.data
                })
            })
            .catch(err => console.log(err))
        }

    render(){
        return (
           <BreedContext.Provider
                value={{ 
                    breeds: this.state.breeds,
                    getBreeds: this.getBreeds
                }}>
               { this.props.children }   
           </BreedContext.Provider>
        )
    }
}

export default BreedProvider


export const withBreeds = C => props => (
    <BreedContext.Consumer>
         {value => <C {...value} {...props}/>}
    </BreedContext.Consumer>
)