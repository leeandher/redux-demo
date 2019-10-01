import { ADD_ARTICLE, FOUND_FORBIDDEN_WORD } from '../constants/action-types'

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload,
  }
}

export function foundForbiddenWord(payload) {
  return {
    type: FOUND_FORBIDDEN_WORD,
    payload,
  }
}
