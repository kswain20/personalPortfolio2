import { starships } from "../data/starships.js"
import { removeChildren, getLastNumber } from "../utils/index.js"

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipViewer = document.querySelector('.shipViewer')

const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const shipMessage = document.querySelector('.box p')

closeButton.addEventListener('click', () => modal.classList.toggle('is-active'))
modal.addEventListener('click', () => modal.classList.toggle('is-active'))

function populateNav() {
    starships.forEach((starship) => {
        const listItem = document.createElement('li')
        
        const anchor = document.createElement('a')
        anchor.href = '#'
        anchor.textContent = starship.name
        anchor.addEventListener('click', () => populateShipView(starship))

        listItem.appendChild(anchor)
        navList.appendChild(listItem)
    })
}

populateNav()

function populateShipView(shipData) {
removeChildren(shipViewer)

const shipImage = document.createElement('img')
let shipNum = getLastNumber(shipData.url)
shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
shipImage.addEventListener('error', () => {
    console.log("Image error!!!!")
    shipImage.hidden = true
    shipMessage.textContent = `The ${shipData.name} is for authorized viewers only.`
    modal.classList.toggle('is-active')
})

shipViewer.appendChild(shipImage)
}