import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';


describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  

  describe('strike button', () => {
    //find strike button
    it('finding strikes button', () => {
      const {getByText} = render(<Dashboard />);
      getByText("Strike");
    })
    //click
    it('increment strike up to 3, then reset both strike and ball counts to zero', () => {
      const {getByText} = render(<App />);
      const button = getByText("Strike");
      for(let i = 1; i < 4; i++) {
        fireEvent.click(button);
        if(i !== 3) {
          getByText(`Strikes: ${i}`)
        } else {
          getByText('Strikes: 0')
        }
      }
    })
  })

  describe('ball button', () => {
    //find ball button
    it('finding balls button', () => {
      const {getByText} = render(<Dashboard />);
      getByText("Ball");
    })
    //click
    it('increment ball up to 4, then reset both strike and ball counts to zero', () => {
      const { getByText } = render(<App />);
      const button = getByText("Ball");
      for(let i = 1; i < 5; i++) {
        fireEvent.click(button);
        if(i !== 4) {
          getByText(`Balls: ${i}`)
        } else {
          getByText('Balls: 0')
        }
      }
    })

  })

  describe('foul button', () => {
    //find foul button
    it('finding foul button', () => {
      const {getByText} = render(<Dashboard />);
      getByText("Foul");
    })
    //click
    it('increment strikes up to 2', () => {
      const { getByText } = render(<App />);
      const button = getByText("Foul");
      for(let i = 1; i < 4; i++) {
        fireEvent.click(button);
        if(i < 3) {
          getByText(`Strikes: ${i}`)
        } else {
          getByText('Strikes: 2')
        }
      }
    })
  })

  describe('hit button', () => {
    //find hit button
    it('finding hit button', () => {
      const {getByText} = render(<Dashboard />);
      getByText("Hit");
    })
    //click
    it('reset strikes and balls to 0 when clicked', () => {
      const {getByText} = render(<App />);
      const button = getByText("Hit");
      fireEvent.click(button);
      getByText("Strikes: 0")
      getByText("Balls: 0")
    })
  })


})
