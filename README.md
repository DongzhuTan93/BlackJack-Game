
## Introduktion
Detta projekt är byggt med JavaScript, Node.js och Express, och simulerar det välkända spelet blackjack. Här är några exempel på hur spelet ser ut i en spelomgång från VSC-konsolen.

#### Exempel på utfall med en spelare vid bordet

Spelaren och given förklarar sig nöjda och given vinner då given har den högsta summan.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 6♣ 7♥ 2♣ (15)
Dealer   : 9♥ Kn♠ (20)
Dealer wins!
```

Spelaren får 21 och vinner direkt.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: A♥ 10♠ A♣ 9♠ (21)
Dealer   : -
Player wins!
```

Spelaren och given är nöjda och har samma summa på handen varför given vinner.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 5♣ K♠ (18)
Dealer   : J♣ 7♥ (18)
Dealer wins!
```

Spelaren nöjd, given spricker varför spelaren vinner.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 3♦ 7♠ 5♠ (15)
Dealer   : 8♥ 6♥ J♦ (25) BUSTED!
Player wins!
```

Spelaren spricker varför given vinner direkt.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 4♣ 9♥ J♥ (24) BUSTED!
Dealer   : -
Dealer wins!
```

Spelaren drar fem kort och får en summa under 21 och vinner direkt.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 4♠ 6♦ 2♦ 2♠ 2♥ (16)
Dealer   : -
Player wins!
```

Spelaren nöjd, given drar fem kort och får en summa under 21 och vinner.

```text
❯ npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 2♥ 7♣ Kn♠ (20)
Dealer   : 2♠ 5♦ 7♦ A♠ 4♥ (19)
Dealer wins!
```

#### Exempel på utfall med tre spelare vid bordet

```text
> npm start

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js

Player #1: 2♣ 2♦ 6♥ 3♦ 6♦ (19)
Dealer: -
Player #1 wins!

Player #2: 3♣ A♣ (17)
Dealer: Q♣ 2♥ 5♠ (19)
Dealer wins!

Player #3: 4♣ A♠ (18)
Dealer: 10♦ Q♠ (22) BUSTED!
Player #3 wins!
```

#### Exempel på utfall med fem spelare vid bordet.

```text
> npm start 5

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "5"

Player #1: 2♣ 9♣ K♥ (24) BUSTED!
Dealer: -
Dealer wins!

Player #2: 3♣ 7♣ 8♣ (18)
Dealer: 10♠ 8♦ (18)
Dealer wins!

Player #3: 4♣ 10♣ A♦ (15)
Dealer: 6♠ 9♥ (15)
Dealer wins!

Player #4: 5♣ 7♠ J♥ (23) BUSTED!
Dealer: -
Dealer wins!

Player #5: 6♣ 4♦ A♠ 8♠ (19)
Dealer: 7♦ J♠ (18)
Player #5 wins!
```

#### Exempel på utfall vid felaktigt antal spelare

```text
> npm start 12

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "12"

Not a valid number of players
npm ERR! code ELIFECYCLE
npm ERR! errno 26
npm ERR! assignment-a3-twenty-one@1.0.0 start: `node src/app.js "12"`
npm ERR! Exit status 26
npm ERR!
npm ERR! Failed at the assignment-a3-twenty-one@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\...\npm-cache\_logs\<<timestamp>>-debug.log
```

#### Exempel på utfall då det inte finns tillräckligt med kort i draghögen

```text
> npm start 50

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "50"

Too few cards in the draw pile
npm ERR! code ELIFECYCLE
npm ERR! errno 27
npm ERR! assignment-a3-twenty-one@1.0.0 start: `node src/app.js "50"`
npm ERR! Exit status 27
npm ERR!
npm ERR! Failed at the assignment-a3-twenty-one@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\...\npm-cache\_logs\<<timestamp>>-debug.log
```
