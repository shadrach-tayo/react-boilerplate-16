import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import '@babel/polyfill'
import './styles.css'

const Warning = React.lazy(() => import('./Warning'))

class App extends Component {
  state = {
    count: 0
  }
  render() {
    const count = this.state.count
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Boilerplate project</h1>
        <img src="./logo.png" alt="logo" />
        <h2 className={count > 10 ? 'warning' : null}>count: {count}</h2>
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
        {count > 10 ? (
          <React.Suspense fallback={'loading...'}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
