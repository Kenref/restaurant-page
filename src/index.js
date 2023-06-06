import { header, menuBar, mainText } from "./home.js"
import "./css/home-style.css"


const content = document.getElementById("content")

// content.body.appendChild(bareBones())

content.appendChild(header())
content.appendChild(menuBar())
content.appendChild(mainText())



//figure out how to use document.query selector with modules