import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h4>About page</h4>
    <p>
      In order to build this game, I first used{" "}
      <a href="https://inkscape.org/" target="_blank" rel="noopener noreferrer">
        Inkscape
      </a>{" "}
      to bit-trace low quality images I found on the internet and color them in
      up to 4 colors. After I managed to align all cards in a desired way, so it
      looks alright on all screens, I started working on card-flip animation.
    </p>
    <p>
      Next challenge was to generate pairs of cards in a random order. When same
      cards are clicked on the same turn, they should remain flipped and go
      slightly transparent so they don't attract to much attention. This was
      accomplished by giving all cards their own active and matched property.
      After every turn (or after every other card was opened), a function would
      check if these cards have the same name. Different function would wait a
      second before it removed "opened" class of of the cards (or added
      "matched" class), so that CSS would close them again.
    </p>
    <p>
      The moment all cards have their matched status set to "true", the puzzle
      is solved and the game is finished. The timer that was set of with the
      initial click is stopped and it's value is added to the scoring list. Top
      3 scores are saved to your local storage and displayed under the deck.
    </p>
    <Link to="/" className="nav-link">
      <h5>
        Go back to the <i>Start</i> page
      </h5>
    </Link>
  </Layout>
)

export default About
