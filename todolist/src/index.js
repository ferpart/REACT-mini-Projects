import React from 'react';
import ReactDOM from 'react-dom';
import ListElement from './ListElement'

const App = () => {
    return (
        <ListElement/>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)