import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import { forbiddenWordsMiddleware } from '../middleware'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose(applyMiddleware(forbiddenWordsMiddleware, thunk)),
)

export default store
