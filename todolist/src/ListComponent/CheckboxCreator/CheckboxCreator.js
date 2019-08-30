import React from 'react'

export default class CheckboxCreator extends React.Component {

    state={term: ''};

    addComponent = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)
        this.setState({term : ''})
    }

    render () {
        return (
            <div className="ui segment" >
                <form onSubmit={this.addComponent} className="ui form">
                    <div className="field">
                    <label>Add task</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value})}
                    />
                    </div>
                </form>
            </div>
    )};

    

};