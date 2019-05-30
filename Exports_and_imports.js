//return name
const name = name => name; 

//using export as default 
//default exports can have any name at import
export default name;

//import default
import name from './Exports_and_imports' //the import doesn't make sense in the file, because the function is already in the file. Just for demo.

//you can import with customname
import nm from './Exports_and_imports'


//export specific 
export const mulitply = number => number * 2;
export const pc = brand => {
    if (pc == 'apple'){
        console.log("you have a Mac")
    }
    else (
        console.log("you have a PC")
    )
}

//import specific imports
import {mulitply} from './Exports_and_imports'
//more than one specific imports
import {mulitply, pc} from './Exports_and_imports'
//you can also give names in specifix imports 
import {mulitply as mlt, pc as p} from './Exports_and_imports'


