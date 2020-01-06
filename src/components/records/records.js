import React, { Component } from "react"

import Timer from "./timer"
import styles from "./records.module.scss"

export default class Records extends Component {
  state = {
    highScores: [999, 999, 999],
    currentScore: undefined,
  }

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
    const localHighScores = localStorage.getItem("localHighScores")
    // if there's no local storage, use default state
    const currentHighScores = localHighScores
      ? JSON.parse(localHighScores)
      : highScores

    console.log("currentHighScores", currentHighScores)
    console.log("localHighScores", JSON.parse(localHighScores))

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
