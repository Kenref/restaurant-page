import orc from "./images/orc-beer.webp"
import dwarf from "./images/dwarf-beer.webp"
import hobbit from "./images/hobbit-beer.webp"
import "./css/menu-style.css"

function switchToMenu() {
    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")

    const dwarfPicture = new Image()
    const orcPicture = new Image()
    const hobbitPicture = new Image()

    const dwarfContainer = document.createElement("div")
    dwarfPicture.src = dwarf
    dwarfPicture.classList.add("dwarf-picture")
    dwarfContainer.appendChild(dwarfPicture)

    menuContainer.appendChild(dwarfContainer)
    return menuContainer
}


export { switchToMenu }