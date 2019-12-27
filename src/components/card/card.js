import React from "react"
// import Img from "gatsby-image"

import styles from "./card.module.scss"
import backSVG from "../../images/card-back.png"

const Card = props => {
  // const { class, flip, face } = props
  return (
    <div
      className={styles.card + " " + props.class}
      // onClick={() => this.openLightbox(index)}
      // onKeyDown={() => this.openLightbox(index)}
      // role="button"
      // tabIndex="0"
    >
      <div className={styles.face}>
        {/* <Img fluid={props.face.childImageSharp.fluid} alt={props.face.name} /> */}
      </div>
      <div className={styles.back}>
        <img src={backSVG} alt="back img" />
      </div>
    </div>
  )
}
export default Card
