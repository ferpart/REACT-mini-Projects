import React from 'react'

class ListElement extends React.Component {

    state = { isDone : false};

    checkState = () => {
        if (this.state.isDone){
            return false;
        }else {
            return true;
        } 
        
    };

    updateState = props => {
        this.setState({isDone: this.checkState()})
    };

    render (){
        return (
            <form className="ui form" onClick={console.log(this.state.isDone)}>
                <div className="ui toggle checkbox">
                    <input 
                        type="checkbox"  
                        onClick={this.updateState}
                        
                    />
                    <label>{this.props.task}</label>    
                </div>
            </form>
        )}
};

ListElement.defaultProps ={
    task : "Hello World!"
}

export default ListElement;