import React from 'react'

class Checkbox extends React.Component {

    state = { isDone : false};

    checkState = () => {
        if (this.state.isDone){
            return false;
        }else {
            return true;
        } 
        
    };

    updateState = props => {
        this.setState({isDone: this.checkState()});
        
    };

    componentDidUpdate() {
        console.log(this.state.isDone);
    }

    render (){
        return (
            <div className="ui segment">
                    <div className="ui checkbox">
                        <input 
                            type="checkbox"  
                            onClick={this.updateState}                            
                        />
                        <label>{this.props.children}</label>    
                    </div>
            </div>
        )}
};

Checkbox.defaultProps = {
    task : "Hello World!"
};

export default Checkbox;