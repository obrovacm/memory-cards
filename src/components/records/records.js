import React, { Component } from "react"

import Timer from "./timer"
import styles from "./records.module.scss"

export default class Records extends Component {
  state = {
    highScores: {
      first: 0,
      second: 0,
      third: 0,
    },
    currentScore: undefined,
  }

  getSolvedTime = time => {
    this.setState({
      currentScore: time,
    })
  }

  // setter
  // localStorage.setItem('myData', data);
  // // getter
  // localStorage.getItem('myData');
  // // remove
  // localStorage.removeItem('myData');
  // // remove all
  // localStorage.clear();
  componentDidUpdate() {
    const { highScores, currentScore } = this.state
    // if current score exists, it means that the puzzle is solved
    if (currentScore) {
      const localHighScores = localStorage.getItem("localHighScores")

      if (localHighScores) {
        // if local storage exists, add current score if it's fast enough
        const objLocalHighScores = JSON.parse(localHighScores)
        if (currentScore < objLocalHighScores.first) {
          objLocalHighScores.first = currentScore
        } else if (
          currentScore < objLocalHighScores.second ||
          objLocalHighScores.second === 0
        ) {
          objLocalHighScores.second = currentScore
        } else if (
          currentScore < objLocalHighScores.third ||
          objLocalHighScores.third === 0
        ) {
          objLocalHighScores.third = currentScore
        }

        localStorage.setItem(
          "localHighScores",
          JSON.stringify(objLocalHighScores)
        )
      } else {
        // create new localHighScores with current at first place
        highScores.first = currentScore
        localStorage.setItem("localHighScores", JSON.stringify(highScores))
      }
    }
  }

  render() {
    const { highScores, currentScore } = this.state
    const localHighScores = localStorage.getItem("localHighScores")
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
        <div className={styles.timer}>Timer: {renderedTime}</div>
        <div className={styles.highScore}>
          <p>High scores:</p>
          <ol>
            <li>{currentHighScores.first} sec</li>
            <li>{currentHighScores.second} sec</li>
            <li>{currentHighScores.third} sec</li>
          </ol>
        </div>
      </div>
    )
  }
}
