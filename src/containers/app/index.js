import React from 'react'
import { Route, Link } from 'react-router-dom'
import Counter from '../counter'
import About from '../about'
import Home from '../home'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App
