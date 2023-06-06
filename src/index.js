import User, { printName, printAge, bareBones } from "./template.js"
import heroImage from "./front.jpeg";


const user = new User("bob", 11)
console.log(user)

printName(user)
printAge(user)
bareBones()



//figure out how to use document.query selector with modules