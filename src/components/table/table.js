import React, { Component } from "react";
import Deck from "../deck/deck";
import Card from "../card/card";
import styles from "./table.module.scss";

export default class table extends Component {
  state = {
    cards: []
  };

  refreshCardState = () => {
    const deck = Deck;
  };

  renderCards = () => {
    // uvedi Deck
    return <Card>card</Card>;
  };

  render() {
    return (
      <div className={styles.table}>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    );
  }
}
