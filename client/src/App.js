import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';




const App = props =>  {

  const [state, setState] = useState({
    balls : 0,
    strikes : 0
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
    if(newCount >= 3) {
      setState({ ...state, balls: 0, strikes: 0})
    } else {
      setState({ ...state, strikes: newCount });
    }
    
  }

  const recordFoul = event => {
    if(state.strikes < 2) {
      const newCount = state.strikes + 1
      setState({ ...state, strikes: newCount})
    }
  }

  const recordHit = event => {
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