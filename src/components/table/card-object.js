class CardObj {
  constructor(cardNode, position) {
    this.name = cardNode.node.name
    this.cardImgFluid = cardNode.node.childImageSharp.fluid
    this.position = position
    this.active = false
    this.matched = false
  }
}

export default CardObj
