import React, { Component } from "react"
// import Deck from "../deck/deck"
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
    for (let i = 0; i < 24; i++) {
      cards.push(<Card back={this.props.data.backPattern} key={i} />)
    }
    // uvedi Deck
    return cards
  }

  render() {
    const cards = this.renderCards()
    console.log(this.props, "this.props")
    return (
      <div className={styles.table}>
        {/* <Card back={this.props.data.backPattern} /> */}
        {cards}
      </div>
    )
  }
}
