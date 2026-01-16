import { Component } from 'react'
import './App.css'
import Test from './components/Test.jsx'
import Sample from './components/Sample.jsx'
class App extends Component {
  constructor(props){
    super()
    this.state ={
      name: 'React State Demo',
      test: props.test
    }
  }

  render() {
    return (
     <>
     <Sample
      name =  "Jafar"
      job = "Software Developer"
      test = "Hello world"
     />
      
     </>
    )
  }
}
export default App

