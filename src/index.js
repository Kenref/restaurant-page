import { header, menuBar, mainText } from "./home.js"
import { switchToMenu } from "./menu.js";
import { switchToContact } from "./contact.js";

const content = document.getElementById("content")

content.appendChild(header()).appendChild(menuBar());
const home = content.appendChild(mainText())
const menu = content.appendChild(switchToMenu());
const contact = content.appendChild(switchToContact())


const menuBarButtons = document.querySelectorAll(".menu-bar-item");
function switchTabs() {
    menuBarButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "Home") {
            menu.style.display = "none"
            contact.style.display = "none"
            home.style.display ="block"
        }
        else if (button.textContent === "Menu") {
            home.style.display = "none"
            contact.style.display = "none"
            menu.style.display = "block"
        }
        else if (button.textContent === "Contact") {
            home.style.display = "none"
            menu.style.display = "none"
            contact.style.display = "block"
        } 
        
    })
})
}

switchTabs()


//remove home
// content.removeChild(home)

// content.appendChild(switchToMenu())