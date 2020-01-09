import React, { Component } from "react"

export default class Timer extends Component {
  state = { seconds: 0 }

  tick() {
    const { start, solved } = this.props.data
    if (start === true && solved === false) {
      this.setState(state => ({
        seconds: state.seconds + 0.1,
      }))
    }
    if (solved === true) {
      const currentScore = this.state.seconds.toFixed(1)
      // sending score to Records component
      this.props.getSolvedTime(currentScore)
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <>{this.state.seconds.toFixed(1)}</>
  }
}
