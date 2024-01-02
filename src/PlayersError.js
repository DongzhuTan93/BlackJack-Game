/**
 * Module for the type of error when there is not correct number of the players.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

/**
 * Represents a error.
 *
 * @class The numbers of the players error.
 */
export class PlayersError extends Error {
  /**
   * Represents an error message.
   *
   * @param {string} message -The error message.
   */
  constructor (message) {
    super(message)
    this.name = 'PlayersError'
  }
}
