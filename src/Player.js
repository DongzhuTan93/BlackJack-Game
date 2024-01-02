/**
 * Module for the type participants.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 *
 */

/**
 *
 * @class Player
 */
export class Player {
/**
 * Creates an class of Player.
 *
 * @param {Array} name The Players name.
 */
  constructor (name) {
    this.name = name
    this.hand = []
    // Inspiration found from "Getting a random integer between two values"
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    // "The maximum is exclusive and the minimum is inclusive."
    this.satisfiedValue = Math.floor(Math.random() * (18 - 15 + 1) + 15)
  }

  /**
   * A function for dealer to get cards.
   *
   * @param {Array} card An array of 52 PlayingCard objects.
   */
  getCard (card) {
    this.hand.push(card)
  }

  /**
   * A function to calculate the total value of the cards in player’s hands.
   *
   * @returns {number} -The sum value of the card value in the players hand.
   */
  sumValue () {
    let sumValue = 0
    // The total value of the cards when there's not aces in players/dealers hand.
    let valueWithoutAces = 0
    for (let i = 0; i < this.hand.length; i++) {
      if (this.hand[i].rank !== 1) {
        valueWithoutAces += this.hand[i].rank
      }
    }

    for (let i = 0; i < this.hand.length; i++) {
      let aceCountedAs14 = false
      if (this.hand[i].rank === 1) {
        if (valueWithoutAces + 14 <= 21 && aceCountedAs14 === false) {
          sumValue += 14
          aceCountedAs14 = true
        } else {
          sumValue += 1
        }
      } else {
        sumValue += this.hand[i].rank
      }
    }
    return sumValue
  }

  /**
   * Returns a string representing the result of the comparison.
   *
   * @returns {string} - The string representing the result of the comparison.
   */
  toString () {
    if (this.hand.length === 0) {
      return this.name + ': -'
    } else {
      return this.name + ': ' + `${this.hand.join(' ')} (${this.sumValue()})`
    }
  }
}
