import React from 'react';

class Clicker extends React.Component {
    
    state = { clicks: 0};

    clickChecker = () => {
        this.setState({clicks: this.state.clicks +1});
    }
    
    render () {
        return (
            <div>
                <h1>I've been clicked {this.state.clicks} times</h1>
                <button onClick={this.clickChecker}>press me</button>
            </div>
        )
    };
};

export default Clicker;