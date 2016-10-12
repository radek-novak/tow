import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Button from '../components/Button'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = ({todos, actions, counter}) => (
  <div>
    <Button
      fn={actions.increment}
      counter={counter}
    />
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} counter={counter}/>
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
