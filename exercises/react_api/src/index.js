import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import BreedProvider from './components/BreedProvider'
import './components/style.css'

ReactDOM.render(
    <BrowserRouter> 
        <BreedProvider>
            <App/>
        </BreedProvider>      
    </BrowserRouter>, 
document.getElementById('root'))



