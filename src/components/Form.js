import React, { useState } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { addArticle } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
  }
}

const FormWrapper = styled.form`
  min-width: 250px;
  fieldset {
    border: 0;
  }
  label {
    display: block;
    padding: 7px;
  }
  input {
    border: 0;
    font-family: inherit;
    background: transparent;
    border: 2px solid #09d3ac;
    padding: 5px 10px;
    color: white;
  }
  button {
    display: block;
    border: 0;
    text-decoration: underline;
    color: #09d3ac;
    background: 0;
    width: 100%;
    padding: 0.5rem;
    cursor: pointer;
  }
  input:required {
    box-shadow: none;
  }
  input:invalid {
    box-shadow: none;
  }
`

const Form = ({ addArticle }) => {
  const [title, setTitle] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    const id = uuidv4()
    addArticle({ title, id })
    setTitle('')
  }
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="title">Enter a title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          required
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </fieldset>
    </FormWrapper>
  )
}

Form.propTypes = {
  addArticle: PropTypes.func,
}

export default connect(
  null,
  mapDispatchToProps,
)(Form)
