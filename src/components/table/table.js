import React, { Component } from "react"
// import Deck from "./deck"
import Card from "../card/card"
import styles from "./table.module.scss"

export default class table extends Component {
  state = {
    cards: [],
  }

  // refreshCardState = () => {
  //   const deck = Deck
  // }

  renderCards = () => {
    const cards = []
    console.log("card faces:", this.props.data.cardFaces)

    for (let i = 0; i < 24; i++) {
      let j = i
      if (i > 11) {
        j = i - 12
      }
      cards.push(
        <Card
          face={this.props.data.cardFaces.edges[j]}
          flip={"funkcija"}
          key={i}
          number={i}
        />
      )
    }
    // uvedi Deck
    return cards
  }

  render() {
    const cards = this.renderCards()
    return <div className={styles.table}>{cards}</div>
  }
}
