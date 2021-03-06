import React from "react"
import Img from "gatsby-image"

import styles from "./card.module.scss"
import back from "../../images/card-back.png"

const Card = props => {
  const { node, activate } = props
  const cardClass =
    styles.card +
    " " +
    (node.active ? styles.active : "") +
    " " +
    (node.matched ? styles.matched : "")
  return (
    <div
      className={cardClass}
      onClick={() => activate()}
      onKeyDown={() => activate()}
      role="menuitem"
      tabIndex="0"
    >
      <div className={styles.face}>
        <Img fluid={node.cardImgFluid} alt={node.name} />
      </div>
      <div className={styles.back}>
        <img src={back} alt="back img" />
      </div>
    </div>
  )
}
export default Card
