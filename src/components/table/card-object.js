class CardObj {
  constructor(cardNode, position) {
    this.name = cardNode.node.name
    this.cardImgFluid = cardNode.node.childImageSharp.fluid
    //pozicija mi ni ne treba
    this.position = position
    this.active = false
    this.matched = false
  }

  activate() {
    this.active = true
    // setTimeout(function() {
    //   this.active = false
    // }, 1500)
  }
  deActivate() {
    this.active = false
  }
  match() {
    this.matched = true
  }
}

export default CardObj
