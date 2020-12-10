import { Component } from 'react';
import './App.css';
import Circle from './Circles/Circles';



class App extends Component {
  state={
    numbers:[
      {circle1:5},
      {circle2:11},
      {circle3:16},
      {circle4:23},
      {circle5:32}
    ]
  }
  render() {
    return (
      <div className="App">
        <Circle circle1={this.state.numbers[0].circle1}/>
        <Circle circle1={this.state.numbers[1].circle2}/>
        <Circle circle1={this.state.numbers[2].circle3}/>
        <Circle circle1={this.state.numbers[3].circle4}/>
        <Circle circle1={this.state.numbers[4].circle5}/>
      </div>
    );
  }
}

export default App;
