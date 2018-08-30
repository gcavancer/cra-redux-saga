import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>
      <button onClick={() => props.changePage()}>
        Go to About
      </button>
    </p>
  </div>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about')
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(Home)
