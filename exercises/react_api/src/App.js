import React, { Component } from 'react'
import {withBreeds} from './components/BreedProvider'
import { Switch, Route} from 'react-router-dom'
import BreedList from './components/BreedList'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'


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
                <Navbar path="/navbar" />
                <Switch>
                    
                    <Route exact path = "/"
                    render={routerprops => 
                    <Homepage {...routerprops}/>}/> 
                    <Route 
                        path="/breeds"  
                        render={routerProps => 
                            <BreedList 
                                mappedBreeds={mappedBreeds} 
                                breeds={this.props.breeds}
                                {...routerProps}/>}/>
                </Switch>
            </div>
        )  
    }
}

export default withBreeds(App)
