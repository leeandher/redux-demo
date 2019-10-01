import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const mapStateToProps = ({ articles }) => {
  return { articles }
}

const ListWrapper = styled.div`
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

const List = ({ articles }) => (
  <ListWrapper>
    {articles.map(({ id, title }) => (
      <li className="article-item" key={id}>
        {title}
      </li>
    ))}
  </ListWrapper>
)

List.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
}

export default connect(mapStateToProps)(List)
