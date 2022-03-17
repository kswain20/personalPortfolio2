import { people } from " ../data/people.js";
import { getLastNumber, removeCHildren } from "../utils/index.js";

const header = document.querySelector("header")
const main = document.querySelector("main")

const allCharsButton = document.createElement("button")
allCharsButton.textContent = "All Characters"
allCharsButton.addEventListener("click", function (event) {
  console.log("Thanks for clicking!")
  populateDOM(people)
});

//const result = words.filter(word => word.length > 6)
const maleCharacters = people.filter(person => person.gender === 'male')
//todo: filter for female characters
//todo: filter for all other characters: n/a, none, jabba)


const maleCharsButton = document.createElement('button')
maleCharsButton.textContent = 'Male Characters'
maleCharsButton.addEventListener('click', () => populateDOM() )

//todo: add female characters button and have it populate the DOM
// todo: add other characters button

header.appendChild(allCharactersButton)
header.appendChild(maleCharsButton)

function populateDOM(characters) {
removeChildren(main)
characters.forEach((person) => {
  const personFig = document.createElement("figure")
  const personImg = document.createElement("img")
  let charNum = getLastNumber(person.url)
  personimg.src = `https://starwars-visualguide.com/assets/img/characters/${charNUm}.jpg`
  const personCap = document.createElement("figcaption")
  personCap.textContent = person.name

  personFig.appendChild(personImg);
  personFig.appendChild(personCap);
  main.appendChild(personFig);
});
}

