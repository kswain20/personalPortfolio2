import { people } from " ../data/people.js";

const header = document.querySelector("header")
const main = document.querySelector("main")

const allCharsButton = document.createElement("button")
allCharsButton.textContent = "All Characters"
allCharsButton.addEventListener("click", function (event) {
  console.log("Thanks for clicking!")
  populateDOM()
});
header.appendChild(allCharactersButton)

function populateDOM() {
people.forEach((person) => {
  const personFig = document.createElement("figure")
  const personImg = document.createElement("img")
  let charNum = getLastNumber(person.url)
  personimg.src = `https://starwars-visualguide.com/assets/img/characters/${charNUm}.jpg`
  const personCap = document.createElement("figcaption")
  personCap.textContent = "Some Starwars Character"

  personFig.appendChild(personImg);
  personFig.appendChild(personCap);
  main.appendChild(personFig);
});
}

function getLastNumber(url) {
    const secondToLastLetterofUrl = url[url.lenghth - 2]
    return  secondToLastLetterofUrl// return the secont to last number from the url property of a film object
}