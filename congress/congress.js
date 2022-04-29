import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const allMembersOfCongress = [...senators, ...representatives] // modern combining of array data... like a genius!

const senatorsDiv = document.querySelector('.senatorsDiv')
const seniorityHeader = document.querySelector('.seniorityHeader')
const loyaltyList = document.querySelector('.loyaltyList')

function simplifiedSenators() {
  return senators.map(senator => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      gender: senator.gender,
      party: senator.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
      seniority: +senator.seniority,
      state: senator.state,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct
    }
  })
}

function populateSenatorDiv(senatorsArray) {
  senatorsArray.forEach(senator => {
    const senFigure = document.createElement('figure')
    const figImg = document.createElement('img')
    const figCaption = document.createElement('figcaption')

    figImg.src = senator.imgURL
    figCaption.textContent = senator.name + '- ' + senator.state

    senFigure.appendChild(figImg)
    senFigure.appendChild(figCaption)
    senatorsDiv.appendChild(senFigure)
  })
}

populateSenatorDiv(simplifiedSenators())

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

const biggestVactionerList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name).join(' and ')

seniorityHeader.textContent = `The Senator that has spent the most time in office is ${mostSeniorMember.name}\nand the biggest fans of vacations are ${biggestVactionerList}.`

simplifiedSenators().forEach(senator => {
  if(senator.loyaltyPct === 100) {
    let listItem = document.createElement('li')
    listItem.textContent = senator.name
    loyaltyList.appendChild(listItem)
  }
}
)

/*function filterSenatorByParty(senator) {
  return senatorsArray.filter((senator) => senator.party === party)
}

const partySelect = document.querySelector('.partySelect')
partySelect.addEventListener('change', (event) => {
  const usersTypeChoice = event.target.value.toLowerCase()
  const senatorByParty = filterSenatorByParty(usersTypeChoice)
  removeChildren(pokeGrid)
  senatorByParty.forEach((senator.party) => populatePokeCard(senator.party))
}) */