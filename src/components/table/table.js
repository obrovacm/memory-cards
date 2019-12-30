import React, { Component } from "react"

import CardObj from "./card-object"
import Card from "../card/card"
import styles from "./table.module.scss"

export default class table extends Component {
  //konstruktorom pokreces funkciju samo jednom, ne na svaki update/render
  constructor(props) {
    super(props)
    this.state = {
      cards: this.createCardState(),
    }
  }

  createCardState = () => {
    const cards = this.props.data.cardFaces.edges
    const shuffledArr = this.randomPositions(cards.length * 2)
    // creating an array with total number of needed cards (they go in pairs)
    const stateCards = new Array(cards.length * 2)

    for (let i = 0; i < shuffledArr.length / 2; i++) {
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
    const { cards } = this.state
    // console.log("cards", cards)

    //activating current card
    const card1 = cards[index]
    cards[index].activate()
    //checking for already active cards
    const card2 = cards.find(
      card => card.active === true && card.position !== index
    )

    console.log("aktivna:", card1)
    console.log("druga aktivna:", card2)
    if (card2) {
      //prebrzo zatvara novu kartu, treba da saceka pola sekunde
      cards[index].active = false
      cards[card2.position].active = false
      if (card1.name === card2.name) {
        cards[index].matched = true
        cards[card2.position].matched = true
      }
    }
    // setInterval(
    //   (() => {
    //   },
    //   1000)
    // )
    this.setState({
      cards: cards,
    })
  }

  otherActive = () => this.state.cards.find(card => card.active === true)

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
    const cards = this.renderCards()
    // console.log("state:", this.state)
    return <div className={styles.table}>{cards}</div>
  }
}
