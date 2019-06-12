import React, { Component } from 'react'
import { withBreeds} from './BreedProvider' 


class BreedDisplay extends Component {
    constructor(){
        super()
        this.state = {
            currentBreed: {
                id: "",
                name: "",
                bred_for: "",
                breed_group: "", 
                height: "",
                weight: "",
                life_span: "",
                temperament: "",
                origin: "", 
                description: ""  
            }
        }
    }

    componentDidMount(){
        if(this.props.breeds.length){
            const currentBreed = this.props.breeds.find(breed => breed.name === this.props.match.params.breedname)
            this.setState({ currentBreed })
        }
    }

    componentDidUpdate(prevProps){
         if(this.props.match.params.breedname !== prevProps.match.params.breedname){
            const currentBreed = this.props.breeds.find(breed => breed.name === this.props.match.params.breedname)
            this.setState({ currentBreed })
         }
    }

    render(){
        return(
            <div className="breed-display">
                <h1> Breed Name: {this.state.currentBreed.name}</h1>
                <h3> Weight: {this.state.currentBreed.weight.imperial} lbs.</h3>
                <h3> Height: {this.state.currentBreed.height.imperial} inches</h3>
                <h3> Life Span: {this.state.currentBreed.life_span}</h3>
                <h3> Bred For: {this.state.currentBreed.bred_for}</h3>
                <h3> Breed Group: {this.state.currentBreed.breed_group}</h3>
                <h3> Temperament: {this.state.currentBreed.temperament}</h3>
                <h3> Description: {this.state.currentBreed.description}</h3>
                
            </div>
        )
    }
}

export default withBreeds(BreedDisplay);