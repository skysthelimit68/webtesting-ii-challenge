import React, { useState } from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

const App = () =>  {

  const [state, setState] = useState({
    balls : 0,
    strikes : 0,
    inning : 1,  // up to 18, odd -> top, even -> bottom, Math.ceil(division) to number of innings
    out: 0   //up to 3 then switching to top/bottom inning
  })

  const recordBalls = event => {  
    event.preventDefault();
    const newCount = state.balls + 1
    if(newCount >= 4) {
      setState({ ...state, balls: 0, strikes: 0})
    } else {
      setState({ ...state, balls: newCount });
    }
  }

  const recordStrikes = event => {
    event.preventDefault();
    const newCount = state.strikes + 1
    if(newCount >= 3) {  //strike out
      const newOut = state.out + 1
      console.log("You are out!")
      if(newOut >= 3) {  //end of half inning, switch between top/bottom
        const newInning = state.inning + 1;
        setState({ ...state, balls: 0, strikes: 0, out: 0, inning: newInning})
          console.log("THREE OUTS!!! The end of half inning!")
          console.log(`At ${newInning % 2 === 0 ? "bottom" : "top"} of the ${Math.ceil(newInning/2)} innings, 0 outs`)

      } else {
        setState({ ...state, balls: 0, strikes: 0, out: newOut})
        console.log(`At ${state.inning % 2 === 0 ? "bottom" : "top"} of the ${Math.ceil(state.inning/2)} innings, ${newOut} outs`)

      }
    } else {
      setState({ ...state, strikes: newCount });
      console.log(`At ${state.inning % 2 === 0 ? "bottom" : "top"} of the ${Math.ceil(state.inning/2)} innings, ${state.out} outs`)

    }  
  }

  const recordFoul = event => {
    event.preventDefault();
    if(state.strikes < 2) {
      const newCount = state.strikes + 1
      setState({ ...state, strikes: newCount})
      console.log(`At ${state.inning % 2 === 0 ? "bottom" : "top"} of the ${Math.ceil(state.inning/2)} innings, ${state.out} outs`)

    }
  }

  const recordHit = event => {
    event.preventDefault();
    setState({...state, balls : 0, strikes : 0})
  }

  return (
    <div className="App">
      <Display stat={state}/>
      <Dashboard recordBalls={recordBalls} recordStrikes={recordStrikes} recordFoul={recordFoul} recordHit={recordHit}/>
      
    </div>
  );
}

export default App;


/*
### Count Rules

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. 
  With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
*/