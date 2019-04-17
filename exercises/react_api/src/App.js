import React, { Component } from 'react'
import {withBreeds} from './components/BreedProvider'
import { Switch, Route} from 'react-router-dom'
import BreedList from './components/BreedList'


class App extends Component {
    componentDidMount(){
        this.props.getBreeds()
    }
    
    render(){
      console.log(this.props)
        const mappedBreeds =  this.props.breeds.map(breed => 
                    <div>
                        <h1>{breed.name}</h1>
                    </div>
        )
        return (
            <div>
                <Switch>
                    <Route 
                        path="/" 
                        render={routerProps => 
                            <BreedList 
                                mappedBreeds={mappedBreeds} 
                                breeds={this.props.breeds}
                                {...routerProps}/>
                    }/>
                </Switch>
            </div>
        )  
    }
}

export default withBreeds(App)
