import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { swap } from '../actions'
import logo from '../assets/logo.svg'

const mapDispatchToProps = dispatch => {
  return {
    swap: setting => dispatch(swap(setting)),
  }
}

const mapStateToProps = ({ setting }) => {
  return { setting }
}

const SwapperWrapper = styled.div`
  button {
    cursor: pointer;
  }
`

const Swapper = ({ setting, swap }) => {
  const clickSwap = e => {
    e.preventDefault()
    const isArticle = setting === 'ARTICLES'
    return isArticle
      ? swap({ setting: 'FACTS' })
      : swap({ setting: 'ARTICLES' })
  }
  return (
    <SwapperWrapper>
      <button type="button" onClick={clickSwap}>
        <img src={logo} className="App-logo" alt="logo" />
      </button>
    </SwapperWrapper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Swapper)
