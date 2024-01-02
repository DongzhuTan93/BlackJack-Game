/**
 * Module for the type of en error when there is too few cards in the draw pile.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

/**
 * Represents a error.
 *
 * @class DrawPiles Error.
 */
export class DrawPilesError extends Error {
/**
 * Represents an error message.
 *
 * @param {string} message -The error message.
 */
  constructor (message) {
    super(message)
    this.name = 'DrawPilesError'
  }
}
