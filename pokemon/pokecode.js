import { removeChildren } from '../utils/index.js'
   
const getAPIData = async (url) => {
  try {
    const result = await fetch(url)
    return await result.json()
  } catch (error) {
    console.error(error)
  }
}

const loadedPokemon = []

class Pokemon {
  constructor(name, height, weight, abilities, types) {
    ;(this.id = 9001),
      (this.name = name),
      (this.height = height),
      (this.weight = weight),
      (this.abilities = abilities),
      (this.types = types)
  }
}

const pokeHeader = document.querySelector('header')
const pokeGrid = document.querySelector('.pokegrid')

const loadButton = document.createElement('button')
loadButton.textContent = 'Load Pokemon'
pokeHeader.appendChild(loadButton)
loadButton.addEventListener('click', async () => {
if( loadedPokemon.length === 0) {
  removeChildren(pokeGrid)
  await loadPokemon(0,50)
}
})

const newButton = document.createElement('button')
newButton.textContent = 'Create Your Own'
pokeHeader.appendChild(newButton)
newButton.className = 'button'
newButton.addEventListener('click', () => {
  const pokeName = prompt('Name your pokemon', 'Name')
  const pokeHeight = prompt("Set pokemon's height", 0)
  const pokeWeight = prompt("Set pokemon's weight", 0)
  const pokeAbilities = prompt(
    "Give your pokemon abilities. (use a comma separated list)",
  )
  const pokeTypes = prompt(
    "Give your pokemon types. (up to 2 types separated by a space)",
  )

  const newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    makeAbilitiesArray(pokeAbilities),
    makeTypesArray(pokeTypes),
  )
  console.log(newPokemon)
  populatePokeCard(newPokemon)
})

function makeAbilitiesArray(commaString) {
  // example comma string 'run-away, gluttony'
  return commaString.split(',').map((abilityName) => {
    return { ability: { name: abilityName } }
  })
}

function makeTypesArray(spacedString) {
  // example spaced string 'poison flying'
  return spacedString.split(' ').map((typeName) => {
    return { type: { name: typeName } }
  })
}

async function loadPokemon(offset = 0, limit = 25) {
  const data = await getAPIData(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  )
  for (const nameAndUrl of data.results) {
    const singlePokemon = await getAPIData(nameAndUrl.url)
    const simplifiedPokemon = {
      id: singlePokemon.id,
      height: singlePokemon.height,
      weight: singlePokemon.weight,
      name: singlePokemon.name,
      abilities: singlePokemon.abilities,
      types: singlePokemon.types,
      moves: singlePokemon.moves.slice(0, 3),
    }
    loadedPokemon.push(simplifiedPokemon)
    populatePokeCard(simplifiedPokemon)
  }
}

function populatePokeCard(pokemon) {
  const pokeScene = document.createElement('div')
  pokeScene.className = 'scene'
  const pokeCard = document.createElement('div')
  pokeCard.className = 'card'
  pokeCard.addEventListener('click', () =>
    pokeCard.classList.toggle('is-flipped'),
  )
  // populate the front of the card
  pokeCard.appendChild(populateCardFront(pokemon))
  pokeCard.appendChild(populateCardBack(pokemon))
  pokeScene.appendChild(pokeCard)
  pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement('figure')
  pokeFront.className = 'cardFace front'

  const pokeType = pokemon.types[0].type.name
  const pokeType2 = pokemon.types[1]?.type.name
  console.log(pokeType, pokeType2)
  pokeFront.style.setProperty('background', getPokeTypeColor(pokeType))

  if(pokeType2) {
    pokeFront.style.setProperty('background', `linear-gradient(${getPokeTypeColor(pokeType)}, ${getPokeTypeColor(pokeType2)})`)
  } 

  const pokeImg = document.createElement('img')
  if (pokemon.id === 9001) {
    pokeImg.src = '../images/pokeball.png'
  } else {
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  }
  const pokeCaption = document.createElement('figcaption')
  pokeCaption.textContent = pokemon.name

  pokeFront.appendChild(pokeImg)
  pokeFront.appendChild(pokeCaption)
  return pokeFront
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement('div')
  pokeBack.className = 'cardFace back'
  const label = document.createElement('h4')
  label.textContent = 'Abilities'
  pokeBack.appendChild(label)

  const abilityList = document.createElement('ul')
  pokemon.abilities.forEach((abilityItem) => {
    const listItem = document.createElement('li')
    listItem.textContent = abilityItem.ability.name
    abilityList.appendChild(listItem)
  })
  pokeBack.appendChild(abilityList)


  const labelA = document.createElement('h4')
  labelA.textContent = 'Types'
  pokeBack.appendChild(labelA)

  const typeList = document.createElement('ul')
  pokemon.types.forEach((typeItem) => {
    const listItem = document.createElement('li')
    listItem.textContent = typeItem.type.name
    typeList.appendChild(listItem)
  })
  pokeBack.appendChild(typeList)

  const labelB = document.createElement('h4')
  labelB.textContent = 'Height'
  pokeBack.appendChild(labelB)

  /*const heightList = document.createElement('ul')
  pokemon.hieght.forEach((heightItem) => {
    const listItem = document.createElement('li')
    listItem.textContent = heightItem.height
    heightList.appendChild(listItem)
  })
  pokeBack.appendChild(heightList)*/


  return pokeBack

}

function getPokeTypeColor(pokeType) {
  // if(pokeType === 'grass') return '#00FF00'
  let color
  switch (pokeType) {
    case 'grass':
      color = '#78C84F'
      break
    case 'fire':
      color = '#F08030'
      break
    case 'water':
      color = '#6790F0'
      break
    case 'bug':
      color = '#A8B820'
      break
    case 'normal':
      color = '#A8A878'
      break
    case 'flying':
      color = '#A890F0'
      break
    case 'poison':
      color = '#A140A0'
      break
    case 'electric':
      color = '#F8CF30'
      break
    case 'psychic':
      color = '#F85888'
      break
    case 'ground':
      color = '#E0C068'
      break
    default:
      color = '#888888'
  }
  return color
}

function filterPokemonByType(type) {
  return loadedPokemon.filter((pokemon) => pokemon.types[0].type.name === type)
}

const typeSelect = document.querySelector('.typeSelect')
typeSelect.addEventListener('change', (event) => {
  const usersTypeChoice = event.target.value.toLowerCase()
  const pokemonByType = filterPokemonByType(usersTypeChoice)
  removeChildren(pokeGrid)
  pokemonByType.forEach((singlePokemon) => populatePokeCard(singlePokemon))
})