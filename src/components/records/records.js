import React, { Component } from "react"

import Timer from "./timer"
import styles from "./records.module.scss"

export default class Records extends Component {
  state = {
    highScores: [999, 999, 999],
    currentScore: undefined,
  }

  // local storage writing is done here as opposed in 'componentDidMount' in order to prevent infinite loop
  getSolvedTime = time => {
    const { highScores } = this.state
    let newLocalHighScores
    const localHighScores = localStorage.getItem("localHighScores")
    // if local storage exists, add current score if it's fast enough
    if (localHighScores) {
      const localHighScoresArr = JSON.parse(localHighScores)
      // always add currentScore to localStorage array, sort it, and then cut first 3
      localHighScoresArr.push(time)
      // less seconds - higher score
      localHighScoresArr.sort((a, b) => a - b)
      newLocalHighScores = localHighScoresArr.splice(0, 3)

      // else create new localHighScores with currentScore at first place
    } else {
      newLocalHighScores = [...highScores]
      newLocalHighScores[0] = time
    }
    // create new local storage high scores
    localStorage.setItem("localHighScores", JSON.stringify(newLocalHighScores))
    // and change component state accordingly
    this.setState({
      highScore: [...newLocalHighScores],
      currentScore: time,
    })
  }

  render() {
    const { highScores, currentScore } = this.state
    let localHighScores
    // this prevents deploy errors on Netlify, because "localStorage" is not available during server side rendering.
    if (typeof window !== "undefined") {
      localHighScores = localStorage.getItem("localHighScores")
    }
    // if there's no local storage, use default state
    const currentHighScores = localHighScores
      ? JSON.parse(localHighScores)
      : highScores

    const renderedTime =
      currentScore === undefined ? (
        <Timer data={this.props} getSolvedTime={this.getSolvedTime} />
      ) : (
        currentScore
      )

    return (
      <div className={styles.records}>
        <div className={styles.timer}>
          Timer: <b>{renderedTime}</b> seconds
        </div>
        <div className={styles.highScore}>
          <p>High scores:</p>
          <ol>
            <li>{currentHighScores[0]} sec</li>
            <li>{currentHighScores[1]} sec</li>
            <li>{currentHighScores[2]} sec</li>
          </ol>
        </div>
      </div>
    )
  }
}
