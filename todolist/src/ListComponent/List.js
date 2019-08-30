import React from 'react';
import Checkbox from './Checkbox/Checkbox'


const List = props => {

    return (
        props.items.map((item, index) => <Checkbox key={index}>{item}</Checkbox>)
    );

};
    

    
    


export default List;