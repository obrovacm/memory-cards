import React, { Component } from "react"

import CardObj from "./card-object"
import Card from "../card/card"
import Records from "../records/records"

import styles from "./table.module.scss"

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.createCardState(),
      start: false,
      solved: false,
    }
  }

  createCardState = () => {
    const cards = this.props.data.cardFaces.edges
    const shuffledArr = this.randomPositions(cards.length * 2)
    // creating an array with total number of needed cards (they go in pairs, hence x2)
    const stateCards = new Array(cards.length * 2)
    //each card is inserted twice, hence condition
    for (let i = 0; i < cards.length; i++) {
      let randomPosition = shuffledArr[i]
      let randomPosition2 = shuffledArr[shuffledArr.length - 1 - i]
      //taking 2 random positions in order to insert a pair of pictures on each increment of i
      stateCards[randomPosition] = new CardObj(cards[i], randomPosition)
      stateCards[randomPosition2] = new CardObj(cards[i], randomPosition2)
    }
    return [...stateCards]
  }

  randomPositions = numberOfElements => {
    const deckPositions = []
    const randomPositions = []
    for (let i = 0; i < numberOfElements; i++) {
      deckPositions.push(i)
    }
    // taking out random elements from deckPositions until it's empty
    while (deckPositions.length !== 0) {
      // randomNumber is generated based on deckPositions length
      let randomNumber = Math.floor(Math.random() * deckPositions.length)
      // splice removes an element from first array and pushes it into second
      randomPositions.push(...deckPositions.splice(randomNumber, 1))
    }
    return randomPositions
  }

  activateCard = index => {
    if (!this.state.solved) {
      const { cards } = this.state
      cards[index].active = true
      this.setState({
        cards: cards,
      })
    }
    // setting timer on first click
    if (!this.state.start) {
      this.setState({
        start: true,
      })
    }
  }

  evaluateCards = () => {
    const { cards } = this.state
    const activeCards = cards.filter(card => card.active === true)
    let card1 = activeCards[0]
    let card2 = activeCards[1]
    if (activeCards.length === 2) {
      cards[card1.position].active = false
      cards[card2.position].active = false
      if (card1.name === card2.name) {
        cards[card1.position].matched = true
        cards[card2.position].matched = true
      }
      setTimeout(() => {
        this.setState({
          cards: cards,
        })
      }, 1000)
      //check if the puzzle is solved
      if (cards.every(card => card.matched)) {
        this.setState({
          solved: true,
        })
      }
    }
  }

  renderCards = () =>
    this.state.cards.map((card, i) => (
      <Card
        node={card}
        activate={() => this.activateCard(i)}
        key={i}
        number={i}
      />
    ))

  render() {
    const { start, solved } = this.state
    const solvedMessageClass =
      styles.message + " " + (solved ? styles.solved : "")
    const cards = this.renderCards()
    return (
      <>
        <div className={styles.table}>
          {cards}
          <div className={solvedMessageClass}>
            <h1>Congrats!</h1>
          </div>
        </div>
        <Records start={start} solved={solved} />
      </>
    )
  }

  componentDidUpdate() {
    this.evaluateCards()
  }
}
