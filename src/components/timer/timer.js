import React, { Component } from "react"

import styles from "./timer.module.scss"

export default class Timer extends Component {
  state = {
    time: 0,
  }

  render() {
    // const { start, solved } = this.props
    const { time } = this.state

    return (
      <div className={styles.timerFrame}>
        <div className={styles.timer}>Timer: {time}</div>
        <div className={styles.highScore}>
          <p>High scores:</p>
          <ol>
            <li>12 sec</li>
            <li>13 sec</li>
            <li>24 sec</li>
          </ol>
        </div>
      </div>
    )
  }
}
