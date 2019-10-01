import { ADD_ARTICLE, FOUND_FORBIDDEN_WORD } from '../constants/action-types'

const initialState = {
  articles: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      }
    case FOUND_FORBIDDEN_WORD:
      alert('YOU DID AN ILLEGAL')
      return state
    default:
      return state
  }
}

export default rootReducer
