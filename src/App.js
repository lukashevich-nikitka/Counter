import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Counter />
    )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}
  }

  render() {
    return (
      <>
      <div className='app'>
        <Screen value = {this.state.value}/>
        <div className='buttons-area'>
          <button className='button' onClick={() => this.setState({ value: this.state.value + 1 })}>+</button>
          <button className='button' onClick={() => this.setState({ value: this.state.value - 1 })}>-</button>
        </div>
      </div>
      </>
    )
  }
}

class Screen extends React.Component {
  render() {
    return (
      <div className='screen'>{this.props.value}</div>
    )
  }
}

export default App;
