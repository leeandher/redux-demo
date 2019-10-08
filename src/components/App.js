import React from 'react'
import { connect } from 'react-redux'

import Swapper from './Swapper'
import List from './List'
import Form from './Form'
import Jokes from './Jokes'

const mapStateToProps = ({ setting }) => {
  return { setting }
}

const App = ({ setting }) => {
  return (
    <div className="App">
      <header className="App-header">
        <Swapper />
        <h2 className="App-link">{setting}</h2>
        {setting === 'ARTICLES' ? (
          <>
            <Form />
            <List />
          </>
        ) : (
          <Jokes />
        )}
      </header>
    </div>
  )
}

export default connect(mapStateToProps)(App)
