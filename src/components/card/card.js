import styles from "./card.module.scss";

import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className="face"></div>
        <div className="back"></div>
      </div>
    );
  }
}
