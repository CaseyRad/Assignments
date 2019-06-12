import React, { Component } from 'react'
import { Route, Link} from 'react-router-dom'
import BreedDisplay from './BreedDisplay'

class BreedList extends Component {
    render(){
    
        const mappedLinks = this.props.breeds.map(breed => {
            return ( <Link to={`/breeds/${breed.name}`}>{breed.name}</Link>)
        })
        return (
            <div className="breed-list-container">

                <div className="links-container" >

                    {mappedLinks}
                </div>

                <Route path="/breeds/:breedname" component={BreedDisplay}/> 
                  
            </div>  
        )
    }
}

export default BreedList;





