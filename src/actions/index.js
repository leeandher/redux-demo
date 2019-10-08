import {
  ADD_ARTICLE,
  FOUND_FORBIDDEN_WORD,
  FACTS_LOADED,
  SWAP,
} from '../constants/action-types'

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload,
  }
}

export function swap(payload) {
  return {
    type: SWAP,
    payload,
  }
}

export function foundForbiddenWord(payload) {
  return {
    type: FOUND_FORBIDDEN_WORD,
    payload,
  }
}

export function getJoke() {
  return dispatch => {
    fetch('https://icanhazdadjoke.com/', {
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(payload => dispatch({ type: FACTS_LOADED, payload }))
  }
}
