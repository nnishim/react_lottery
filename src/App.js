import './App.css';
import Lottery from './components/Lottery/Lottery';

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    numbers: [
      {num: 0},
    ],
  };

  randomNum = () => {
    const numbers = this.state.numbers.map(number => {
      return {
        ...number,
        num: Math.floor(Math.random() * 36)
      }
    })
    this.setState({numbers});
  }

  render() {
    return (
      <div className="App">
        <h3 className="lottery__title">Лоттерея 5 из 36</h3>
        <button className="btn" onClick={this.randomNum}>New numbers</button>
        <Lottery num={this.state.numbers[0].num}></Lottery>
      </div>
    )
  }
}