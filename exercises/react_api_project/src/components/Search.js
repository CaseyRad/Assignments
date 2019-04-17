import React from 'react';
import { BrowserRouter} from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props);

       
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        BrowserRouter.push(`/user/${this.refs.userInput.value}`)
    }

    render() {
        return (
            <div className="search-page">
                <h2>Enter a Dog Breed</h2>
                <form onSubmit={this.handleSubmit}>
                    <input ref="userInput" className="search-page__input" type="text" />
                    <button className="search-page__button">Search for Dog Breed</button>
                </form>
            </div>
        );
    }
};

export default Search;