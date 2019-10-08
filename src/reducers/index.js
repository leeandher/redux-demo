import {
  ADD_ARTICLE,
  FOUND_FORBIDDEN_WORD,
  FACTS_LOADED,
  SWAP,
} from '../constants/action-types'

const initialState = {
  articles: [],
  joke: {},
  setting: 'JOKE',
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
    case SWAP:
      const swapTo = action.payload.setting
      return { ...state, setting: swapTo }
    case FACTS_LOADED:
      return { ...state, joke: action.payload }
    default:
      return state
  }
}

export default rootReducer
