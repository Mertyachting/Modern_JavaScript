
//Old way of writing functions
function printMyName(name) {
    console.log(name);
}

//using '=>' function
//this valid for function with one parameter 
//this is valid for function which only return something in the body no other code
const name = name => console.log(name);

//'=>' with more paramters 
const person = (name, surname, age) => console.log(name + " " + surname +" "+ age);

//'=>' with longer body and more parameters
const hobbys = (name, age) => {
    let hobbys;
    if(age < 20){
        hobbys = ['videogames', 'music', 'hanging out'];
    }
    else{
        hobbys = 'programming'
    }
    console.log(name, age, hobbys);
}

printMyName('Alfred');

name('Mert');

person('Mert', 'Sevindik', '24');

hobbys('Mert', 24);
