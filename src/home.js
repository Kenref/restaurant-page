import bartender from "./images/bartender.jpg"
import beer from "./images/elemental-beer.jpg"

function header() {
    const header = document.createElement("header")
    header.classList.add("header")

	const restaurantName = document.createElement("h1")
	restaurantName.classList.add("restaurant-name")
    restaurantName.textContent = "Welcome to the Tantalising Tavern"

    header.appendChild(restaurantName)

    return header
}

function menuBar() {
	const menuBar = document.createElement("nav");
	menuBar.classList.add("menu-bar");

	const home = document.createElement("a");
	home.textContent = "Home";
	home.classList.add("menu-bar-item");
	// home.setAttribute("href", "google.com")
	menuBar.appendChild(home);

	const menu = document.createElement("a");
	menu.textContent = "Menu";
	menu.classList.add("menu-bar-item");
	// menu.setAttribute("href", "google.com")
	menuBar.appendChild(menu);

	const contact = document.createElement("a");
	contact.textContent = "Contact";
	contact.classList.add("menu-bar-item");
	// contact.setAttribute("href", "google.com")
	menuBar.appendChild(contact);

	return menuBar;
}


function mainText() {
    const mainText = document.createElement("div")
    mainText.classList.add("main-text")
	const copyWithPicture = document.createElement("div")
	copyWithPicture.classList.add("copy-with-picture")
	const copyWithPicture2 = document.createElement("div")
	copyWithPicture2.classList.add("copy-with-picture-2")

    const section1 = document.createElement("p")
    section1.textContent =
		"Welcome to The Enchanted Stein, a haven for all lovers of fantasy and brews! Step into a realm where imagination flows as freely as the finest ale, and let us transport you to a world of enchantment and merriment. ";
	section1.classList.add("section-1")
	copyWithPicture.appendChild(section1)

	const bartenderPicture = new Image()
	bartenderPicture.src = bartender
	bartenderPicture.classList.add("bartender-picture")
	copyWithPicture.classList.add("copy-with-picture")
	copyWithPicture.appendChild(bartenderPicture)

	mainText.appendChild(copyWithPicture)
	


	
	const section2 = document.createElement("p")
	section2.textContent =
		"Within these virtual walls, you'll discover a gathering place like no other—a mythical beer tavern where the fantastical meets the flavorsome. Whether you're a seasoned adventurer or a curious wanderer, we invite you to embark on a journey through our virtual halls, where the ambiance is alive with the echoes of laughter and the clinking of tankards.";
	section2.classList.add("section-2")

	const myBeer = new Image()
	myBeer.src = beer
	myBeer.classList.add("beer-picture")
	copyWithPicture2.classList.add("copy-with-picture-2")
	copyWithPicture2.appendChild(myBeer)




	copyWithPicture2.appendChild(section2)

	mainText.appendChild(copyWithPicture2)


    return mainText
}




// tumultuous tavern
// tantalising 
// tasteless a drink name



export { header, menuBar, mainText }

