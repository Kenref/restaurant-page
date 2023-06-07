import { header, menuBar, mainText } from "./home.js"
import { switchToMenu } from "./menu.js";

const content = document.getElementById("content")


content.appendChild(header()).appendChild(menuBar());
const home = content.appendChild(mainText())

//remove home
content.removeChild(home)

content.appendChild(switchToMenu())