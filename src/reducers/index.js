import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  articles: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      const outState = { ...state }
      outState.articles.push(action.payload)
      return outState
    default:
      return state
  }
}

export default rootReducer
