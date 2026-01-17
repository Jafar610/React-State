import { Component } from "react";

export default class Sample extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
      status: "Even",
      name: props.name,
      job: props.job,
    };
  }

  // componentDidMount(){
  //   alert('hello world')
  // }
  

  increment = () => {
    this.setState((state) => {
      if (state.counter < 10) {
        return {
          counter: state.counter + 1,
          status: (state.counter + 1) % 2 === 0 ? "Even" : "Odd",
        };
      } else{
        return{
            counter: state.counter,
            status: "Max Limit Reached"
          }
      }
    });
  };

  
  render() {
    return (
      <div>
        <h1> Name: {this.props.name} </h1>
        <h2> Job: {this.props.job} </h2>
        <h3> Counter: {this.state.counter} </h3>
        <h4>Status: {this.state.status}</h4>
        <button onClick={this.increment}>Increase By 1</button>
      </div>
    );
  }
}
