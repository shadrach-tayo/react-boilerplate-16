import React, { Component } from "react";
import {hot} from 'react-hot-loader';
import "./styles.css";

class App extends Component {
  state = {
    count: 0
  };
  render() {
    const count = this.state.count;
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Boilerplate project</h1>
        <h2 className={count > 10 ? "warning" : null}>count: {count}</h2>
        <button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count + 1 }))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count - 1 }))
          }
        >
          -
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
