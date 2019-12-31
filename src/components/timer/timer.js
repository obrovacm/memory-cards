import React from "react"

import styles from "./timer.module.scss"

export default function Timer() {
  return (
    <div className={styles.timerFrame}>
      <div className={styles.timer}>timer</div>
      <div className={styles.highScore}>
        <ul>
          <li>1.</li>
          <li>2.</li>
          <li>3.</li>
        </ul>
      </div>
    </div>
  )
}
