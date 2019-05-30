//classes with Capital letter
//class includes types, methods, constructor
class Animal{
    constructor(){
        this.animaltype = 'cat';
    }

    printAnimal(){
        console.log(this.animaltype);
    }
}


//extends inherits all from chosen class (Animal)
class Cat extends Animal {
    constructor(){
        //call super for the parent constructor (Animal)
        super();
        this.race = 'british short hair';
    }

    printRace(){
        console.log(this.race);
    }

    printAnimalAndRace(){
        console.log('animal: '+this.animaltype+" race: "+this.race);
    }
}

//create a new instance to use functions from the classes
const cat = new Cat();
const animal = new Animal();

//call the functions from the class
animal.printAnimal();
cat.printRace();
cat.printAnimalAndRace();
