const Deck = []
class Cardlet {
  constructor(name) {
    this.name = name
    this.flipped = false
    this.matched = false
    this.id = ++ID
    Deck.push(this)
  }
  static ID = 0

  flip = () => {
    this.flipped = !this.flipped
  }
  match = () => {
    this.matched = !this.matched
  }
}

export default Deck
