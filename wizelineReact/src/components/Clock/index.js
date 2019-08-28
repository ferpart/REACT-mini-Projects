import React from 'react';

class Clock extends React.Component {

  state = { date : new Date().toLocaleTimeString()}

 componentDidMount() {
   setInterval(() => {this.setState({date : new Date().toLocaleTimeString()})}, 1000)
 }

  render () {  
      return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
  )};


}

export default Clock;