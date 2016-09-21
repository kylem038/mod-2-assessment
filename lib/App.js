import React, { Component } from 'react';
import scoreWord from './ScoreWord';

export default class App extends Component {
  constructor() {
  super();
    this.state = {
      wordInput: '',
      score: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value, score: scoreWord(value, 1) });
  }

  render() {
    return (
      <div>
        <h1>Scrabble Scorer</h1>
        <input
          type="text"
          name="wordInput"
          placeholder="Word"
          value={this.state.wordInput}
          onChange={this.handleChange}
        />
        <h2>Score {this.state.score}</h2>
        <form>
        <button
         children="Submit"
         disabled={!this.state.wordInput}
        />
        <button
          children="Clear"
          type="reset"
          onClick={ () => this.setState({ wordInput: '', score: 0 }) }
          disabled={!this.state.wordInput}
        />
        </form>
      </div>
    )
  }

}
