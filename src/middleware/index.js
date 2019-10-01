import { ADD_ARTICLE, FOUND_FORBIDDEN_WORD } from '../constants/action-types'

const forbiddenWords = ['spam', 'money']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      switch (action.type) {
        case ADD_ARTICLE:
          const { title } = action.payload
          const isForbidden = forbiddenWords.some(word => title.includes(word))
          if (isForbidden) return dispatch({ type: FOUND_FORBIDDEN_WORD })
          return next(action)
        default:
          return next(action)
      }
    }
  }
}
