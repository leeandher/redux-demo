import React from 'react'

import List from './List'
import Form from './Form'
import logo from '../assets/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-link">Articles</h2>
        <List />
        <Form />
      </header>
    </div>
  )
}

export default App
