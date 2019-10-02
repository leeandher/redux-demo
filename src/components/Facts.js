import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getFacts } from '../actions'

const mapStateToProps = ({ facts }) => {
  return { facts }
}

const FactsWrapper = styled.div`
  .article-item {
    background: #09d3ac88;
    text-align: left;
    padding: 2.5px 7.5px;
    list-style: none;
    color: #282c34;
    font-weight: bold;
    margin-bottom: 3px;
    border-left: 4px solid #09d3ac;
  }
`

const Facts = ({ facts, getFacts }) => {
  useEffect(() => {
    getFacts()
  })
  return <FactsWrapper>{JSON.stringify(facts)}</FactsWrapper>
}

Facts.propTypes = {
  // articles: PropTypes.arrayOf(PropTypes.object),
}

export default connect(
  mapStateToProps,
  { getFacts },
)(Facts)
