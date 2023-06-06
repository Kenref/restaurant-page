class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

function printName(user) {
    console.log(`User's name is ${user.name}`)
}

function printAge(user) {
    console.log(`User is ${user.age} years old`)
}

function bareBones() {
    const content = document.getElementById("content")
    const title = document.createElement("h1")
    title.textContent = "Welcome to the tantalising tavern"
    content.appendChild(title)

    
    const heroImage = document.createElement("img")
    heroImage.src = "src/front.jpeg";
    heroImage.alt = "Frontal shot of the tavern"
    content.appendChild(heroImage)


}






// tumultuous tavern
// tantalising 
// tasteless a drink name






export default User
export { printName, printAge, bareBones }



// <h1>Very nice restaurant</h1>
// <img src="image.jpg" alt="Photo of the restaurant">
// <p>Aliquip occaecat duis occaecat minim reprehenderit voluptate labore tempor magna eiusmod incididunt.</p>