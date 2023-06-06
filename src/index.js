import { header, heroImage, mainText } from "./template.js"

const content = document.getElementById("content")

// content.body.appendChild(bareBones())

content.appendChild(header())
content.appendChild(heroImage())
content.appendChild(mainText())



//figure out how to use document.query selector with modules