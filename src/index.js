import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import store from './store'
import { addArticle } from './actions'

import './index.css'

window.store = store
window.addArticle = addArticle

ReactDOM.render(<App />, document.getElementById('root'))
