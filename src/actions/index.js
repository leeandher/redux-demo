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

export async function getFacts() {
  const res = await fetch('https://cat-fact.herokuapp.com/facts', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
  const payload = await res.json()
  return {
    type: FACTS_LOADED,
    payload,
  }
}
