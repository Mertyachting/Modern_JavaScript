//spread the old values into a new array/object
let games = ['destiny', 'pokemon'];

let newgames = [...games, 'zelda'];

//use it on objects too

let gamerating = {'destiny': 8.7}

let newgamerating = {...gamerating, 'pokemon': 9.7}

console.log(newgames);
console.log(newgamerating);

//rest for multiple args in functions/methods

const goodgame = (...args) => console.log(args.filter(el => el === 'Destiny'));

goodgame('Pokemon', 'Zelda', 'Destiny')