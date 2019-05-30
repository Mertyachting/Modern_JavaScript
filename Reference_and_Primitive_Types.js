//primitive type
const number = 1;
//copies the value from number
const num2 = number;

const person = {name: 'Mert'};

const secondperson = person;

//This will change the name in both secondperson and person, because secondperson is only a copy of person
person.name = 'Yachting'

//get a the values stored instead of copied
const secondhuman ={
    ...person
}

//this will not change the value in secondhumon!
person.name = 'Whatever'