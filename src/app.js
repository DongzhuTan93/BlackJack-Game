/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 * @version 1.1.0
 */

import { Deck } from './Deck.js'
import { Dealer } from './Dealer.js'
import { Player } from './Player.js'
import { DrawPilesError } from './DrawPilesError.js'
import { PlayersError } from './PlayersError.js'

try {
  // Determine the number of players.
  let totalPlayers = process.argv[2]

  // The total players defaults to 3 if the numbers of the players in not entered.
  if (process.argv[2]) {
    totalPlayers = Number(process.argv[2])
  } else {
    totalPlayers = 3
  }

  // The number of the players need to be a valid numbers.
  if (typeof totalPlayers !== 'number' || isNaN(totalPlayers)) {
    throw new PlayersError('The number of the players need to be a valid numbers.')
  }

  // The number of the players can only contain an integer.
  if (!Number.isInteger(totalPlayers)) {
    throw new PlayersError('The number of the players can only contain an integer.')
  }

  // The number of players should between 1 and 7, as well as 20 and 50.
  if (totalPlayers !== 50 && totalPlayers !== 20) {
    if (totalPlayers > 7) {
      throw new PlayersError('The number of the players is too much.')
    } else if (totalPlayers < 1) {
      throw new PlayersError('The number of players must be at least one.')
    }
  }

  // Create 52 playing cards and...
  const playingCards = Deck.create()
  // console.log(playingCards.join(', '), '\n')

  // ...shuffle them.
  Deck.shuffle(playingCards)
  // console.log(playingCards.join(', '), '\n')

  // Creats the players.
  const allPlayers = []
  for (let i = 1; i <= totalPlayers; i++) {
    const player = new Player('Player #' + i)
    allPlayers.push(player)
  }

  // Put the cards and players into the dealers class, and the game is controlled by the dealer.
  const dealer = new Dealer('Dealer', playingCards, allPlayers)
  dealer.playGames()

  // Set status code to 0 when no error occurred when the application was executed.
  process.exitCode = 0
  console.log('There is no error occurred when the application was executed.')
} catch (e) {
  console.error(e.message)
  if (e instanceof DrawPilesError) {
    // Set status code to 27 when the cards run out in the draw pile.
    process.exitCode = 27
  } else if (e instanceof PlayersError) {
    // Set status code to 26 when the number of the players is wrong or the number of the players is not an integer.
    process.exitCode = 26
  } else {
    // Status code default to 1 if there are other types of unknown errors.
    process.exitCode = 1
  }
}
