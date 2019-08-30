import React from 'react';
import ReactDOM from 'react-dom';
import ListComponent from './ListComponent/ListComponent'

const App = () => {
    return (
        <div className="ui segment">
            <ListComponent/>
        </div>
        
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)