import React from "react"
// import Img from "gatsby-image"

import styles from "./card.module.scss"
import backSVG from "../../images/card-back.png"

const Card = props => (
  <div className={styles.card}>
    <div className={styles.face}>
      {/* <Img fluid={props.face.childImageSharp.fluid} alt={props.face.name} /> */}
    </div>
    <div className={styles.back}>
      <img src={backSVG} alt="back img" />
    </div>
  </div>
)
export default Card
