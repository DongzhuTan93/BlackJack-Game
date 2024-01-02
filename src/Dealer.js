/**
 * Module for the type dealer.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

import { Deck } from './Deck.js'
import { Player } from './Player.js'
import { DrawPilesError } from './DrawPilesError.js'

/**
 * Create a class named "Dealer" which will inherit the methods from the "Person" class.
 *
 */
export class Dealer extends Player {
/**
 * Creates an class of Player.
 *
 *@param {name} name - The Players name.
 *@param {object} playingCards - An array of 52 PlayingCard objects.
 *@param { Array } allPlayers - Each participant.
 *
 */
  constructor (name, playingCards, allPlayers) {
    super(name) // the super () method calls the base class constructor to begin the initialization of the new object.
    this.allPlayers = allPlayers
    this.playingCards = playingCards
    this.throwPile = []
  }

  /**
   * The process of piaying this game.
   *
   */
  playGames () {
    // dealer give cards to players.
    this.dealCardToPlayers()

    // Dealer would plays against with every player.
    this.againsEveryPlayer()
  }

  /**
   * A function to deal cards to the players.
   */
  dealCardToPlayers () {
    for (const player of this.allPlayers) {
      const card = this.playingCards.pop()
      // The pop() method removes the last element from an array and returns that element. This method changes the length of the array, so the players can draw only one card each time.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
      player.getCard(card)
    }
  }

  /**
   * Dealer start playing with each player.
   *
   */
  againsEveryPlayer () {
    for (const player of this.allPlayers) {
      this.againstCurrentPlayer(player)
    }
  }

  /**
   * Dealer play against the current player.
   *
   *@param {name} player -The each player.
   */
  againstCurrentPlayer (player) {
    let dealerShouldPlay = false
    while (player.sumValue() < player.satisfiedValue && player.hand.length < 5) {
      this.checkThrowPile() // Dealer should check if there is only one card left in draw pile every time when he plays with another player.
      const card = this.playingCards.pop()
      player.getCard(card)
      // If the total value of the cards is less than the satisfied value and have less than 5 cards in hand then the player should get more cards.
      if (player.sumValue() > 21 || player.sumValue() === 21) {
        break
      } else if (player.hand.length === 5 && player.sumValue() <= 21) {
        break
      } else if (player.sumValue() >= player.satisfiedValue) {
        dealerShouldPlay = true
      }
    }

    if (dealerShouldPlay === true) {
      while (this.sumValue() < this.satisfiedValue && this.hand.length < 5) {
        this.checkThrowPile()
        const card = this.playingCards.pop()
        this.getCard(card)
        if (this.sumValue() > 21 || this.sumValue() === 21) {
          break
        } else if (this.hand.length === 5 && this.sumValue() <= 21) {
          break
        } else if (this.sumValue() >= this.satisfiedValue) {
          break
        }
      }
    }

    const value1 = player.sumValue()
    const value2 = this.sumValue()
    this.showValue(value1, value2, player)
  }

  /**
   * Dealer compare the cards value with current player and show game results.
   *
   * @param {number} value1 -The value of the current player.
   * @param {number} value2 -The value of the dealer.
   * @param {number} player -The current player.
   */
  showValue (value1, value2, player) {
    if (value1 > value2 && value1 < 21) {
      console.log(player.toString())
      console.log(this.toString())
      console.log(`${player.name}  wins!`)
      console.log()
    } else if (value2 > value1 && value2 < 21) {
      console.log(player.toString())
      console.log(this.toString())
      console.log(`${this.name} wins!`)
      console.log()
    } else if (value1 === value2) {
      console.log(player.toString())
      console.log(this.toString())
      console.log(`${this.name} wins!`)
      console.log()
    } else if (value1 > 21) {
      console.log(player.toString() + ' ' + 'BUSTED!')
      console.log(this.toString())
      console.log(`${this.name} wins!`)
      console.log()
    } else if (value2 > 21) {
      console.log(player.toString())
      console.log(this.toString() + ' ' + 'BUSTED!')
      console.log(`${player.name} wins!`)
      console.log()
    } else if (value1 === 21) {
      console.log(player.toString())
      console.log(this.toString())
      console.log(`${player.name} wins!`)
      console.log()
    } else if (value2 === 21) {
      console.log(player.toString())
      console.log(this.toString())
      console.log(`${this.name} wins!`)
      console.log()
    }
    // Inspiration found from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // Copy the cards to the discard pile and let the player and dealer's hands be empty.
    this.throwPile = this.throwPile.concat(player.hand)
    this.throwPile = this.throwPile.concat(this.hand)

    player.hand = []
    this.hand = []
  }

  /**
   * Dealer will get the cards from discard pile when there's only one card left on the dealers hand.
   *
   */
  checkThrowPile () {
    if (this.playingCards.length === 1) {
      this.playingCards = this.playingCards.concat(this.throwPile)
      this.throwPile = []
    }
    Deck.shuffle(this.playingCards) // Use existing methods ‘Deck.shuffle’ to shuffle the cards in draw pile after the cards have been moving from throw pile.
    if (this.playingCards.length < 1) {
      throw new DrawPilesError('Too few cards in the draw pile')
    }
  }
}
