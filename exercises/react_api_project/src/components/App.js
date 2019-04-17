
import React from 'react';
import { Link } from 'react-router-dom';  
import Search from './Search';
import User from './User';

class App extends React.Component {
    render() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <h1><Link to="/">Dog Breed Project</Link></h1>
                    <Search/>
                    <User/>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;



const coinFlip = () => {
    const randomNum = Math.floor(Math.random() * 2)
    return new Promise((resolve, reject) => {
        if(randomNUm === 0){
            resolve("it landed on Heads")
        } else if(randomNum === 1) {
            reject("It landed on Tails")
        }
    })
}