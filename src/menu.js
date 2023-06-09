import orc from "./images/orc-beer.webp"
import dwarf from "./images/dwarf-beer.webp"
import hobbit from "./images/hobbit-beer.webp"
import "./css/menu-style.css"

function switchToMenu() {
    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")

    const title = document.createElement("h3")
    title.textContent = "Discover our Beers"
    title.classList.add("title")
    menuContainer.appendChild(title)



    const dwarfPicture = new Image()
    const orcPicture = new Image()
    const hobbitPicture = new Image()

    const dwarfContainer = document.createElement("div")
    dwarfContainer.classList.add("item-container")
    dwarfPicture.src = dwarf
    dwarfPicture.classList.add("menu-picture")
    dwarfContainer.appendChild(dwarfPicture)

    const dwarfText = document.createElement("p")
    dwarfText.textContent = "Our finest Dwarvern Beer";
    dwarfText.classList.add("menu-text")
    dwarfContainer.appendChild(dwarfText)



    const orcContainer = document.createElement("div");
	orcContainer.classList.add("item-container");
	orcPicture.src = orc;
	orcPicture.classList.add("menu-picture");
	orcContainer.appendChild(orcPicture);

	const orcText = document.createElement("p");
	orcText.textContent = "Our finest Orcish Beer";
	orcText.classList.add("menu-text");
	orcContainer.appendChild(orcText);


    const hobbitContainer = document.createElement("div");
	hobbitContainer.classList.add("item-container");
	hobbitPicture.src = hobbit;
	hobbitPicture.classList.add("menu-picture");
	hobbitContainer.appendChild(hobbitPicture);

	const hobbitText = document.createElement("p");
	hobbitText.textContent = "Our finest Hobbish(??) Beer";
	hobbitText.classList.add("menu-text");
	hobbitContainer.appendChild(hobbitText);





    menuContainer.appendChild(dwarfContainer)
    menuContainer.appendChild(orcContainer)
    menuContainer.appendChild(hobbitContainer)
    return menuContainer
}


export { switchToMenu }