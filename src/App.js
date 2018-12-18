import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import '@babel/polyfill'
import './styles.css'

class App extends Component {
  state = {
    count: 0
  }

  render() {
    const count = this.state.count
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Boilerplate project</h1>
      </div>
    )
  }
}

export default hot(module)(App)
