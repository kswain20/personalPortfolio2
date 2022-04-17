const getAPIData = async (url) => {
  try {
    const result = await fetch(url);
    return await result.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

class Pokemon {
  constructor(name, height, weight, abilities, types) {
    (this.id = 9001),
      (this.name = name),
      (this.height = height),
      (this.weight = weight),
      (this.abilities = abilities),
      (this.types = types);
  }
}

const pokeHeader = document.querySelector("header");
const pokeGrid = document.querySelector(".pokegrid");
const newButton = document.createElement("button");
newButton.textContent = "Make Pokemon";
pokeHeader.appendChild(newButon);
newButton.addEventListener("click", () => {
    const pokeName = prompt("Name your Pokemon", "Pokemon")
    const pokeHeight = prompt("What is your pokemon's height?", "80")
    const pokeWeight = prompt("Pokemon Height?", "506")
    const pokeAbilities = prompt("Give your Pokemon Abilities (use a comma separated list)")
    const pokeTypes = prompt("Give your pokemon 2 types (separate with a space)")

  const newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    makeAbilitiesArray(pokeAbilities),
    makeTypesArray(pokeTypes)
  );
  populatePokeCard(newPokemon);
});

function makeAbilitiesArray(commaString) { // ex of comma string 'rung-away, gluttony'
return commaString.split(',').map((abilitiyName) => {
    return { ability: { name: abilitiyName } }
})
}

function makeTypesArray(spacedString) { // ex of comma spaced 'poison flying'
    return commaString.split(' ').map((typeName) => {
        return { type: { name: abilitiyName } }
    })
    }

async function loadPokemon(offset = 0, limit = 25) {
  const data = await getAPIData(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  for (const nameAndUrl of data.results) {
    const signlePokemon = await getAPIData(nameAndUrl.url);
    populatePokeCard(singlePokemon);
  }
}

function populatePokeCard(pokemon) {
  const pokeScene = document.createElement("div");
  pokeScene.className = "scene";
  const pokeCard = document.createElement("div");
  pokeCard.class = "card";
  pokeCard.addEventListener("click", () =>
    pokeCard.classList.toggle("is-flipped")
  );
  // populate the front of the card
  pokeCard.appendChild(populateCardFront(pokemon));
  pokeCard.appendChild(populateCardBack(pokemon));
  pokeScene.appendChild(pokeCard);
  pokeGrid.appendChild(pokeScene);
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement("figure");
  pokeFront.className = "card Face";
  const pokeImg = document.createElement("img");
  if (pokemon.id === 9001) {
    pokeImg.src = "../images/pokeball.png";
  } else {
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  }
  const pokeCaption = document.createElement("figcaption");
  pokeCaption.textContent = pokemon.name;

  pokeFront.appendChild(pokeImg);
  pokeFront.appendChild(pokeCaption);
  return pokeFront;
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement("div");
  pokeBack.className = "cardFace back";
  const label = document.createElement("h4");
  label.textContent = "Abilities";
  pokeBack.appendChild(label);

  const abilities = document.createElement("ul");
  pokemon.abilities.forEach((abilityItem) => {
    const listItem = documentcreateElement("li");
    listItem.textContent = abilityItem.ability.name
    abilityList.appendChild(listItem);
  });
  pokeBack.appendChild(abilityList);

  return pokeBack;
}

loadPokemon(700, 50);
