import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getJoke } from '../actions'

const mapStateToProps = ({ joke }) => {
  return { joke }
}

const JokesWrapper = styled.div`
  .joke {
    margin: 0 auto;
    max-width: 600px;
    min-height: 75px;
  }
  .btn {
    background: transparent;
    border: 2px solid #09d3ac;
    font-weight: bold;
    color: #09d3ac;
    font-family: inherit;
    padding: 7.5px 15px;
    border-radius: 2px;
    margin-top: 45px;
    line-height: 1;
    cursor: pointer;
  }
`

const Jokes = ({ joke, getJoke }) => {
  useEffect(() => {
    getJoke()
  }, [getJoke])
  return (
    <JokesWrapper>
      <p className="joke">{joke.joke}</p>
      <div>
        <button className="btn" onClick={() => getJoke()}>
          Another?
        </button>
      </div>
    </JokesWrapper>
  )
}

Jokes.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
}

export default connect(
  mapStateToProps,
  { getJoke },
)(Jokes)
