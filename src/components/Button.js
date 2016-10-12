import React, { PropTypes, Component } from 'react'

export default class Button extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    fn: PropTypes.func.isRequired
  }

  render() {
    const {fn, counter} = this.props
    return (
      <button
        onClick={fn}
        style={{
          color: '#fff',
          textShadow: '0 0 1px #000',
          width: 20 + 10*counter/10,
          height:20 + 10*counter/10,
          background: `rgb(${counter+30}, ${150 - counter}, ${counter*2})`,
        }}
      >{counter}</button>
    )
  }
}
