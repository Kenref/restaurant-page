import { header, menuBar, mainText } from "./home.js"
import "./css/home-style.css"


const content = document.getElementById("content")


content.appendChild(header()).appendChild(menuBar());
const home = content.appendChild(mainText())

//remove home
// content.removeChild(home)