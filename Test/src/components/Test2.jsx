import React, { Component } from 'react'

class Test2 extends Component {
    constructor (){
        super();
        this.state = {
            count : 0,
        }
    }
    
  render() {
    return (
      <>
      <div>
        <h1>The Value of count is {this.state.count}</h1>
        <button onClick={this.Add}>Click</button>
      </div>
      </>
    )
  }
}
export default Test2
