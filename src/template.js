import restaurantFront from "./restaurant-front.jpeg"

function header() {
    const header = document.createElement("header")
    header.classList.add("header")

    const restaurantName = document.createElement("h1")
    restaurantName.textContent = "Welcome to the Tantalising Tavern"

    header.appendChild(restaurantName)

    return header
}

function menuBar() {
	const menuBar = document.createElement("nav");
	menuBar.classList.add("menuBar");

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

function heroImage() {
    const heroImage = new Image()
    heroImage.src = restaurantFront
    heroImage.alt = "The front of the tavern"

    return heroImage
}


function mainText() {
    const mainText = document.createElement("div")
    mainText.classList.add("main-text")

    const section1 = document.createElement("p")
    section1.textContent =
		"Esse cillum officia amet sunt anim aute veniam in veniam fugiat quis et nisi fugiat voluptate. Culpa tempor esse eu incididunt exercitation esse ex. Laboris dolore id fugiat commodo dolore dolor aute irure culpa. Proident consectetur est ullamco commodo ut esse ad irure sint eiusmod culpa anim ex excepteur. Culpa ullamco incididunt non nostrud deserunt labore non ipsum culpa nostrud magna veniam adipisicing. Lorem nulla sit aliqua cupidatat ipsum proident occaecat consequat. Officia voluptate cupidatat eu esse ipsum irure id duis sint dolor.";
    mainText.appendChild(section1)

    return mainText
}




// tumultuous tavern
// tantalising 
// tasteless a drink name



export { header, menuBar, heroImage, mainText }

