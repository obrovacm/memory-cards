class CardObj {
  constructor(cardNode, position) {
    this.name = cardNode.node.name
    this.cardImgFluid = cardNode.node.childImageSharp.fluid
    this.position = position
    this.active = false
    this.matched = false
  }

  activate() {
    this.active = true
    // this.active = true
    // setTimeout(function() {
    //   this.active = false
    // }, 1500)
  } // PRIMENI OVE FUNKCIJE UMESTO =TRUE
}

export default CardObj
