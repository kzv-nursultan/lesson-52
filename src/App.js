import { Component } from 'react';
import './App.css';
import Circle from './Circles/Circles';



class App extends Component {
  state={
    numbers:[
      {circle0:0},
      {circle1:0},
      {circle2:0},
      {circle3:0},
      {circle4:0}
    ]
  }

  changeNumber = () => {

    const number = (max,min) =>{
      return Math.floor(Math.random() * (max - min) + min);
   };

   const numbers = [...this.state.numbers];

   const digit0 = {...numbers[0]};
   digit0.circle0 = number(12,5);
   numbers[0] = digit0;

   const digit1 = {...numbers[1]};
   digit1.circle1 = number(18,11);
   numbers[1] = digit1;

   const digit2 = {...numbers[2]};
   digit2.circle2 = number(24,17);
   numbers[2] = digit2;

   const digit3 = {...numbers[3]};
   digit3.circle3 = number(30,23);
   numbers[3] = digit3;

   const digit4 = {...numbers[4]};
   digit4.circle4 = number(37,29);
   numbers[4] = digit4;

   this.setState({numbers});
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.changeNumber}>Change Number</button>

        <Circle 
        circle0={this.state.numbers[0].circle0} 
        circle1={this.state.numbers[1].circle1} 
        circle2={this.state.numbers[2].circle2} 
        circle3={this.state.numbers[3].circle3} 
        circle4={this.state.numbers[4].circle4}/>
      </div>
    );
  }
}

export default App;
