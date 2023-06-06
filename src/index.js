import { header, menuBar, mainText } from "./home.js"
import "./css/home-style.css"


const content = document.getElementById("content")

// content.body.appendChild(bareBones())

content.appendChild(header()).appendChild(menuBar());
// content.appendChild(menuBar())
content.appendChild(mainText())



