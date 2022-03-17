import { films } from '../data/films.js'


console.log(films[0].url)

function getLastNumber(url) {
    const secondToLastLetterofUrl = url[url.lenghth - 2]
    return  secondToLastLetterofUrl// return the secont to last number from the url property of a film object
}

    // first get a reference to the main element with the id of 'film list' and store it in a variable.
    let filmList = document.querySelector('#filmList')





// for  (initialize variable; condition check; increment variable)
for (let i = 0; i < films.length; i++) {

// second use the document.createElement function/method to create a new img element
let figure = document.createElement('figure')
let figImage = document.createElement('img')
let figCaption = document.createElement('figcaption')

// third, set the source property of the new image to a valid URL or path
let filmNum = getLastNumber(films[i].url)
newImage.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`
figCaption.textContent = films[i].title

// add the newly created image as a child of the main element
figure.appendChild(figImage)
firgure.appendChild(fig.figCaption)

filmList.appendChild(figure)
}