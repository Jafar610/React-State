import React, { Component } from "react";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      Name: "Jafar Mohamed",
      count: 0,
      status: "Even",
    };
  }

  Add = () => {
    this.setState((state) => {
      return {
        count : state.count + 1,
        status : (state.count + 1) % 2 == 0 ? "Even" : "Odd"
      }
    });
  };

  componentDidUpdate(){
    document.title = `Count : ${this.state.count}`
  }

  componentDidMount(){
    document.title = `Count: ${this.state.count}`
  }
  render() {
    return (
      <>
        <h2>Hello {this.state.Name} </h2>
        <h3>
          {this.state.count} -- {this.state.status}
        </h3>
        <button onClick={this.Add}>Count</button>
      </>
    );
  }
}
