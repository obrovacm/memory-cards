import React from "react"
import Img from "gatsby-image"

import styles from "./card.module.scss"
import back from "../../images/card-back.png"

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
        {console.log("card props", props)}
        <Img
          fluid={props.face.node.childImageSharp.fluid}
          alt={props.face.node.name}
        />
      </div>
      <div className={styles.back}>
        <img src={back} alt="back img" />
      </div>
    </div>
  )
}
export default Card
