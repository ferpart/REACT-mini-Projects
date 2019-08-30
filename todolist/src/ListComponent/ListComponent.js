import React from 'react'

import CheckboxCreator from './CheckboxCreator/CheckboxCreator'
import List from './List'
import './ListComponent.css'

class ListComponent extends React.Component {

    state={term: '', items: []};

    onSubmit = (term) => {
        this.setState({
          items: [...this.state.items, /*[*/term/*, false]*/]
        });
    };

    showDone = () => {

        // use splice 
        console.log(this.state.items.pop());
        
        this.setState({state : this.state});
        //this.setState({items: this.state.items})
    };

    render(){
        return (
            <div className="ui segment">
                <CheckboxCreator onSubmit={this.onSubmit}/>
                <div className="ui segments">
                    <List items={this.state.items}/>

                    <div id="doneButton" className="ui segment">
                        <button 
                            className="ui button"
                            //onClick={}
                        >
                                Update List
                        </button>
                        <button 
                            className="ui button"
                            onClick={this.showDone}
                        >
                                Show Done
                        </button>
                    </div>
                    
                </div>
            </div>
            
    )};
};


export default ListComponent;