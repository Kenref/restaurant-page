import "./css/contact-style.css"
import restaurant from "./images/restaurant-front.jpeg"


function switchToContact() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const textPicContainer = document.createElement("div")
    textPicContainer.classList.add("text-pic-container")

    const title = document.createElement("h3");
    title.textContent = "Where to find us";
    title.classList.add("title");
    contactContainer.appendChild(title);

    let frontPicture = new Image
    frontPicture.src = restaurant
    frontPicture.classList.add("image")
    textPicContainer.appendChild(frontPicture)

    const contactText = document.createElement("p")
    contactText.classList.add("contact-text")
    contactText.textContent = "We are located in the middle of some forest"
    textPicContainer.appendChild(contactText)

    contactContainer.appendChild(textPicContainer)

    return contactContainer
}


export { switchToContact }