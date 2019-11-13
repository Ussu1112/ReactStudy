import React, { Component } from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import MyComponent from './MyComponent';


const Problemmatic = () => {
  throw (new Error('버그가 나타났다!'));
  return (
    <div>
      
    </div>
  );
};

export default class App extends Component {
  state = {
    counter : 1,
    error : false,
  }
  componentDidCatch(error, info) {
    this.setState({
      error:true,
    });
  }

  constructor(props) { //컴포넌트 생성시 호출되는 것
    super(props);
    console.log('constructor');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  handleClick = () => {
    this.setState({
      counter :this.state.counter +1
    });
  };
  render (){
    if (this.state.error){
      return (
        <div>에러가 났어요!</div>
      )
    }
    return (
      <div className="App">
        <MyName name="리액트"/>
        <Counter />
        {this.state.counter === 4 && <Problemmatic />}
        {this.state.counter < 10 && <MyComponent value ={this.state.counter}/>}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}


