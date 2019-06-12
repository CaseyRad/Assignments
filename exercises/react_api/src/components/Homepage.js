import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return(
            <div className="homepage" onClick={() => this.props.history.push("/breeds")}>Push Me</div>
        )
    }
}

export default Homepage; 