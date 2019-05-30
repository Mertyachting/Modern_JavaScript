//JavaScript ES7 / babel needed

class Animal{
//new way of typing the constructor. just a variable with the assigned value
    type = 'cat';
//write methods like functions with '=>' 
    printType = () => console.log(this.type);
}

class Race extends Animals{
    race = 'british short hair';
    type = 'cat';

    printRace = () => console.log(this.race);

    printTypeAndRace = () => console.log(this.type + this.race);
}

const cat = new Race();

cat.printTypeAndRace();